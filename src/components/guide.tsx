import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Cpu,
  Download,
  ExternalLink,
  HardDrive,
  Leaf,
  Monitor,
  RefreshCw,
  Shield,
  Usb,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PartitionScheme } from "@/components/partition-scheme";
import { Screenshot, ShotGrid, type Shot } from "@/components/screenshot";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mint-guide-done-v1";

const NAV = [
  { id: "prereq", label: "Antes de começar", num: "00" },
  { id: "iso", label: "Baixar a ISO", num: "01" },
  { id: "usb", label: "Gravar o pendrive", num: "02" },
  { id: "boot", label: "Boot e instalador", num: "03" },
  { id: "disk", label: "Particionamento", num: "04" },
  { id: "finish", label: "Usuário e reinício", num: "05" },
  { id: "after", label: "Pós-instalação", num: "06" },
] as const;

const BIOS_KEYS = [
  { brand: "Dell", key: "F12" },
  { brand: "HP", key: "F9 / Esc" },
  { brand: "Lenovo", key: "F12" },
  { brand: "Acer", key: "F12" },
  { brand: "ASUS", key: "Esc / F8" },
  { brand: "Gigabyte", key: "F12" },
  { brand: "Samsung", key: "F10 / F2" },
  { brand: "Genérico", key: "Del / F2 / Esc" },
];

function useDone() {
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  return { done, toggle, ratio: done.length / NAV.length };
}

export function Guide() {
  const { done, toggle, ratio } = useDone();
  const [active, setActive] = useState<string>("prereq");

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    }
    return () => obs.disconnect();
  }, []);

  const pct = useMemo(() => Math.round(ratio * 100), [ratio]);

  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-leaf focus:px-4 focus:py-2 focus:text-leaf-fg"
      >
        Pular para o conteúdo
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-leaf text-leaf-fg">
              <Leaf className="size-4" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-medium">Instalar Linux Mint</p>
              <p className="text-xs text-muted">22.3 Zena · Cinnamon</p>
            </div>
          </div>
          <p className="hidden text-sm text-muted sm:block">{pct}% do guia marcado</p>
        </div>
        <div className="h-1 bg-subtle">
          <div
            className="h-full bg-leaf transition-[width] duration-200"
            style={{ width: `${pct}%` }}
          />
        </div>
      </header>

      <Hero />

      <div
        id="conteudo"
        className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[15rem_minmax(0,1fr)]"
      >
        <nav className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 hidden text-xs font-medium tracking-wide text-faint uppercase lg:block">
            Índice
          </p>
          <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
            {NAV.map((item) => {
              const isDone = done.includes(item.id);
              const isActive = active === item.id;
              return (
                <li key={item.id} className="shrink-0">
                  <a
                    href={`#${item.id}`}
                    className={cn(
                      "flex h-11 items-center gap-2 rounded-md px-3 text-sm transition-colors duration-150",
                      isActive ? "bg-subtle text-ink" : "text-muted hover:bg-subtle/70 hover:text-ink",
                    )}
                  >
                    <span
                      className={cn(
                        "flex size-5 items-center justify-center rounded-full font-mono text-xs",
                        isDone ? "bg-leaf text-leaf-fg" : "bg-subtle text-faint",
                      )}
                    >
                      {isDone ? <Check className="size-3" /> : item.num.slice(1)}
                    </span>
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <main className="min-w-0 space-y-20 pb-24">
          <Prereq done={done.includes("prereq")} onToggle={() => toggle("prereq")} />
          <Iso done={done.includes("iso")} onToggle={() => toggle("iso")} />
          <UsbStep done={done.includes("usb")} onToggle={() => toggle("usb")} />
          <Boot done={done.includes("boot")} onToggle={() => toggle("boot")} />
          <Disk done={done.includes("disk")} onToggle={() => toggle("disk")} />
          <Finish done={done.includes("finish")} onToggle={() => toggle("finish")} />
          <After done={done.includes("after")} onToggle={() => toggle("after")} />
          <footer className="border-t border-border pt-8 text-sm text-faint">
            <p>
              Prints do instalador, Etcher, Timeshift e Driver Manager vêm do{" "}
              <a
                className="text-muted underline-offset-2 hover:underline"
                href="https://linuxmint-installation-guide.readthedocs.io/"
                target="_blank"
                rel="noreferrer"
              >
                guia oficial de instalação
              </a>
              . Desktop Cinnamon 22 e Rufus: Wikimedia Commons. Páginas de download: capturas de
              linuxmint.com e rufus.ie.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="border-b border-border bg-ink">
      <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[minmax(0,22rem)_1fr]">
        <div className="flex flex-col justify-end gap-5 px-4 py-10 text-leaf-fg sm:px-6 lg:py-16">
          <p className="text-xs font-medium tracking-[0.18em] text-sage uppercase">
            Guia ilustrado · versão mais recente
          </p>
          <h1 className="font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            Instale o Linux Mint vendo cada tela.
          </h1>
          <p className="max-w-sm text-base text-leaf-fg/75">
            Prints reais do site oficial, do Rufus, do Etcher e do instalador Cinnamon — para o aluno
            reconhecer o botão certo na hora H.
          </p>
          <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild className="w-full sm:w-auto">
              <a href="#iso">
                Começar pelo download
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="secondary" asChild className="w-full sm:w-auto">
              <a href="#disk">Ir ao particionamento</a>
            </Button>
          </div>
        </div>
        <div className="relative h-48 overflow-hidden sm:h-64 lg:h-auto lg:min-h-full">
          <img
            src="/tutorial/wiki-mint-22-3.png"
            alt="Área de trabalho do Linux Mint 22.3 Cinnamon"
            className="size-full object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  id,
  num,
  icon: Icon,
  title,
  lead,
}: {
  id: string;
  num: string;
  icon: typeof Download;
  title: string;
  lead: string;
}) {
  return (
    <header className="mb-8 space-y-3">
      <p className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-leaf uppercase">
        <Icon className="size-3.5" />
        Passo {num}
      </p>
      <h2 id={id} className="scroll-mt-28 font-display text-3xl font-medium tracking-tight">
        {title}
      </h2>
      <p className="max-w-2xl text-muted">{lead}</p>
    </header>
  );
}

function MarkDone({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <Button variant={done ? "secondary" : "primary"} onClick={onToggle} className="mt-8">
      {done ? (
        <>
          <Check className="size-4" />
          Etapa concluída
        </>
      ) : (
        "Marcar etapa como feita"
      )}
    </Button>
  );
}

function Tip({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="rounded-lg bg-warn-bg px-4 py-3 text-sm text-warn">
      <p className="font-medium text-ink">{title}</p>
      <div className="mt-1 text-ink/80">{children}</div>
    </aside>
  );
}

function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3 text-sm sm:text-base">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-subtle font-mono text-xs text-muted">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function Prereq({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <section>
      <SectionHead
        id="prereq"
        num="00"
        icon={Shield}
        title="Antes de começar"
        lead="Três coisas. Sem elas o instalador trava no meio ou você perde arquivo."
      />
      <ul className="grid gap-3 sm:grid-cols-3">
        {[
          { t: "Pendrive de 8 GB+", d: "Vai ser formatado. Tire fotos e documentos dele antes." },
          { t: "Backup", d: "Copie o que importa do HD/SSD atual para outro disco ou nuvem." },
          { t: "Internet", d: "Precisa baixar a ISO (~3 GB) e, na instalação, os codecs." },
        ].map((c) => (
          <li key={c.t} className="rounded-xl bg-surface p-5 shadow-border">
            <p className="font-display text-lg font-medium">{c.t}</p>
            <p className="mt-2 text-sm text-muted">{c.d}</p>
          </li>
        ))}
      </ul>
      <MarkDone done={done} onToggle={onToggle} />
    </section>
  );
}

function Iso({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <section className="space-y-8">
      <SectionHead
        id="iso"
        num="01"
        icon={Download}
        title="Obter a imagem ISO"
        lead="Baixe só do site oficial. Espelhos de terceiros e 'ISO turbo' são o jeito mais comum de levar malware."
      />
      <Steps
        items={[
          "Abra linuxmint.com/download — a página abaixo é a real, versão 22.3 Zena.",
          "Cinnamon é a edição recomendada para PCs modernos.",
          "Xfce é a escolha certa se o computador é antigo ou tem pouca RAM.",
          "Pegue a ISO Standard 64-bit (cerca de 3 GB).",
        ]}
      />
      <Screenshot
        src="/tutorial/site-download.png"
        alt="Página oficial de download do Linux Mint 22.3 Zena"
        caption="Site oficial agora: Linux Mint 22.3 “Zena”, com Cinnamon, Xfce e MATE. Clique em Cinnamon se o PC for razoável."
        hint="Cinnamon Edition → Download"
        credit="Captura de linuxmint.com/download.php"
      />
      <div className="grid gap-4 sm:grid-cols-3">
        <Edition
          img="/tutorial/edition-cinnamon.png"
          name="Cinnamon"
          tag="Recomendada"
          text="Visual moderno, efeitos leves, menu clássico. Melhor para a maioria dos alunos."
        />
        <Edition
          img="/tutorial/edition-xfce.png"
          name="Xfce"
          tag="PC fraco"
          text="Leve e estável. Use se o notebook tem 4 GB de RAM ou GPU muito antiga."
        />
        <Edition
          img="/tutorial/edition-mate.png"
          name="MATE"
          tag="Clássica"
          text="Parecida com o GNOME 2. Boa se você já conhece esse desktop."
        />
      </div>
      <Screenshot
        src="/tutorial/wiki-linuxmint22-wilma-english.png"
        alt="Linux Mint 22 Cinnamon com menu de aplicativos aberto"
        caption="É isso que o aluno vê depois de instalar a edição Cinnamon: painel embaixo, menu no canto, ícones familiares."
        credit="Wikimedia Commons · Linux Mint 22 Cinnamon"
      />
      <p className="text-sm">
        <a
          className="inline-flex items-center gap-1 font-medium text-leaf underline-offset-2 hover:underline"
          href="https://linuxmint.com/download.php"
          target="_blank"
          rel="noreferrer"
        >
          Abrir a página de download
          <ExternalLink className="size-3.5" />
        </a>
      </p>
      <MarkDone done={done} onToggle={onToggle} />
    </section>
  );
}

function Edition({
  img,
  name,
  tag,
  text,
}: {
  img: string;
  name: string;
  tag: string;
  text: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl bg-surface shadow-border">
      <img src={img} alt={`Edição ${name}`} className="aspect-video w-full object-cover" />
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-lg font-medium">{name}</h3>
          <span className="rounded-full bg-subtle px-2 py-0.5 text-xs text-muted">{tag}</span>
        </div>
        <p className="text-sm text-muted">{text}</p>
      </div>
    </article>
  );
}

function UsbStep({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <section className="space-y-8">
      <SectionHead
        id="usb"
        num="02"
        icon={Usb}
        title="Gravar no pendrive"
        lead="Não basta copiar o arquivo .iso para o pendrive. É preciso gravar a imagem com Rufus (Windows) ou Etcher (qualquer sistema)."
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-display text-xl font-medium">No Windows · Rufus</h3>
          <Steps
            items={[
              "Baixe o Rufus só de rufus.ie (site abaixo).",
              "Abra o Rufus, escolha o pendrive em Device.",
              "Em Boot selection, clique SELECT e aponte para a ISO do Mint.",
              "Deixe Partition scheme e Target system no padrão que o Rufus sugerir.",
              "Clique START. Confirme que o pendrive pode ser apagado.",
            ]}
          />
          <p className="text-sm">
            <a
              className="inline-flex items-center gap-1 font-medium text-leaf underline-offset-2 hover:underline"
              href="https://rufus.ie/"
              target="_blank"
              rel="noreferrer"
            >
              rufus.ie
              <ExternalLink className="size-3.5" />
            </a>
          </p>
        </div>
        <Screenshot
          src="/tutorial/site-rufus.png"
          alt="Site oficial do Rufus"
          caption="Página oficial do Rufus. Use o primeiro link de download (versão padrão). Evite agregadores."
          hint="Download → rufus-x.x.exe"
          credit="Captura de rufus.ie"
        />
      </div>
      <Screenshot
        src="/tutorial/wiki-rufus.png"
        alt="Janela do Rufus com ISO selecionada"
        caption="Janela real do Rufus: Device (o pendrive), Boot selection (a ISO) e o botão START embaixo. Se perguntar entre ISO mode e DD mode no Mint, ISO mode costuma bastar."
        hint="SELECT → arquivo .iso → START"
        credit="Wikimedia Commons · Rufus"
      />
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="font-display text-xl font-medium">No Linux · Etcher ou USB Image Writer</h3>
          <Steps
            items={[
              "No Mint já instalado: clique com o botão direito na ISO → Make Bootable USB Stick.",
              "Em outras distros: baixe o Balena Etcher (AppImage ou Flatpak).",
              "Select image → a ISO. Select drive → o pendrive. Flash.",
            ]}
          />
        </div>
        <ShotGrid
          shots={
            [
              {
                src: "/tutorial/official-etcher.png",
                alt: "Balena Etcher gravando uma ISO",
                caption: "Etcher: três passos. Select image, select drive, Flash.",
                hint: "Flash!",
                credit: "Guia oficial de instalação Linux Mint",
              },
              {
                src: "/tutorial/official-mintstick.png",
                alt: "USB Image Writer do Linux Mint",
                caption: "No próprio Mint: USB Image Writer. Escolha o pendrive e Write.",
                hint: "Write",
                credit: "Guia oficial de instalação Linux Mint",
              },
            ] satisfies Shot[]
          }
        />
      </div>
      <Tip title="Pendrive some no Windows depois de gravar?">
        Normal. A partição de boot do Mint não é NTFS. Não formate de novo — está pronto para o boot.
      </Tip>
      <MarkDone done={done} onToggle={onToggle} />
    </section>
  );
}

function Boot({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <section className="space-y-8">
      <SectionHead
        id="boot"
        num="03"
        icon={Monitor}
        title="Boot e instalação"
        lead="Reinicie com o pendrive no USB. Entre no menu de boot da placa-mãe e escolha o pendrive — não o disco interno."
      />
      <div className="overflow-x-auto rounded-xl bg-surface p-4 shadow-border">
        <p className="mb-3 text-sm font-medium">Tecla de boot mais comum</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {BIOS_KEYS.map((row) => (
            <div key={row.brand} className="rounded-md bg-subtle px-3 py-2">
              <p className="text-xs text-faint">{row.brand}</p>
              <p className="font-mono text-sm">{row.key}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">
          Aperte a tecla assim que o logo da marca aparecer. Em UEFI, desative Secure Boot se o
          pendrive não iniciar.
        </p>
      </div>
      <Screenshot
        src="/tutorial/official-isolinux.png"
        alt="Menu isolinux do Linux Mint no boot BIOS"
        caption="Menu de boot do Mint em modo BIOS (isolinux). A primeira opção inicia o sistema ao vivo. Use as setas e Enter."
        hint="Start Linux Mint"
        credit="Guia oficial de instalação Linux Mint"
      />
      <Steps
        items={[
          "No menu, escolha Start Linux Mint (não o compatibility mode, a menos que a tela fique preta).",
          "Espere a área de trabalho ao vivo. Nada foi instalado ainda — você está testando o hardware.",
          "Clique duas vezes no ícone Install Linux Mint, na área de trabalho.",
        ]}
      />
      <Screenshot
        src="/tutorial/official-cinnamon.png"
        alt="Área de trabalho Cinnamon da sessão ao vivo"
        caption="Sessão live: o Cinnamon já abre com o instalador na área de trabalho. Explore o Wi-Fi antes de instalar, se quiser."
        hint="Ícone Install Linux Mint"
        credit="Guia oficial de instalação Linux Mint"
      />
      <ShotGrid
        shots={[
          {
            src: "/tutorial/official-installer-language.png",
            alt: "Tela de idioma do instalador",
            caption:
              "Primeira tela do ubiquity: idioma. Português do Brasil fica na lista como Portuguese (Brazil).",
            hint: "Portuguese (Brazil) → Continue",
            credit: "Guia oficial de instalação Linux Mint",
          },
          {
            src: "/tutorial/official-installer-keyboard.png",
            alt: "Layout de teclado do instalador",
            caption:
              "Teclado. Portuguese (Brazil) / Portuguese. Digite acentos no campo de teste antes de continuar.",
            hint: "Portuguese → Continue",
            credit: "Guia oficial de instalação Linux Mint",
          },
          {
            src: "/tutorial/official-installer-internet.png",
            alt: "Conexão de internet no instalador",
            caption: "Conecte o Wi-Fi se ainda não estiver. Codecs e atualizações precisam de rede.",
            credit: "Guia oficial de instalação Linux Mint",
          },
          {
            src: "/tutorial/official-installer-codecs.png",
            alt: "Opção de instalar codecs multimídia",
            caption:
              "Marque Install multimedia codecs. Sem isso, MP3, H.264 e vários sites de vídeo falham.",
            hint: "Marque Install multimedia codecs",
            credit: "Guia oficial de instalação Linux Mint",
          },
        ]}
      />
      <MarkDone done={done} onToggle={onToggle} />
    </section>
  );
}

function Disk({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <section className="space-y-8">
      <SectionHead
        id="disk"
        num="04"
        icon={HardDrive}
        title="Particionamento"
        lead="A tela mais fácil de errar. Erase disk apaga o Windows inteiro. Algo mais deixa você desenhar EFI, swap, / e /home."
      />
      <Screenshot
        src="/tutorial/official-installer-install.png"
        alt="Tipo de instalação: apagar disco"
        caption="Tipo de instalação. A opção marcada nesta foto — Erase disk and install Linux Mint — formata o disco escolhido. Só use se o PC puder ser zerado."
        credit="Guia oficial de instalação Linux Mint"
      />
      <Tip title="Aluno com Windows no mesmo PC">
        Se aparecer Install Linux Mint alongside Windows, o instalador encolhe o Windows sozinho. Para
        controlar SSD vs HD, ignore as opções automáticas e desça até Something else / Algo mais.
      </Tip>
      <Screenshot
        src="/tutorial/official-installer-partitions.png"
        alt="Instalar o Mint ao lado do Windows"
        caption="Quando já existe outro sistema, o instalador oferece instalar ao lado. Útil no dual boot simples. Para o esquema SSD/HD deste guia, use Something else."
        hint="Something else / Algo mais"
        credit="Guia oficial de instalação Linux Mint"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-xl bg-surface p-5 shadow-border">
          <p className="flex items-center gap-2 font-display text-lg font-medium">
            <Cpu className="size-4 text-leaf" />
            SSD · velocidade
          </p>
          <p className="mt-2 text-sm text-muted">
            Sistema, programas e swap. É daqui que o Mint sobe em segundos.
          </p>
        </article>
        <article className="rounded-xl bg-surface p-5 shadow-border">
          <p className="flex items-center gap-2 font-display text-lg font-medium">
            <HardDrive className="size-4 text-leaf" />
            HD · capacidade
          </p>
          <p className="mt-2 text-sm text-muted">
            Documentos, fotos, vídeos, jogos. Monte como /home para o aluno nunca misturar com o SO.
          </p>
        </article>
      </div>
      <PartitionScheme />
      <Screenshot
        src="/tutorial/official-installer-partition.png"
        alt="Tabela de partições do instalador"
        caption="Tabela do Something else: cada linha é uma partição. Selecione o espaço livre no SSD, clique no + e crie EFI, swap e /. Depois o espaço do HD vira /home."
        hint="+ para criar · defina ponto de montagem e ext4"
        credit="Guia oficial de instalação Linux Mint"
      />
      <Steps
        items={[
          "Selecione o disco certo (nvme0n1 costuma ser o SSD, sda o HD — confirme pelo tamanho).",
          "Se a tabela estiver vazia em UEFI, crie uma tabela GPT.",
          "EFI: 500 MB, FAT32, flag boot/esp, sem ponto de montagem (o instalador trata como EFI).",
          "swap: 4 a 8 GB, tipo swap.",
          "/ : 50 a 100 GB, ext4, ponto de montagem /.",
          "/home: resto do HD, ext4, ponto de montagem /home.",
          "Em Device for boot loader installation, aponte para o SSD (o disco, não uma partição).",
        ]}
      />
      <MarkDone done={done} onToggle={onToggle} />
    </section>
  );
}

function Finish({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <section className="space-y-8">
      <SectionHead
        id="finish"
        num="05"
        icon={UserRound}
        title="Usuário, espera e reinício"
        lead="Depois do disco, o instalador só pede fuso, teclado (de novo) e a conta. Aí é café."
      />
      <ShotGrid
        shots={[
          {
            src: "/tutorial/official-installer-timezone.png",
            alt: "Mapa de fuso horário",
            caption:
              "Clique no mapa perto de São Paulo / Fortaleza, ou busque a cidade. Isso acerta relógio e atualizações.",
            hint: "America/Sao_Paulo ou sua cidade",
            credit: "Guia oficial de instalação Linux Mint",
          },
          {
            src: "/tutorial/official-installer-user.png",
            alt: "Criação de usuário e senha",
            caption:
              "Your name vira o nome completo. Username é o login (minúsculo, sem espaço). Anote a senha — ela também é a senha de administrador (sudo).",
            hint: "Preencha os quatro campos → Continue",
            credit: "Guia oficial de instalação Linux Mint",
          },
          {
            src: "/tutorial/official-installer-slideshow.png",
            alt: "Slideshow durante a cópia dos arquivos",
            caption:
              "Enquanto copia, o instalador mostra um passeio pelos apps. Não desligue. Em SSD costuma levar 8–15 minutos.",
            credit: "Guia oficial de instalação Linux Mint",
          },
          {
            src: "/tutorial/official-installer-finished.png",
            alt: "Instalação concluída, reiniciar agora",
            caption:
              "Pronto. Restart Now. Quando pedir, puxe o pendrive e aperte Enter. Se esquecer o pendrive, o PC pode bootar de novo no live.",
            hint: "Restart Now → remova o pendrive → Enter",
            credit: "Guia oficial de instalação Linux Mint",
          },
        ]}
      />
      <MarkDone done={done} onToggle={onToggle} />
    </section>
  );
}

function After({ done, onToggle }: { done: boolean; onToggle: () => void }) {
  return (
    <section className="space-y-8">
      <SectionHead
        id="after"
        num="06"
        icon={RefreshCw}
        title="Quatro ajustes no primeiro dia"
        lead="O sistema já funciona. Estes quatro deixam ele seguro, com vídeo acelerado e loja de apps completa."
      />
      <div className="space-y-10">
        <article className="space-y-4">
          <h3 className="font-display text-xl font-medium">1. Atualizações</h3>
          <p className="text-muted">
            Ícone de escudo na barra. Abra o Gerenciador de Atualizações, instale tudo, reinicie se
            pedir. Faça isso antes de instalar jogos ou drivers.
          </p>
        </article>
        <article className="space-y-4">
          <h3 className="font-display text-xl font-medium">2. Drivers (NVIDIA e Wi-Fi)</h3>
          <p className="text-muted">
            Menu → Gerenciador de Drivers. Se aparecer NVIDIA, marque o driver recomendado
            (proprietary, tested) e aplique. Sem isso, jogos e monitores 4K sofrem.
          </p>
          <ShotGrid
            shots={[
              {
                src: "/tutorial/official-mintdrivers.png",
                alt: "Gerenciador de Drivers com NVIDIA",
                caption: "Driver Manager listando o driver NVIDIA proprietário. Aplique e reinicie.",
                hint: "nvidia-driver-xxx (recommended) → Apply Changes",
                credit: "Guia oficial de instalação Linux Mint",
              },
              {
                src: "/tutorial/official-mintdrivers-2.png",
                alt: "Gerenciador de Drivers após aplicar",
                caption: "Depois de aplicar, o driver fica marcado. Reinicie para valer.",
                credit: "Guia oficial de instalação Linux Mint",
              },
            ]}
          />
        </article>
        <article className="space-y-4">
          <h3 className="font-display text-xl font-medium">3. Timeshift — restauração do sistema</h3>
          <p className="text-muted">
            É o “restaurar sistema” do Windows, só que melhor. Configure no primeiro dia, antes de
            quebrar o Mint testando PPA.
          </p>
          <ShotGrid
            shots={[
              {
                src: "/tutorial/official-timeshift-1.png",
                alt: "Timeshift escolhendo RSYNC",
                caption:
                  "Tipo de snapshot: RSYNC serve para a maioria dos desktops. BTRFS só se a partição raiz for btrfs.",
                hint: "RSYNC → Next",
                credit: "Guia oficial de instalação Linux Mint",
              },
              {
                src: "/tutorial/official-timeshift-2.png",
                alt: "Timeshift escolhendo o disco dos snapshots",
                caption: "Escolha um disco com espaço. Preferível o SSD da raiz, ou um HD interno dedicado.",
                credit: "Guia oficial de instalação Linux Mint",
              },
              {
                src: "/tutorial/official-timeshift-3.png",
                alt: "Agenda de snapshots do Timeshift",
                caption: "Diário + uns quantos semanais é um bom começo. Desmarque níveis que você não vai usar.",
                credit: "Guia oficial de instalação Linux Mint",
              },
              {
                src: "/tutorial/official-timeshift-4.png",
                alt: "Timeshift com o primeiro snapshot criado",
                caption:
                  "Create. Espere terminar. Se o aluno quebrar o sistema depois, restaura em minutos.",
                hint: "Create",
                credit: "Guia oficial de instalação Linux Mint",
              },
            ]}
          />
        </article>
        <article className="space-y-4">
          <h3 className="font-display text-xl font-medium">4. Flathub no Gerenciador de Software</h3>
          <p className="text-muted">
            Abra o Gerenciador de Software → menu de hambúrguer → Preferences / Fontes. Confira se o
            Flathub está ativo. Aí entram Spotify, Discord, Steam, Obsidian e o resto em um clique.
          </p>
          <Screenshot
            src="/tutorial/wiki-software-manager.png"
            alt="Gerenciador de Software do Linux Mint"
            caption="Gerenciador de Software (mintinstall). A busca no topo acha o app; o selo Flatpak indica que veio do Flathub."
            hint="Menu → Preferences → ative Flathub"
            credit="Wikimedia Commons · Software Manager"
          />
        </article>
      </div>
      <Screenshot
        src="/tutorial/desktop-cinnamon-full.png"
        alt="Linux Mint Cinnamon com Nemo e terminal"
        caption="Fim de linha: desktop Cinnamon estável, gerenciador de arquivos e terminal. O aluno já pode trabalhar."
        credit="linuxmint.com/screenshots"
      />
      <div className="rounded-xl bg-ink px-5 py-6 text-leaf-fg">
        <p className="font-display text-2xl font-medium">Checklist do primeiro dia</p>
        <ul className="mt-4 space-y-2 text-sm text-leaf-fg/80">
          <li>Atualizações aplicadas</li>
          <li>Driver NVIDIA/Wi-Fi, se o Gerenciador listar</li>
          <li>Timeshift com pelo menos um snapshot</li>
          <li>Flathub ligado no Gerenciador de Software</li>
        </ul>
      </div>
      <MarkDone done={done} onToggle={onToggle} />
    </section>
  );
}

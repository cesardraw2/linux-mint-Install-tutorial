import { useEffect, useMemo, useState, type ComponentType } from "react";
import {
  ArrowRight,
  Check,
  CircleAlert,
  Download,
  ExternalLink,
  HardDrive,
  Leaf,
  Monitor,
  RefreshCw,
  Shield,
  Usb,
  UserRound,
  type LucideProps,
} from "lucide-react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "@/components/ui/button";
import { Screenshot } from "@/components/screenshot";
import {
  attachmentUrl,
  guideHome,
  guideSections,
  meta,
  type GuideSection,
} from "@/lib/guide-content";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "mint-guide-done-v1";
const SECTION_ICONS: Record<string, ComponentType<LucideProps>> = {
  prereq: Shield,
  iso: Download,
  usb: Usb,
  boot: Monitor,
  disk: HardDrive,
  finish: UserRound,
  after: RefreshCw,
  problems: CircleAlert,
  "format-disk": HardDrive,
};

function useDone() {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(JSON.parse(raw) as string[]);
    } catch {
      /* O guia funciona mesmo se o armazenamento estiver bloqueado. */
    }
  }, []);
  const toggle = (id: string) =>
    setDone((previous) => {
      const next = previous.includes(id)
        ? previous.filter((item) => item !== id)
        : [...previous, id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  return { done, toggle, ratio: done.length / guideSections.length };
}

export function Guide() {
  const { done, toggle, ratio } = useDone();
  const [active, setActive] = useState(guideSections[0]?.id ?? "");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    for (const section of guideSections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);
  const percentage = useMemo(() => Math.round(ratio * 100), [ratio]);

  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-leaf focus:px-4 focus:py-2 focus:text-leaf-fg"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader percentage={percentage} />
      <Hero />
      <div
        id="conteudo"
        className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[15rem_minmax(0,1fr)]"
      >
        <GuideNavigation active={active} done={done} />
        <main className="min-w-0 space-y-20 pb-24">
          {guideSections.map((section) => (
            <GuideSectionView
              key={section.id}
              section={section}
              done={done.includes(section.id)}
              onToggle={() => toggle(section.id)}
            />
          ))}
          <Footer />
        </main>
      </div>
    </div>
  );
}

function SiteHeader({ percentage }: { percentage: number }) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-leaf text-leaf-fg">
            <Leaf className="size-4" />
          </span>
          <div className="leading-tight">
            <p className="font-display text-base font-medium">Instalar Linux Mint</p>
            <p className="text-xs text-muted">
              {meta(guideHome.meta, "release")} · {meta(guideHome.meta, "edition")}
            </p>
          </div>
        </div>
        <p className="hidden text-sm text-muted sm:block">{percentage}% do guia marcado</p>
      </div>
      <div className="h-1 bg-subtle">
        <div
          className="h-full bg-leaf transition-[width] duration-200"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </header>
  );
}

function Hero() {
  const image = attachmentUrl(meta(guideHome.meta, "hero-image"));
  return (
    <section className="border-b border-border bg-ink">
      <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[minmax(0,22rem)_1fr]">
        <div className="flex flex-col justify-end gap-5 px-4 py-10 text-leaf-fg sm:px-6 lg:py-16">
          <p className="text-xs font-medium tracking-[0.18em] text-sage uppercase">
            {meta(guideHome.meta, "subtitle")}
          </p>
          <h1 className="font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl">
            {guideHome.title}
          </h1>
          <p className="max-w-sm text-base text-leaf-fg/75">
            {meta(guideHome.meta, "description")}
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
        {image ? (
          <div className="relative h-48 overflow-hidden sm:h-64 lg:h-auto lg:min-h-full">
            <img
              src={image}
              alt={`Área de trabalho do Linux Mint ${meta(guideHome.meta, "release")}`}
              className="size-full object-cover object-left"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function GuideNavigation({ active, done }: { active: string; done: string[] }) {
  return (
    <nav className="min-w-0 lg:sticky lg:top-24 lg:self-start" aria-label="Etapas do guia">
      <p className="mb-3 hidden text-xs font-medium tracking-wide text-faint uppercase lg:block">
        Índice
      </p>
      <ul className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
        {guideSections.map((section) => {
          const isDone = done.includes(section.id);
          return (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className={cn(
                  "flex h-11 items-center gap-2 rounded-md px-3 text-sm transition-colors duration-150",
                  active === section.id
                    ? "bg-subtle text-ink"
                    : "text-muted hover:bg-subtle/70 hover:text-ink",
                )}
              >
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-full font-mono text-xs",
                    isDone ? "bg-leaf text-leaf-fg" : "bg-subtle text-faint",
                  )}
                >
                  {isDone ? <Check className="size-3" /> : section.number.slice(1)}
                </span>
                {section.navLabel}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function GuideSectionView({
  section,
  done,
  onToggle,
}: {
  section: GuideSection;
  done: boolean;
  onToggle: () => void;
}) {
  const Icon = SECTION_ICONS[section.id] ?? Leaf;
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-leaf uppercase">
          <Icon className="size-3.5" />
          Passo {section.number}
        </p>
        <h2
          id={section.id}
          className="scroll-mt-28 font-display text-3xl font-medium tracking-tight"
        >
          {section.title.replace(/^\d{2}\s+—\s+/, "")}
        </h2>
        {section.lead ? <p className="max-w-2xl text-muted">{section.lead}</p> : null}
      </header>
      <MarkdownContent markdown={section.body} />
      <Button variant={done ? "secondary" : "primary"} onClick={onToggle}>
        {done ? (
          <>
            <Check className="size-4" />
            Etapa concluída
          </>
        ) : (
          "Marcar etapa como feita"
        )}
      </Button>
    </section>
  );
}

function normalizeObsidian(markdown: string): string {
  return markdown
    .replace(/!\[\[([^\]]+)\]\]/g, (_, path: string) => {
      const url = attachmentUrl(path.trim());
      return url ? `![${path.split("/").at(-1) ?? "Imagem do guia"}](${url})` : "";
    })
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, rawTarget: string, label?: string) => {
      const [target, heading] = rawTarget.split("#", 2);
      const section = guideSections.find(
        (item) => !target.trim() || item.sourcePath.endsWith(`/${target.trim()}.md`),
      );
      const anchor = heading ? slugify(heading) : section?.id;
      return anchor ? `[${label ?? heading ?? target}](#${anchor})` : (label ?? target);
    })
    .replace(/^\[←[^\n]+$/gm, "")
    .replace(/^> \[!\w+\]\s*(.+)$/gm, "> **$1**");
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const markdownComponents: Components = {
  h2: ({ children }) => (
    <h3 id={slugify(String(children))} className="font-display text-2xl font-medium">
      {children}
    </h3>
  ),
  h3: ({ children }) => (
    <h4 id={slugify(String(children))} className="font-display text-xl font-medium">
      {children}
    </h4>
  ),
  // Markdown wraps standalone images in paragraphs; a div keeps the Screenshot
  // figure valid while preserving paragraph rhythm for ordinary prose.
  p: ({ children }) => <div className="leading-relaxed text-muted">{children}</div>,
  ul: ({ children, className }) => (
    <ul className={cn("space-y-2 text-muted", className)}>{children}</ul>
  ),
  ol: ({ children }) => <ol className="list-decimal space-y-2 pl-6 text-muted">{children}</ol>,
  li: ({ children, className }) => (
    <li className={cn("pl-1 leading-relaxed marker:text-leaf", className)}>{children}</li>
  ),
  blockquote: ({ children }) => (
    <aside className="rounded-lg bg-warn-bg px-4 py-3 text-sm text-ink [&>p]:text-ink/80">
      {children}
    </aside>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-1 font-medium text-leaf underline-offset-2 hover:underline"
    >
      {children}
      {href?.startsWith("http") ? <ExternalLink className="size-3.5" /> : null}
    </a>
  ),
  img: ({ src, alt }) =>
    src ? (
      <Screenshot
        src={src}
        alt={alt ?? "Captura de tela do guia"}
        caption={alt?.replace(/[-_]/g, " ").replace(/\.[^.]+$/, "") ?? "Imagem do guia"}
      />
    ) : null,
  table: ({ children }) => (
    <div className="overflow-x-auto rounded-xl bg-surface p-4 shadow-border">
      <table className="w-full min-w-lg text-left text-sm">{children}</table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="text-xs tracking-wide text-faint uppercase">{children}</thead>
  ),
  tr: ({ children }) => <tr className="border-b border-border/70">{children}</tr>,
  th: ({ children }) => <th className="py-2 pr-3 font-medium">{children}</th>,
  td: ({ children }) => <td className="py-3 pr-3 text-muted">{children}</td>,
  code: ({ children }) => <code className="font-mono text-sm text-ink">{children}</code>,
  input: ({ style: _style, ...props }) => <input {...props} />,
};

function MarkdownContent({ markdown }: { markdown: string }) {
  return (
    <div className="space-y-6 [&_input[type=checkbox]]:mr-2 [&_input[type=checkbox]]:accent-leaf">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {normalizeObsidian(markdown)}
      </ReactMarkdown>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border pt-8 text-sm text-faint">
      <p>
        Conteúdo, fontes e créditos são mantidos no cofre Obsidian deste projeto, que também é a
        fonte editorial desta página.
      </p>
      <div className="mt-5 flex flex-col gap-1 border-t border-border/70 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p>Versão do guia {meta(guideHome.meta, "version")}</p>
        <p>
          Desenvolvido por{" "}
          <a
            className="text-muted underline-offset-2 hover:underline"
            href={`mailto:${meta(guideHome.meta, "author")}`}
          >
            {meta(guideHome.meta, "author")}
          </a>
        </p>
      </div>
    </footer>
  );
}

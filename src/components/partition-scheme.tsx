import { useState } from "react";
import { cn } from "@/lib/utils";

type Mode = "dual" | "ssd";

const dual = [
  { disk: "SSD", mount: "EFI", size: "500 MB", fs: "FAT32", role: "Boot UEFI", w: "12%" },
  { disk: "SSD", mount: "swap", size: "4–8 GB", fs: "swap", role: "Memória virtual", w: "18%" },
  { disk: "SSD", mount: "/", size: "50–100 GB", fs: "ext4", role: "Sistema e programas", w: "70%" },
  { disk: "HD", mount: "/home", size: "resto", fs: "ext4", role: "Arquivos pessoais", w: "100%" },
];

const ssdOnly = [
  { disk: "SSD", mount: "EFI", size: "500 MB", fs: "FAT32", role: "Boot UEFI", w: "10%" },
  { disk: "SSD", mount: "swap", size: "4–8 GB", fs: "swap", role: "Memória virtual", w: "14%" },
  { disk: "SSD", mount: "/", size: "resto", fs: "ext4", role: "Sistema, apps e arquivos", w: "76%" },
];

export function PartitionScheme() {
  const [mode, setMode] = useState<Mode>("dual");
  const rows = mode === "dual" ? dual : ssdOnly;
  const ssd = rows.filter((r) => r.disk === "SSD");
  const hd = rows.filter((r) => r.disk === "HD");

  return (
    <div className="min-w-0 space-y-5 rounded-xl bg-surface p-4 shadow-border sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="font-display text-xl font-medium">Esquema recomendado</h3>
          <p className="text-sm text-muted">
            Na tela Tipo de instalação, escolha Algo mais para criar estas partições.
          </p>
        </div>
        <div className="grid grid-cols-2 rounded-md bg-subtle p-1">
          {(
            [
              ["dual", "SSD + HD"],
              ["ssd", "Só SSD"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={cn(
                "h-10 rounded-sm px-3 text-sm font-medium transition-colors duration-150",
                mode === id ? "bg-surface text-ink shadow-border" : "text-muted",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <DiskBar label="SSD · velocidade" slices={ssd} />
      {hd.length > 0 ? <DiskBar label="HD · capacidade" slices={hd} /> : null}

      <div className="overflow-x-auto">
        <table className="w-full min-w-lg text-left text-sm">
          <thead className="text-xs tracking-wide text-faint uppercase">
            <tr className="border-b border-border">
              <th className="py-2 pr-3 font-medium">Ponto</th>
              <th className="py-2 pr-3 font-medium">Tamanho</th>
              <th className="py-2 pr-3 font-medium">Formato</th>
              <th className="py-2 pr-3 font-medium">Disco</th>
              <th className="py-2 font-medium">Função</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.mount} className="border-b border-border/70">
                <td className="py-3 pr-3 font-mono text-leaf">{row.mount}</td>
                <td className="py-3 pr-3">{row.size}</td>
                <td className="py-3 pr-3 font-mono">{row.fs}</td>
                <td className="py-3 pr-3">{row.disk}</td>
                <td className="py-3 text-muted">{row.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted">
        Se pular a swap, o Mint cria um <span className="font-mono">swapfile</span> automático na
        partição raiz. Em PCs UEFI a EFI de 500 MB FAT32 é obrigatória — não monte ela em{" "}
        <span className="font-mono">/</span>.
      </p>
    </div>
  );
}

function DiskBar({
  label,
  slices,
}: {
  label: string;
  slices: { mount: string; size: string; w: string }[];
}) {
  return (
    <div className="space-y-2">
      <p className="text-xs font-medium tracking-wide text-faint uppercase">{label}</p>
      <div className="flex h-14 overflow-hidden rounded-md bg-subtle">
        {slices.map((slice, i) => (
          <div
            key={slice.mount}
            className={cn(
              "flex min-w-0 flex-col justify-center px-2",
              i === slices.length - 1 ? "bg-leaf text-leaf-fg" : i === 0 ? "bg-ink text-leaf-fg" : "bg-sage text-leaf-fg",
            )}
            style={{ width: slice.w }}
          >
            <span className="truncate font-mono text-xs">{slice.mount}</span>
            <span className="truncate text-xs leading-tight opacity-80">{slice.size}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

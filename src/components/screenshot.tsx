import { useState } from "react";
import { Expand } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type Shot = {
  src: string;
  alt: string;
  caption: string;
  hint?: string;
  credit?: string;
};

export function Screenshot({ src, alt, caption, hint, credit, className }: Shot & { className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <figure className={cn("space-y-3", className)}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-xl bg-subtle text-left shadow-border"
      >
        <img
          src={src}
          alt={alt}
          className="max-h-96 w-full max-w-full object-contain object-top outline outline-1 -outline-offset-1 outline-ink/10"
        />
        <span className="absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-md bg-ink/75 text-leaf-fg opacity-100 transition-opacity duration-150 sm:opacity-0 sm:group-hover:opacity-100">
          <Expand className="size-4" />
          <span className="sr-only">Ampliar captura de tela</span>
        </span>
      </button>
      {hint ? (
        <p className="rounded-md bg-ok-bg px-3 py-2 text-sm font-medium text-ok">
          Onde clicar: {hint}
        </p>
      ) : null}
      <figcaption className="text-sm leading-snug text-muted">
        {caption}
        {credit ? <span className="mt-1 block text-xs text-faint">{credit}</span> : null}
      </figcaption>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle className="sr-only">{alt}</DialogTitle>
          <img
            src={src}
            alt={alt}
            className="max-h-[86vh] w-full rounded-lg object-contain"
          />
        </DialogContent>
      </Dialog>
    </figure>
  );
}

export function ShotGrid({ shots }: { shots: Shot[] }) {
  if (shots.length === 1) {
    return <Screenshot {...shots[0]} />;
  }
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {shots.map((shot) => (
        <Screenshot key={shot.src} {...shot} />
      ))}
    </div>
  );
}

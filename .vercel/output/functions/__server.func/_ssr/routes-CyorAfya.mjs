import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Shield, c as Leaf, d as Expand, f as Download, h as ArrowRight, l as HardDrive, m as Check, n as UserRound, o as RefreshCw, p as Cpu, r as Usb, s as Monitor, t as X, u as ExternalLink } from "../_libs/lucide-react.mjs";
import { a as DialogPortal$1, c as Slot, i as DialogOverlay$1, n as DialogClose, o as DialogTitle$1, r as DialogContent$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CyorAfya.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			primary: "bg-leaf text-leaf-fg shadow-border hover:opacity-90",
			secondary: "bg-surface text-ink shadow-border hover:bg-subtle",
			ghost: "bg-transparent text-ink hover:bg-subtle",
			outline: "bg-transparent text-ink shadow-border hover:bg-subtle"
		},
		size: {
			sm: "h-9 rounded-sm px-3 text-sm",
			md: "h-11 rounded-md px-4 text-sm",
			lg: "h-12 rounded-lg px-5 text-base",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var dual = [
	{
		disk: "SSD",
		mount: "EFI",
		size: "500 MB",
		fs: "FAT32",
		role: "Boot UEFI",
		w: "12%"
	},
	{
		disk: "SSD",
		mount: "swap",
		size: "4–8 GB",
		fs: "swap",
		role: "Memória virtual",
		w: "18%"
	},
	{
		disk: "SSD",
		mount: "/",
		size: "50–100 GB",
		fs: "ext4",
		role: "Sistema e programas",
		w: "70%"
	},
	{
		disk: "HD",
		mount: "/home",
		size: "resto",
		fs: "ext4",
		role: "Arquivos pessoais",
		w: "100%"
	}
];
var ssdOnly = [
	{
		disk: "SSD",
		mount: "EFI",
		size: "500 MB",
		fs: "FAT32",
		role: "Boot UEFI",
		w: "10%"
	},
	{
		disk: "SSD",
		mount: "swap",
		size: "4–8 GB",
		fs: "swap",
		role: "Memória virtual",
		w: "14%"
	},
	{
		disk: "SSD",
		mount: "/",
		size: "resto",
		fs: "ext4",
		role: "Sistema, apps e arquivos",
		w: "76%"
	}
];
function PartitionScheme() {
	const [mode, setMode] = (0, import_react.useState)("dual");
	const rows = mode === "dual" ? dual : ssdOnly;
	const ssd = rows.filter((r) => r.disk === "SSD");
	const hd = rows.filter((r) => r.disk === "HD");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-w-0 space-y-5 rounded-xl bg-surface p-4 shadow-border sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl font-medium",
					children: "Esquema recomendado"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Na tela Tipo de instalação, escolha Algo mais para criar estas partições."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 rounded-md bg-subtle p-1",
					children: [["dual", "SSD + HD"], ["ssd", "Só SSD"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setMode(id),
						className: cn("h-10 rounded-sm px-3 text-sm font-medium transition-colors duration-150", mode === id ? "bg-surface text-ink shadow-border" : "text-muted"),
						children: label
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiskBar, {
				label: "SSD · velocidade",
				slices: ssd
			}),
			hd.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiskBar, {
				label: "HD · capacidade",
				slices: hd
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-lg text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-xs tracking-wide text-faint uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-border",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Ponto"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Tamanho"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Formato"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Disco"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Função"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 font-mono text-leaf",
								children: row.mount
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3",
								children: row.size
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3 font-mono",
								children: row.fs
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 pr-3",
								children: row.disk
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 text-muted",
								children: row.role
							})
						]
					}, row.mount)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					"Se pular a swap, o Mint cria um ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "swapfile"
					}),
					" automático na partição raiz. Em PCs UEFI a EFI de 500 MB FAT32 é obrigatória — não monte ela em",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono",
						children: "/"
					}),
					"."
				]
			})
		]
	});
}
function DiskBar({ label, slices }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-wide text-faint uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex h-14 overflow-hidden rounded-md bg-subtle",
			children: slices.map((slice, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("flex min-w-0 flex-col justify-center px-2", i === slices.length - 1 ? "bg-leaf text-leaf-fg" : i === 0 ? "bg-ink text-leaf-fg" : "bg-sage text-leaf-fg"),
				style: { width: slice.w },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate font-mono text-xs",
					children: slice.mount
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-xs leading-tight opacity-80",
					children: slice.size
				})]
			}, slice.mount))
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-ink/70 data-[state=open]:animate-in data-[state=closed]:animate-out", className),
		...props
	});
}
function DialogContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[min(96vw,1100px)] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-surface p-2 shadow-border outline-none", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
			className: "absolute top-3 right-3 z-10 flex size-11 items-center justify-center rounded-md bg-ink/70 text-leaf-fg hover:bg-ink",
			"aria-label": "Fechar",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
		})]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("font-display text-lg font-medium", className),
		...props
	});
}
function Screenshot({ src, alt, caption, hint, credit, className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("space-y-3", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOpen(true),
				className: "group relative block w-full overflow-hidden rounded-xl bg-subtle text-left shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					className: "max-h-96 w-full max-w-full object-contain object-top outline outline-1 -outline-offset-1 outline-ink/10"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-md bg-ink/75 text-leaf-fg opacity-100 transition-opacity duration-150 sm:opacity-0 sm:group-hover:opacity-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Expand, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Ampliar captura de tela"
					})]
				})]
			}),
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "rounded-md bg-ok-bg px-3 py-2 text-sm font-medium text-ok",
				children: ["Onde clicar: ", hint]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "text-sm leading-snug text-muted",
				children: [caption, credit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-xs text-faint",
					children: credit
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: setOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "sr-only",
					children: alt
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt,
					className: "max-h-[86vh] w-full rounded-lg object-contain"
				})] })
			})
		]
	});
}
function ShotGrid({ shots }) {
	if (shots.length === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, { ...shots[0] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-6 sm:grid-cols-2",
		children: shots.map((shot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, { ...shot }, shot.src))
	});
}
var STORAGE_KEY = "mint-guide-done-v1";
var NAV = [
	{
		id: "prereq",
		label: "Antes de começar",
		num: "00"
	},
	{
		id: "iso",
		label: "Baixar a ISO",
		num: "01"
	},
	{
		id: "usb",
		label: "Gravar o pendrive",
		num: "02"
	},
	{
		id: "boot",
		label: "Boot e instalador",
		num: "03"
	},
	{
		id: "disk",
		label: "Particionamento",
		num: "04"
	},
	{
		id: "finish",
		label: "Usuário e reinício",
		num: "05"
	},
	{
		id: "after",
		label: "Pós-instalação",
		num: "06"
	}
];
var BIOS_KEYS = [
	{
		brand: "Dell",
		key: "F12"
	},
	{
		brand: "HP",
		key: "F9 / Esc"
	},
	{
		brand: "Lenovo",
		key: "F12"
	},
	{
		brand: "Acer",
		key: "F12"
	},
	{
		brand: "ASUS",
		key: "Esc / F8"
	},
	{
		brand: "Gigabyte",
		key: "F12"
	},
	{
		brand: "Samsung",
		key: "F10 / F2"
	},
	{
		brand: "Genérico",
		key: "Del / F2 / Esc"
	}
];
function useDone() {
	const [done, setDone] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setDone(JSON.parse(raw));
		} catch {}
	}, []);
	const toggle = (id) => {
		setDone((prev) => {
			const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
			localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
			return next;
		});
	};
	return {
		done,
		toggle,
		ratio: done.length / NAV.length
	};
}
function Guide() {
	const { done, toggle, ratio } = useDone();
	const [active, setActive] = (0, import_react.useState)("prereq");
	(0, import_react.useEffect)(() => {
		const ids = NAV.map((n) => n.id);
		const obs = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-20% 0px -55% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		for (const id of ids) {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		}
		return () => obs.disconnect();
	}, []);
	const pct = (0, import_react.useMemo)(() => Math.round(ratio * 100), [ratio]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#conteudo",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-leaf focus:px-4 focus:py-2 focus:text-leaf-fg",
				children: "Pular para o conteúdo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-9 items-center justify-center rounded-md bg-leaf text-leaf-fg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "size-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-base font-medium",
								children: "Instalar Linux Mint"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted",
								children: "22.3 Zena · Cinnamon"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hidden text-sm text-muted sm:block",
						children: [pct, "% do guia marcado"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-1 bg-subtle",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full bg-leaf transition-[width] duration-200",
						style: { width: `${pct}%` }
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "conteudo",
				className: "mx-auto grid w-full max-w-6xl gap-10 px-4 py-10 lg:grid-cols-[15rem_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "min-w-0 lg:sticky lg:top-24 lg:self-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 hidden text-xs font-medium tracking-wide text-faint uppercase lg:block",
						children: "Índice"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0",
						children: NAV.map((item) => {
							const isDone = done.includes(item.id);
							const isActive = active === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `#${item.id}`,
									className: cn("flex h-11 items-center gap-2 rounded-md px-3 text-sm transition-colors duration-150", isActive ? "bg-subtle text-ink" : "text-muted hover:bg-subtle/70 hover:text-ink"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: cn("flex size-5 items-center justify-center rounded-full font-mono text-xs", isDone ? "bg-leaf text-leaf-fg" : "bg-subtle text-faint"),
										children: isDone ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }) : item.num.slice(1)
									}), item.label]
								})
							}, item.id);
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 space-y-20 pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Prereq, {
							done: done.includes("prereq"),
							onToggle: () => toggle("prereq")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Iso, {
							done: done.includes("iso"),
							onToggle: () => toggle("iso")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UsbStep, {
							done: done.includes("usb"),
							onToggle: () => toggle("usb")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Boot, {
							done: done.includes("boot"),
							onToggle: () => toggle("boot")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disk, {
							done: done.includes("disk"),
							onToggle: () => toggle("disk")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Finish, {
							done: done.includes("finish"),
							onToggle: () => toggle("finish")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(After, {
							done: done.includes("after"),
							onToggle: () => toggle("after")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "border-t border-border pt-8 text-sm text-faint",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Prints do instalador, Etcher, Timeshift e Driver Manager vêm do",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									className: "text-muted underline-offset-2 hover:underline",
									href: "https://linuxmint-installation-guide.readthedocs.io/",
									target: "_blank",
									rel: "noreferrer",
									children: "guia oficial de instalação"
								}),
								". Desktop Cinnamon 22 e Rufus: Wikimedia Commons. Páginas de download: capturas de linuxmint.com e rufus.ie."
							] })
						})
					]
				})]
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-b border-border bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-stretch lg:grid-cols-[minmax(0,22rem)_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end gap-5 px-4 py-10 text-leaf-fg sm:px-6 lg:py-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.18em] text-sage uppercase",
						children: "Guia ilustrado · versão mais recente"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl leading-tight font-medium tracking-tight sm:text-5xl",
						children: "Instale o Linux Mint vendo cada tela."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-sm text-base text-leaf-fg/75",
						children: "Prints reais do site oficial, do Rufus, do Etcher e do instalador Cinnamon — para o aluno reconhecer o botão certo na hora H."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#iso",
								children: ["Começar pelo download", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							asChild: true,
							className: "w-full sm:w-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#disk",
								children: "Ir ao particionamento"
							})
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-48 overflow-hidden sm:h-64 lg:h-auto lg:min-h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/tutorial/wiki-mint-22-3.png",
					alt: "Área de trabalho do Linux Mint 22.3 Cinnamon",
					className: "size-full object-cover object-left"
				})
			})]
		})
	});
}
function SectionHead({ id, num, icon: Icon, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "mb-8 space-y-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "flex items-center gap-2 text-xs font-medium tracking-[0.16em] text-leaf uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }),
					"Passo ",
					num
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id,
				className: "scroll-mt-28 font-display text-3xl font-medium tracking-tight",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-2xl text-muted",
				children: lead
			})
		]
	});
}
function MarkDone({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: done ? "secondary" : "primary",
		onClick: onToggle,
		className: "mt-8",
		children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Etapa concluída"] }) : "Marcar etapa como feita"
	});
}
function Tip({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-lg bg-warn-bg px-4 py-3 text-sm text-warn",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-1 text-ink/80",
			children
		})]
	});
}
function Steps({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "space-y-2",
		children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex gap-3 text-sm sm:text-base",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-subtle font-mono text-xs text-muted",
				children: i + 1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
		}, item))
	});
}
function Prereq({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			id: "prereq",
			num: "00",
			icon: Shield,
			title: "Antes de começar",
			lead: "Três coisas. Sem elas o instalador trava no meio ou você perde arquivo."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-3 sm:grid-cols-3",
			children: [
				{
					t: "Pendrive de 8 GB+",
					d: "Vai ser formatado. Tire fotos e documentos dele antes."
				},
				{
					t: "Backup",
					d: "Copie o que importa do HD/SSD atual para outro disco ou nuvem."
				},
				{
					t: "Internet",
					d: "Precisa baixar a ISO (~3 GB) e, na instalação, os codecs."
				}
			].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-xl bg-surface p-5 shadow-border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-medium",
					children: c.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: c.d
				})]
			}, c.t))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkDone, {
			done,
			onToggle
		})
	] });
}
function Iso({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				id: "iso",
				num: "01",
				icon: Download,
				title: "Obter a imagem ISO",
				lead: "Baixe só do site oficial. Espelhos de terceiros e 'ISO turbo' são o jeito mais comum de levar malware."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
				"Abra linuxmint.com/download — a página abaixo é a real, versão 22.3 Zena.",
				"Cinnamon é a edição recomendada para PCs modernos.",
				"Xfce é a escolha certa se o computador é antigo ou tem pouca RAM.",
				"Pegue a ISO Standard 64-bit (cerca de 3 GB)."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/site-download.png",
				alt: "Página oficial de download do Linux Mint 22.3 Zena",
				caption: "Site oficial agora: Linux Mint 22.3 “Zena”, com Cinnamon, Xfce e MATE. Clique em Cinnamon se o PC for razoável.",
				hint: "Cinnamon Edition → Download",
				credit: "Captura de linuxmint.com/download.php"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edition, {
						img: "/tutorial/edition-cinnamon.png",
						name: "Cinnamon",
						tag: "Recomendada",
						text: "Visual moderno, efeitos leves, menu clássico. Melhor para a maioria dos alunos."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edition, {
						img: "/tutorial/edition-xfce.png",
						name: "Xfce",
						tag: "PC fraco",
						text: "Leve e estável. Use se o notebook tem 4 GB de RAM ou GPU muito antiga."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edition, {
						img: "/tutorial/edition-mate.png",
						name: "MATE",
						tag: "Clássica",
						text: "Parecida com o GNOME 2. Boa se você já conhece esse desktop."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/wiki-linuxmint22-wilma-english.png",
				alt: "Linux Mint 22 Cinnamon com menu de aplicativos aberto",
				caption: "É isso que o aluno vê depois de instalar a edição Cinnamon: painel embaixo, menu no canto, ícones familiares.",
				credit: "Wikimedia Commons · Linux Mint 22 Cinnamon"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					className: "inline-flex items-center gap-1 font-medium text-leaf underline-offset-2 hover:underline",
					href: "https://linuxmint.com/download.php",
					target: "_blank",
					rel: "noreferrer",
					children: ["Abrir a página de download", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkDone, {
				done,
				onToggle
			})
		]
	});
}
function Edition({ img, name, tag, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "overflow-hidden rounded-xl bg-surface shadow-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: img,
			alt: `Edição ${name}`,
			className: "aspect-video w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-2 p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg font-medium",
					children: name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full bg-subtle px-2 py-0.5 text-xs text-muted",
					children: tag
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: text
			})]
		})]
	});
}
function UsbStep({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				id: "usb",
				num: "02",
				icon: Usb,
				title: "Gravar no pendrive",
				lead: "Não basta copiar o arquivo .iso para o pendrive. É preciso gravar a imagem com Rufus (Windows) ou Etcher (qualquer sistema)."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-medium",
							children: "No Windows · Rufus"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
							"Baixe o Rufus só de rufus.ie (site abaixo).",
							"Abra o Rufus, escolha o pendrive em Device.",
							"Em Boot selection, clique SELECT e aponte para a ISO do Mint.",
							"Deixe Partition scheme e Target system no padrão que o Rufus sugerir.",
							"Clique START. Confirme que o pendrive pode ser apagado."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								className: "inline-flex items-center gap-1 font-medium text-leaf underline-offset-2 hover:underline",
								href: "https://rufus.ie/",
								target: "_blank",
								rel: "noreferrer",
								children: ["rufus.ie", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
					src: "/tutorial/site-rufus.png",
					alt: "Site oficial do Rufus",
					caption: "Página oficial do Rufus. Use o primeiro link de download (versão padrão). Evite agregadores.",
					hint: "Download → rufus-x.x.exe",
					credit: "Captura de rufus.ie"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/wiki-rufus.png",
				alt: "Janela do Rufus com ISO selecionada",
				caption: "Janela real do Rufus: Device (o pendrive), Boot selection (a ISO) e o botão START embaixo. Se perguntar entre ISO mode e DD mode no Mint, ISO mode costuma bastar.",
				hint: "SELECT → arquivo .iso → START",
				credit: "Wikimedia Commons · Rufus"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-medium",
						children: "No Linux · Etcher ou USB Image Writer"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
						"No Mint já instalado: clique com o botão direito na ISO → Make Bootable USB Stick.",
						"Em outras distros: baixe o Balena Etcher (AppImage ou Flatpak).",
						"Select image → a ISO. Select drive → o pendrive. Flash."
					] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotGrid, { shots: [{
					src: "/tutorial/official-etcher.png",
					alt: "Balena Etcher gravando uma ISO",
					caption: "Etcher: três passos. Select image, select drive, Flash.",
					hint: "Flash!",
					credit: "Guia oficial de instalação Linux Mint"
				}, {
					src: "/tutorial/official-mintstick.png",
					alt: "USB Image Writer do Linux Mint",
					caption: "No próprio Mint: USB Image Writer. Escolha o pendrive e Write.",
					hint: "Write",
					credit: "Guia oficial de instalação Linux Mint"
				}] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {
				title: "Pendrive some no Windows depois de gravar?",
				children: "Normal. A partição de boot do Mint não é NTFS. Não formate de novo — está pronto para o boot."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkDone, {
				done,
				onToggle
			})
		]
	});
}
function Boot({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				id: "boot",
				num: "03",
				icon: Monitor,
				title: "Boot e instalação",
				lead: "Reinicie com o pendrive no USB. Entre no menu de boot da placa-mãe e escolha o pendrive — não o disco interno."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "overflow-x-auto rounded-xl bg-surface p-4 shadow-border",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-sm font-medium",
						children: "Tecla de boot mais comum"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2 sm:grid-cols-4",
						children: BIOS_KEYS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md bg-subtle px-3 py-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-faint",
								children: row.brand
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm",
								children: row.key
							})]
						}, row.brand))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "Aperte a tecla assim que o logo da marca aparecer. Em UEFI, desative Secure Boot se o pendrive não iniciar."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/official-isolinux.png",
				alt: "Menu isolinux do Linux Mint no boot BIOS",
				caption: "Menu de boot do Mint em modo BIOS (isolinux). A primeira opção inicia o sistema ao vivo. Use as setas e Enter.",
				hint: "Start Linux Mint",
				credit: "Guia oficial de instalação Linux Mint"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
				"No menu, escolha Start Linux Mint (não o compatibility mode, a menos que a tela fique preta).",
				"Espere a área de trabalho ao vivo. Nada foi instalado ainda — você está testando o hardware.",
				"Clique duas vezes no ícone Install Linux Mint, na área de trabalho."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/official-cinnamon.png",
				alt: "Área de trabalho Cinnamon da sessão ao vivo",
				caption: "Sessão live: o Cinnamon já abre com o instalador na área de trabalho. Explore o Wi-Fi antes de instalar, se quiser.",
				hint: "Ícone Install Linux Mint",
				credit: "Guia oficial de instalação Linux Mint"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotGrid, { shots: [
				{
					src: "/tutorial/official-installer-language.png",
					alt: "Tela de idioma do instalador",
					caption: "Primeira tela do ubiquity: idioma. Português do Brasil fica na lista como Portuguese (Brazil).",
					hint: "Portuguese (Brazil) → Continue",
					credit: "Guia oficial de instalação Linux Mint"
				},
				{
					src: "/tutorial/official-installer-keyboard.png",
					alt: "Layout de teclado do instalador",
					caption: "Teclado. Portuguese (Brazil) / Portuguese. Digite acentos no campo de teste antes de continuar.",
					hint: "Portuguese → Continue",
					credit: "Guia oficial de instalação Linux Mint"
				},
				{
					src: "/tutorial/official-installer-internet.png",
					alt: "Conexão de internet no instalador",
					caption: "Conecte o Wi-Fi se ainda não estiver. Codecs e atualizações precisam de rede.",
					credit: "Guia oficial de instalação Linux Mint"
				},
				{
					src: "/tutorial/official-installer-codecs.png",
					alt: "Opção de instalar codecs multimídia",
					caption: "Marque Install multimedia codecs. Sem isso, MP3, H.264 e vários sites de vídeo falham.",
					hint: "Marque Install multimedia codecs",
					credit: "Guia oficial de instalação Linux Mint"
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkDone, {
				done,
				onToggle
			})
		]
	});
}
function Disk({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				id: "disk",
				num: "04",
				icon: HardDrive,
				title: "Particionamento",
				lead: "A tela mais fácil de errar. Erase disk apaga o Windows inteiro. Algo mais deixa você desenhar EFI, swap, / e /home."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/official-installer-install.png",
				alt: "Tipo de instalação: apagar disco",
				caption: "Tipo de instalação. A opção marcada nesta foto — Erase disk and install Linux Mint — formata o disco escolhido. Só use se o PC puder ser zerado.",
				credit: "Guia oficial de instalação Linux Mint"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {
				title: "Aluno com Windows no mesmo PC",
				children: "Se aparecer Install Linux Mint alongside Windows, o instalador encolhe o Windows sozinho. Para controlar SSD vs HD, ignore as opções automáticas e desça até Something else / Algo mais."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/official-installer-partitions.png",
				alt: "Instalar o Mint ao lado do Windows",
				caption: "Quando já existe outro sistema, o instalador oferece instalar ao lado. Útil no dual boot simples. Para o esquema SSD/HD deste guia, use Something else.",
				hint: "Something else / Algo mais",
				credit: "Guia oficial de instalação Linux Mint"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-display text-lg font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cpu, { className: "size-4 text-leaf" }), "SSD · velocidade"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Sistema, programas e swap. É daqui que o Mint sobe em segundos."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-center gap-2 font-display text-lg font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardDrive, { className: "size-4 text-leaf" }), "HD · capacidade"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Documentos, fotos, vídeos, jogos. Monte como /home para o aluno nunca misturar com o SO."
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PartitionScheme, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/official-installer-partition.png",
				alt: "Tabela de partições do instalador",
				caption: "Tabela do Something else: cada linha é uma partição. Selecione o espaço livre no SSD, clique no + e crie EFI, swap e /. Depois o espaço do HD vira /home.",
				hint: "+ para criar · defina ponto de montagem e ext4",
				credit: "Guia oficial de instalação Linux Mint"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
				"Selecione o disco certo (nvme0n1 costuma ser o SSD, sda o HD — confirme pelo tamanho).",
				"Se a tabela estiver vazia em UEFI, crie uma tabela GPT.",
				"EFI: 500 MB, FAT32, flag boot/esp, sem ponto de montagem (o instalador trata como EFI).",
				"swap: 4 a 8 GB, tipo swap.",
				"/ : 50 a 100 GB, ext4, ponto de montagem /.",
				"/home: resto do HD, ext4, ponto de montagem /home.",
				"Em Device for boot loader installation, aponte para o SSD (o disco, não uma partição)."
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkDone, {
				done,
				onToggle
			})
		]
	});
}
function Finish({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				id: "finish",
				num: "05",
				icon: UserRound,
				title: "Usuário, espera e reinício",
				lead: "Depois do disco, o instalador só pede fuso, teclado (de novo) e a conta. Aí é café."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotGrid, { shots: [
				{
					src: "/tutorial/official-installer-timezone.png",
					alt: "Mapa de fuso horário",
					caption: "Clique no mapa perto de São Paulo / Fortaleza, ou busque a cidade. Isso acerta relógio e atualizações.",
					hint: "America/Sao_Paulo ou sua cidade",
					credit: "Guia oficial de instalação Linux Mint"
				},
				{
					src: "/tutorial/official-installer-user.png",
					alt: "Criação de usuário e senha",
					caption: "Your name vira o nome completo. Username é o login (minúsculo, sem espaço). Anote a senha — ela também é a senha de administrador (sudo).",
					hint: "Preencha os quatro campos → Continue",
					credit: "Guia oficial de instalação Linux Mint"
				},
				{
					src: "/tutorial/official-installer-slideshow.png",
					alt: "Slideshow durante a cópia dos arquivos",
					caption: "Enquanto copia, o instalador mostra um passeio pelos apps. Não desligue. Em SSD costuma levar 8–15 minutos.",
					credit: "Guia oficial de instalação Linux Mint"
				},
				{
					src: "/tutorial/official-installer-finished.png",
					alt: "Instalação concluída, reiniciar agora",
					caption: "Pronto. Restart Now. Quando pedir, puxe o pendrive e aperte Enter. Se esquecer o pendrive, o PC pode bootar de novo no live.",
					hint: "Restart Now → remova o pendrive → Enter",
					credit: "Guia oficial de instalação Linux Mint"
				}
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkDone, {
				done,
				onToggle
			})
		]
	});
}
function After({ done, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				id: "after",
				num: "06",
				icon: RefreshCw,
				title: "Quatro ajustes no primeiro dia",
				lead: "O sistema já funciona. Estes quatro deixam ele seguro, com vídeo acelerado e loja de apps completa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "space-y-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-medium",
							children: "1. Atualizações"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted",
							children: "Ícone de escudo na barra. Abra o Gerenciador de Atualizações, instale tudo, reinicie se pedir. Faça isso antes de instalar jogos ou drivers."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium",
								children: "2. Drivers (NVIDIA e Wi-Fi)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "Menu → Gerenciador de Drivers. Se aparecer NVIDIA, marque o driver recomendado (proprietary, tested) e aplique. Sem isso, jogos e monitores 4K sofrem."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotGrid, { shots: [{
								src: "/tutorial/official-mintdrivers.png",
								alt: "Gerenciador de Drivers com NVIDIA",
								caption: "Driver Manager listando o driver NVIDIA proprietário. Aplique e reinicie.",
								hint: "nvidia-driver-xxx (recommended) → Apply Changes",
								credit: "Guia oficial de instalação Linux Mint"
							}, {
								src: "/tutorial/official-mintdrivers-2.png",
								alt: "Gerenciador de Drivers após aplicar",
								caption: "Depois de aplicar, o driver fica marcado. Reinicie para valer.",
								credit: "Guia oficial de instalação Linux Mint"
							}] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium",
								children: "3. Timeshift — restauração do sistema"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "É o “restaurar sistema” do Windows, só que melhor. Configure no primeiro dia, antes de quebrar o Mint testando PPA."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShotGrid, { shots: [
								{
									src: "/tutorial/official-timeshift-1.png",
									alt: "Timeshift escolhendo RSYNC",
									caption: "Tipo de snapshot: RSYNC serve para a maioria dos desktops. BTRFS só se a partição raiz for btrfs.",
									hint: "RSYNC → Next",
									credit: "Guia oficial de instalação Linux Mint"
								},
								{
									src: "/tutorial/official-timeshift-2.png",
									alt: "Timeshift escolhendo o disco dos snapshots",
									caption: "Escolha um disco com espaço. Preferível o SSD da raiz, ou um HD interno dedicado.",
									credit: "Guia oficial de instalação Linux Mint"
								},
								{
									src: "/tutorial/official-timeshift-3.png",
									alt: "Agenda de snapshots do Timeshift",
									caption: "Diário + uns quantos semanais é um bom começo. Desmarque níveis que você não vai usar.",
									credit: "Guia oficial de instalação Linux Mint"
								},
								{
									src: "/tutorial/official-timeshift-4.png",
									alt: "Timeshift com o primeiro snapshot criado",
									caption: "Create. Espere terminar. Se o aluno quebrar o sistema depois, restaura em minutos.",
									hint: "Create",
									credit: "Guia oficial de instalação Linux Mint"
								}
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-medium",
								children: "4. Flathub no Gerenciador de Software"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted",
								children: "Abra o Gerenciador de Software → menu de hambúrguer → Preferences / Fontes. Confira se o Flathub está ativo. Aí entram Spotify, Discord, Steam, Obsidian e o resto em um clique."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
								src: "/tutorial/wiki-software-manager.png",
								alt: "Gerenciador de Software do Linux Mint",
								caption: "Gerenciador de Software (mintinstall). A busca no topo acha o app; o selo Flatpak indica que veio do Flathub.",
								hint: "Menu → Preferences → ative Flathub",
								credit: "Wikimedia Commons · Software Manager"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screenshot, {
				src: "/tutorial/desktop-cinnamon-full.png",
				alt: "Linux Mint Cinnamon com Nemo e terminal",
				caption: "Fim de linha: desktop Cinnamon estável, gerenciador de arquivos e terminal. O aluno já pode trabalhar.",
				credit: "linuxmint.com/screenshots"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-ink px-5 py-6 text-leaf-fg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-medium",
					children: "Checklist do primeiro dia"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-leaf-fg/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Atualizações aplicadas" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Driver NVIDIA/Wi-Fi, se o Gerenciador listar" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Timeshift com pelo menos um snapshot" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Flathub ligado no Gerenciador de Software" })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkDone, {
				done,
				onToggle
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Guide, {});
}
//#endregion
export { Home as component };

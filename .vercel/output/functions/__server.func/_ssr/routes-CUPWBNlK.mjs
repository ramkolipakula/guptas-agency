import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as motion, n as useSpring, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { _ as Bot, a as MessageCircle, c as ListChecks, d as IndianRupee, f as Headphones, g as CodeXml, h as Cpu, i as Phone, l as Leaf, m as Globe, n as Wrench, o as Menu, p as Handshake, r as Sparkles, s as Mail, t as X, u as Layers, v as ArrowUpRight, y as ArrowRight } from "../_libs/lucide-react.mjs";
import { i as unionType, n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUPWBNlK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_devices_default = "/assets/hero-devices-JvSz6SkI.jpg";
var project_hala_default = "/assets/project-hala-D6DngWsV.jpg";
var project_prep100_default = "/assets/project-prep100-Bhm3Q3-D.jpg";
var project_backlot_default = "/assets/project-backlot-Cn9t4YDc.jpg";
var CONTACT = {
	email: "subrahmanyamkolipakula@gmail.com",
	phoneDisplay: "+91 7670815170",
	phoneTel: "+917670815170",
	whatsapp: "917670815170"
};
var waLink = (text) => `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
var mailLink = (subject, body = "") => `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
var PROJECTS = [
	{
		title: "HALA",
		category: "AI-Powered Agriculture Platform",
		type: "Personal project",
		image: project_hala_default,
		imageNote: "Representative concept mockup",
		description: "An agriculture-focused AI concept combining voice-based assistance, computer vision, weather and market information, and AI-powered guidance.",
		tech: [
			"Voice assistance",
			"Computer vision",
			"Weather & market data",
			"AI guidance"
		],
		demonstrates: "Bringing several AI capabilities together into one practical assistant."
	},
	{
		title: "Prep100",
		category: "AI Learning Platform",
		type: "Personal project",
		image: project_prep100_default,
		imageNote: "Representative concept mockup",
		description: "An educational platform concept featuring AI-assisted learning, quizzes, mock tests, progress tracking, and analytics.",
		tech: [
			"AI-assisted learning",
			"Quizzes & mock tests",
			"Progress analytics"
		],
		demonstrates: "Designing data-driven dashboards and learner-focused product flows."
	},
	{
		title: "BACKLOT",
		category: "R&D Proposal Evaluation Platform",
		type: "Experimental project",
		image: project_backlot_default,
		imageNote: "Representative concept mockup",
		description: "A technical platform involving evidence traceability, dependency analysis, knowledge retrieval, and observability.",
		tech: [
			"Evidence traceability",
			"Dependency analysis",
			"Knowledge retrieval",
			"Observability"
		],
		demonstrates: "Structuring complex technical information so decisions are traceable."
	},
	{
		title: "Gupta's Agency Website",
		category: "Agency Website",
		type: "Agency project",
		image: hero_devices_default,
		imageNote: "Illustrative design visual",
		description: "The website you're on now — an editorial, responsive site with restrained motion and honest, trust-first content.",
		tech: [
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Framer Motion"
		],
		demonstrates: "Responsive design, accessibility, and conversion-focused structure."
	}
];
var VERIFIED_METRICS = [];
var fadeRise = {
	hidden: {
		opacity: 0,
		y: 24
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var stagger = {
	hidden: {},
	show: { transition: { staggerChildren: .1 } }
};
function Reveal({ children, className, as = "div" }) {
	const reduce = useReducedMotion();
	const Comp = as === "ul" ? motion.ul : motion.div;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		variants: stagger,
		initial: reduce ? false : "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		children
	});
}
function Item({ children, className, as = "div" }) {
	const Comp = as === "li" ? motion.li : as === "article" ? motion.article : motion.div;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
		className,
		variants: fadeRise,
		children
	});
}
function SectionHeading({ eyebrow, title, sub, light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		className: "mx-auto mb-14 max-w-2xl text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `eyebrow ${light ? "text-gold" : "text-primary/70"}`,
				children: eyebrow
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl font-medium md:text-5xl",
				children: title
			}) }),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: `mt-4 text-lg ${light ? "text-deep-foreground/75" : "text-muted-foreground"}`,
				children: sub
			}) })
		]
	});
}
var consultSchema = objectType({
	name: stringType().trim().min(1, "Please enter your name").max(100),
	business: stringType().trim().max(120).optional(),
	contact: stringType().trim().min(5, "Add an email or phone number").max(150),
	service: stringType().min(1, "Choose a service"),
	description: stringType().trim().min(10, "Tell us a little more (10+ characters)").max(1e3),
	budget: stringType().optional()
});
var feedbackSchema = objectType({
	name: stringType().trim().min(1, "Please enter your name").max(100),
	email: unionType([literalType(""), stringType().trim().email("Enter a valid email").max(255)]),
	stage: stringType().min(1, "Choose a project stage"),
	message: stringType().trim().min(10, "Please write at least 10 characters").max(1e3)
});
function Field({ id, label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: id,
			className: "mb-1.5 block text-sm font-semibold",
			children: label
		}),
		children,
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `${id}-err`,
			className: "mt-1 text-sm text-destructive",
			children: error
		})
	] });
}
function readForm(e) {
	return Object.fromEntries(new FormData(e.currentTarget).entries());
}
function ConsultationForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(null);
	const build = (e) => {
		e.preventDefault();
		const raw = readForm(e);
		if (raw.website) return;
		const r = consultSchema.safeParse(raw);
		if (!r.success) {
			setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
			setReady(null);
			return;
		}
		setErrors({});
		const d = r.data;
		setReady(`Hello Gupta's Agency, I'd like a personal consultation.\n\nName: ${d.name}\nBusiness: ${d.business || "-"}\nContact: ${d.contact}\nService: ${d.service}\nBudget: ${d.budget || "Not sure yet"}\n\nProject:\n${d.description}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: build,
		noValidate: true,
		className: "space-y-4 rounded-2xl bg-card p-6 text-card-foreground shadow-soft md:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				name: "website",
				tabIndex: -1,
				autoComplete: "off",
				className: "hidden",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "c-name",
					label: "Name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "c-name",
						name: "name",
						className: "field",
						autoComplete: "name"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "c-biz",
					label: "Business name (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "c-biz",
						name: "business",
						className: "field",
						autoComplete: "organization"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "c-contact",
				label: "Email or phone",
				error: errors.contact,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					id: "c-contact",
					name: "contact",
					className: "field"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "c-service",
					label: "Service required",
					error: errors.service,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "c-service",
						name: "service",
						className: "field",
						defaultValue: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select…"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Website" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Application" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "AI & Automation" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Not sure yet" })
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "c-budget",
					label: "Budget range (optional)",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						id: "c-budget",
						name: "budget",
						className: "field",
						defaultValue: "",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Prefer to discuss"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Under ₹25,000" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹25,000 – ₹75,000" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "₹75,000 – ₹2,00,000" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Above ₹2,00,000" })
						]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "c-desc",
				label: "Short project description",
				error: errors.description,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "c-desc",
					name: "description",
					rows: 4,
					className: "field resize-y"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
				children: "Book a Personal Consultation"
			}),
			ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-secondary p-4",
				role: "status",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold text-secondary-foreground",
					children: "Your request is ready. Send it to us via:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: waLink(ready),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 16 }), " WhatsApp"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: mailLink("Consultation request", ready),
						className: "inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { size: 16 }), " Email"]
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "No meeting is booked automatically — your details open in WhatsApp or email so you can send them directly. We only use them to reply to you."
			})
		]
	});
}
function FeedbackForm() {
	const [errors, setErrors] = (0, import_react.useState)({});
	const [ready, setReady] = (0, import_react.useState)(null);
	const build = (e) => {
		e.preventDefault();
		const raw = readForm(e);
		if (raw.company) return;
		const r = feedbackSchema.safeParse(raw);
		if (!r.success) {
			setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
			return;
		}
		setErrors({});
		const d = r.data;
		setReady(`Name: ${d.name}\nEmail: ${d.email || "-"}\nProject stage: ${d.stage}\n\nFeedback:\n${d.message}`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: build,
		noValidate: true,
		className: "space-y-4 rounded-2xl bg-card p-6 text-card-foreground shadow-soft",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-secondary-foreground",
				children: "Online feedback storage isn't connected yet — submitting opens an email draft addressed to us."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				name: "company",
				tabIndex: -1,
				autoComplete: "off",
				className: "hidden",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "f-name",
					label: "Name",
					error: errors.name,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "f-name",
						name: "name",
						className: "field",
						autoComplete: "name"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					id: "f-email",
					label: "Email (optional)",
					error: errors.email,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						id: "f-email",
						name: "email",
						type: "email",
						className: "field",
						autoComplete: "email"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "f-stage",
				label: "Project stage",
				error: errors.stage,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
					id: "f-stage",
					name: "stage",
					className: "field",
					defaultValue: "",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "",
							disabled: true,
							children: "Select…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Requirements review" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Design approval" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Development review" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Final handover" })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				id: "f-msg",
				label: "Feedback message",
				error: errors.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					id: "f-msg",
					name: "message",
					rows: 3,
					className: "field resize-y"
				})
			}),
			ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: mailLink("Project feedback", ready),
				className: "block w-full rounded-full bg-primary px-6 py-3 text-center font-semibold text-primary-foreground",
				children: "Open email draft"
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-deep",
				children: "Prepare Feedback"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground",
				children: "Feedback is only shared publicly with your explicit permission."
			})
		]
	});
}
var NAV = [
	["Home", "#home"],
	["Services", "#services"],
	["Our Work", "#work"],
	["Process", "#process"],
	["Feedback", "#feedback"],
	["Contact", "#contact"]
];
function Wordmark({ light }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "#home",
		className: "flex items-center gap-2",
		"aria-label": "Gupta's Agency home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, {
			className: light ? "text-gold" : "text-primary",
			size: 26,
			strokeWidth: 2.2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-serif text-xl font-semibold tracking-tight",
			children: "Gupta's Agency"
		})]
	});
}
function Header() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const { scrollYProgress } = useScroll();
	const progress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30
	});
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 24);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b bg-background/90 backdrop-blur" : "bg-transparent"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gold",
				style: { scaleX: progress },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20",
				"aria-label": "Main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-7 lg:flex",
						children: NAV.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: h,
							className: "text-sm font-medium text-foreground/80 transition hover:text-primary",
							children: l
						}) }, h))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-deep sm:inline-flex",
							children: "Let's Talk"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid h-11 w-11 place-items-center rounded-full lg:hidden",
							onClick: () => setOpen(!open),
							"aria-expanded": open,
							"aria-label": open ? "Close menu" : "Open menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						})]
					})
				]
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t bg-background px-5 pb-6 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col",
					children: NAV.map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						onClick: () => setOpen(false),
						className: "block py-3 text-lg font-medium",
						children: l
					}) }, h))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					onClick: () => setOpen(false),
					className: "mt-2 block rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground",
					children: "Let's Talk"
				})]
			})
		]
	});
}
function Botanical({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 200 300",
		className,
		"aria-hidden": true,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M100 300 C100 200 95 120 100 10" }), [
			40,
			80,
			120,
			160,
			200,
			240
		].map((y, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M100 ${y + 20} C ${60 - i * 2} ${y} 40 ${y - 20} 30 ${y - 30} C 60 ${y - 25} 90 ${y} 100 ${y + 20}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M100 ${y + 40} C ${140 + i * 2} ${y + 20} 160 ${y} 170 ${y - 10} C 140 ${y - 5} 110 ${y + 20} 100 ${y + 40}` })] }, y))]
	});
}
function Hero() {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Botanical, { className: "pointer-events-none absolute -left-10 top-24 h-96 w-64 text-primary/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Botanical, { className: "pointer-events-none absolute -right-8 bottom-0 h-[28rem] w-72 -scale-x-100 text-primary/10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { size: 14 }), " Websites · Apps · AI Automations"]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-6 text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl",
						children: [
							"Your Business.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "text-primary",
								children: "Our Tech."
							})
						]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 font-serif text-2xl text-foreground/90",
						children: "We Build Websites, Apps & AI-Powered Automations."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground",
						children: "Helping businesses build a stronger online presence with modern technology, thoughtful design, and solutions tailored to their needs."
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
						className: "mt-9 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-soft transition hover:bg-deep",
							children: [
								"Discuss Your Project",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 18,
									className: "transition group-hover:translate-x-1"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#work",
							className: "inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-4 font-semibold text-primary transition hover:bg-secondary",
							children: "Explore Our Work"
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: reduce ? false : {
						opacity: 0,
						scale: .96,
						y: 20
					},
					animate: {
						opacity: 1,
						scale: 1,
						y: 0
					},
					transition: {
						duration: .9,
						delay: .2,
						ease: [
							.22,
							1,
							.36,
							1
						]
					},
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -inset-4 rounded-[2rem] bg-secondary",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_devices_default,
							width: 1408,
							height: 1056,
							alt: "Illustrative website for a botanical boutique shown on a laptop and phone",
							className: "relative rounded-3xl shadow-lift",
							fetchPriority: "high"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-3 text-center text-xs text-muted-foreground",
							children: "Illustrative design for a sample small-business brand"
						})
					]
				})]
			})
		]
	});
}
var SERVICES = [
	{
		icon: Globe,
		title: "Websites",
		desc: "Clear, fast, mobile-first websites that help customers find and trust you.",
		items: [
			"Business websites",
			"Landing pages",
			"Portfolio websites",
			"Responsive mobile-first design",
			"Contact forms and lead generation",
			"API and database integrations where required"
		],
		style: "bg-card"
	},
	{
		icon: Layers,
		title: "Applications",
		desc: "Practical tools that fit how your business actually works.",
		items: [
			"Web applications",
			"Custom business tools",
			"Dashboards and internal tools",
			"Backend APIs and database-connected applications",
			"Mobile application development where supported by the agreed project scope"
		],
		style: "bg-primary text-primary-foreground"
	},
	{
		icon: Bot,
		title: "AI & Automations",
		desc: "AI and automation applied where it saves real time and effort.",
		items: [
			"AI-powered chatbots",
			"Workflow automation",
			"Repetitive task automation",
			"AI-assisted information retrieval",
			"Third-party API integrations",
			"Custom AI features based on actual business requirements"
		],
		style: "bg-secondary"
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Services",
				title: "What We Build",
				sub: "Digital solutions designed around your business."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "grid gap-6 md:grid-cols-3",
				children: SERVICES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
					as: "article",
					className: `group flex flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${s.style}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 place-items-center rounded-2xl bg-gold/25",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { size: 26 })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-3xl font-medium",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 opacity-80",
							children: s.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 flex-1 space-y-2.5 text-sm",
							children: s.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), i]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs opacity-70",
							children: "Features are scoped per project — not every item is included in every build."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "mt-5 inline-flex items-center gap-1.5 font-semibold underline-offset-4 group-hover:underline",
							children: ["Discuss This Service ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })]
						})
					]
				}, s.title))
			})]
		})
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "bg-deep py-24 text-deep-foreground md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				light: true,
				eyebrow: "Selected projects",
				title: "Our Work",
				sub: "Explore selected projects, experiments, and digital products we've worked on."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "grid gap-8 md:grid-cols-2",
				children: PROJECTS.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
					as: "article",
					className: `group overflow-hidden rounded-3xl bg-background text-foreground transition duration-300 hover:-translate-y-1 hover:shadow-lift ${i % 3 === 0 ? "md:col-span-2 md:grid md:grid-cols-[1.3fr_1fr]" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[16/11] overflow-hidden bg-secondary",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: `${p.title} — ${p.imageNote.toLowerCase()}`,
							loading: "lazy",
							width: 1280,
							height: 896,
							className: "h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute left-4 top-4 rounded-full bg-deep/85 px-3 py-1 text-xs font-semibold text-deep-foreground",
							children: p.imageNote
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col p-7 md:p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow text-primary/70",
									children: p.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground",
									children: p.type
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-3xl font-medium",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-muted-foreground",
								children: p.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-5 flex flex-wrap gap-2",
								children: p.tech.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "rounded-full border px-3 py-1 text-xs font-medium",
									children: t
								}, t))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "Demonstrates: "
								}), p.demonstrates]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex flex-wrap gap-4 text-sm font-semibold text-primary",
								children: [
									p.liveUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.liveUrl,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "inline-flex items-center gap-1 hover:underline",
										children: ["View Project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
									}),
									p.caseStudyUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: p.caseStudyUrl,
										className: "inline-flex items-center gap-1 hover:underline",
										children: ["View Case Study ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 15 })]
									}),
									!p.liveUrl && !p.caseStudyUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: "#contact",
										className: "inline-flex items-center gap-1 hover:underline",
										children: ["Ask us about this project ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 15 })]
									})
								]
							})
						]
					})]
				}, p.title))
			})]
		})
	});
}
var COMMITMENTS = [
	{
		icon: Handshake,
		t: "1:1 Consultation",
		d: "Direct conversations to understand business requirements."
	},
	{
		icon: Wrench,
		t: "Custom-Built Solutions",
		d: "Scope and functionality tailored to the project."
	},
	{
		icon: Cpu,
		t: "AI-Ready Development",
		d: "AI features considered where they provide practical value."
	},
	{
		icon: ListChecks,
		t: "Clear Project Process",
		d: "Requirements, planning, development, and handover."
	}
];
function Credibility() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Our commitments",
					title: "Small Team. Thoughtful Solutions."
				}),
				VERIFIED_METRICS.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: VERIFIED_METRICS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-5xl text-primary",
							children: m.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: m.label
						})]
					}, m.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "grid divide-y rounded-3xl border bg-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x",
					children: COMMITMENTS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
						className: "p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, {
								className: "text-primary",
								size: 28
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-sans text-lg font-bold tracking-normal",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: c.d
							})
						]
					}, c.t))
				})
			]
		})
	});
}
var WHY = [
	{
		icon: IndianRupee,
		t: "Affordable Pricing",
		d: "Get a solution tailored to your budget and requirements, without unnecessary complexity."
	},
	{
		icon: MessageCircle,
		t: "Personal Consultation",
		d: "We speak with you directly to understand your business, goals, audience, and requirements before development begins."
	},
	{
		icon: CodeXml,
		t: "Modern Technology",
		d: "We choose appropriate tools and technologies to create responsive, maintainable digital solutions."
	},
	{
		icon: Headphones,
		t: "Personal Support",
		d: "Clear communication and guidance throughout the agreed project scope."
	}
];
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.4fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-primary/70",
				children: "Why Gupta's Agency"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-4xl font-medium md:text-5xl",
				children: "Technology That Works for Your Business."
			}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "grid gap-5 sm:grid-cols-2",
				children: WHY.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
					className: "rounded-2xl bg-background p-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(w.icon, {
							className: "text-primary",
							size: 24
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-2xl font-medium",
							children: w.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: w.d
						})
					]
				}, w.t))
			})]
		})
	});
}
var STEPS = [
	["Let's Talk", "We discuss your business, target audience, goals, budget, and required functionality."],
	["Plan & Design", "We define the scope, prepare the structure, and agree on the design and project deliverables."],
	["Build & Test", "We develop the agreed solution and test the key features and responsive experience."],
	["Launch & Support", "We help prepare the product for launch and provide support according to the agreed scope."]
];
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our process",
				title: "From Your Idea to a Working Product."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				as: "ul",
				className: "relative grid gap-10 border-l-2 border-gold/50 pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-10",
				children: STEPS.map(([t, d], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
					as: "li",
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute -left-[2.6rem] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary lg:-top-[3.15rem] lg:left-0",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-5xl text-gold",
							children: ["0", i + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-2xl font-medium",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: d
						})
					]
				}, t))
			})]
		})
	});
}
function Feedback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "feedback",
		className: "bg-secondary/60 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary/70",
					children: "Feedback"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-medium md:text-5xl",
					children: "Your Feedback Matters."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "We're building Gupta's Agency around clear communication, useful solutions, and better client experiences. Your feedback helps us improve."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 font-semibold",
					children: "How we collect feedback during a project:"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "ul",
					className: "mt-4 space-y-3",
					children: [
						"Requirements review",
						"Design approval",
						"Development review",
						"Final handover feedback"
					].map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
						as: "li",
						className: "flex items-center gap-4 rounded-xl bg-background px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground",
							children: i + 1
						}), p]
					}, p))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				variants: fadeRise,
				initial: "hidden",
				whileInView: "show",
				viewport: { once: true },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeedbackForm, {})
			})]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mx-auto max-w-4xl rounded-[2rem] border bg-card px-6 py-14 text-center md:px-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-primary/70",
					children: "Pricing"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-medium md:text-5xl",
					children: "The Right Solution for Your Budget."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground",
					children: "Every business has different requirements. We discuss your needs first and recommend a suitable scope before development begins."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
					children: "We aim to be an affordable alternative to traditional agencies — with clear scope and deliverables agreed up front."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#contact",
					className: "mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-accent-foreground transition hover:brightness-95",
					children: ["Get a Project Estimate ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 18 })]
				}) })
			]
		})
	});
}
function Contact() {
	const wa = waLink("Hello Gupta's Agency, I'd like to discuss a project.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "bg-primary py-24 text-primary-foreground md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.15fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Contact"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-4xl font-medium md:text-6xl",
					children: "Let's Build Something Useful."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-lg opacity-80",
					children: "Have a business idea or need a better online presence? Let's talk about what you need before we start building."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Item, {
					className: "mt-10 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "flex items-center gap-4 rounded-2xl bg-deep/40 p-4 transition hover:bg-deep/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 break-all",
								children: CONTACT.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `tel:${CONTACT.phoneTel}`,
							className: "flex items-center gap-4 rounded-2xl bg-deep/40 p-4 transition hover:bg-deep/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "shrink-0 text-gold" }), CONTACT.phoneDisplay]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: wa,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-4 rounded-2xl bg-deep/40 p-4 transition hover:bg-deep/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "shrink-0 text-gold" }), "Chat on WhatsApp"]
						})
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, {})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-deep py-14 text-deep-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { light: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xs text-sm opacity-70",
					children: "A new digital agency building websites, applications, and AI-powered automations for small businesses and startups."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Footer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2 text-sm",
						children: [
							["Services", "#services"],
							["Our Work", "#work"],
							["Process", "#process"],
							["Contact", "#contact"]
						].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: h,
							className: "opacity-80 hover:opacity-100 hover:underline",
							children: l
						}) }, h))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${CONTACT.email}`,
							className: "block break-all opacity-80 hover:opacity-100",
							children: CONTACT.email
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${CONTACT.phoneTel}`,
							className: "block opacity-80 hover:opacity-100",
							children: CONTACT.phoneDisplay
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: mailLink("Project enquiry"),
							className: "block opacity-80 hover:opacity-100",
							children: "Send an enquiry"
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mx-auto mt-12 max-w-7xl border-t border-deep-foreground/15 px-5 pt-6 text-xs opacity-60",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Gupta's Agency. All rights reserved."
			]
		})]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-card focus:px-4 focus:py-2",
			children: "Skip to content"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			id: "main",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Credibility, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feedback, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Home as component };

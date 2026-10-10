import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Globe,
  Handshake,
  Headphones,
  IndianRupee,
  Layers,
  Leaf,
  ListChecks,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  QrCode,
  Sparkles,
  Wrench,
  X,
  Cpu,
} from "lucide-react";
import heroImg from "@/assets/hero-devices.jpg";
import { CONTACT, PROJECTS, VERIFIED_METRICS, mailLink, waLink } from "@/lib/site-data";
import { Item, Reveal, SectionHeading, fadeRise } from "@/components/site/motion";
import { ConsultationForm, FeedbackForm } from "@/components/site/Forms";

const TITLE = "Gupta's Agency — Websites, Apps & AI Automations for Small Businesses";
const DESC =
  "Gupta's Agency builds websites, applications, and AI-powered automations for small businesses, startups, and growing brands — with personal consultation and clear scope.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const NAV = [
  ["Home", "#home"],
  ["Services", "#services"],
  ["Our Work", "#work"],
  ["Process", "#process"],
  ["Feedback", "#feedback"],
  ["Contact", "#contact"],
] as const;

function Wordmark({ light }: { light?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2" aria-label="Gupta's Agency home">
      <Leaf className={light ? "text-gold" : "text-primary"} size={26} strokeWidth={2.2} />
      <span className="font-serif text-xl font-semibold tracking-tight">Gupta's Agency</span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "border-b bg-background/90 backdrop-blur" : "bg-transparent"}`}
    >
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-gold"
        style={{ scaleX: progress }}
        aria-hidden
      />
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20"
        aria-label="Main"
      >
        <Wordmark />
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="text-sm font-medium text-foreground/80 transition hover:text-primary"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-deep sm:inline-flex"
          >
            Let's Talk
          </a>
          <button
            className="grid h-11 w-11 place-items-center rounded-full lg:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t bg-background px-5 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {NAV.map(([l, h]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-primary py-3 text-center font-semibold text-primary-foreground"
          >
            Let's Talk
          </a>
        </div>
      )}
    </header>
  );
}

function Botanical({ className }: { className: string }) {
  return (
    <svg
      viewBox="0 0 200 300"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M100 300 C100 200 95 120 100 10" />
      {[40, 80, 120, 160, 200, 240].map((y, i) => (
        <g key={y}>
          <path
            d={`M${100} ${y + 20} C ${60 - i * 2} ${y} ${40} ${y - 20} ${30} ${y - 30} C ${60} ${y - 25} ${90} ${y} ${100} ${y + 20}`}
          />
          <path
            d={`M${100} ${y + 40} C ${140 + i * 2} ${y + 20} ${160} ${y} ${170} ${y - 10} C ${140} ${y - 5} ${110} ${y + 20} ${100} ${y + 40}`}
          />
        </g>
      ))}
    </svg>
  );
}

function Hero() {
  const reduce = useReducedMotion();
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <Botanical className="pointer-events-none absolute -left-10 top-24 h-96 w-64 text-primary/10" />
      <Botanical className="pointer-events-none absolute -right-8 bottom-0 h-[28rem] w-72 -scale-x-100 text-primary/10" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <Item>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-secondary-foreground">
              <Sparkles size={14} /> Websites · Apps · AI Automations
            </p>
          </Item>
          <Item>
            <h1 className="mt-6 text-5xl font-medium leading-[1.02] sm:text-6xl lg:text-7xl">
              Your Business.
              <br />
              <em className="text-primary">Our Tech.</em>
            </h1>
          </Item>
          <Item>
            <p className="mt-6 font-serif text-2xl text-foreground/90">
              We Build Websites, Apps & AI-Powered Automations.
            </p>
          </Item>
          <Item>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Helping businesses build a stronger online presence with modern technology, thoughtful
              design, and solutions tailored to their needs.
            </p>
          </Item>
          <Item className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-soft transition hover:bg-deep"
            >
              Discuss Your Project{" "}
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-4 font-semibold text-primary transition hover:bg-secondary"
            >
              Explore Our Work
            </a>
          </Item>
        </Reveal>
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-secondary" aria-hidden />
          <img
            src={heroImg}
            width={1408}
            height={1056}
            alt="Illustrative website for a botanical boutique shown on a laptop and phone"
            className="relative rounded-3xl shadow-lift"
            fetchPriority="high"
          />
          <p className="relative mt-3 text-center text-xs text-muted-foreground">
            Illustrative design for a sample small-business brand
          </p>
        </motion.div>
      </div>
    </section>
  );
}

const SERVICES = [
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
      "API and database integrations where required",
    ],
    style: "bg-card",
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
      "Mobile application development where supported by the agreed project scope",
    ],
    style: "bg-primary text-primary-foreground",
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
      "Custom AI features based on actual business requirements",
    ],
    style: "bg-secondary",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Services"
          title="What We Build"
          sub="Digital solutions designed around your business."
        />
        <Reveal className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((s) => (
            <Item
              as="article"
              key={s.title}
              className={`group flex flex-col rounded-3xl border p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lift ${s.style}`}
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gold/25">
                <s.icon size={26} />
              </div>
              <h3 className="mt-6 text-3xl font-medium">{s.title}</h3>
              <p className="mt-3 opacity-80">{s.desc}</p>
              <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                {s.items.map((i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs opacity-70">
                Features are scoped per project — not every item is included in every build.
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-1.5 font-semibold underline-offset-4 group-hover:underline"
              >
                Discuss This Service <ArrowUpRight size={16} />
              </a>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-deep py-24 text-deep-foreground md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          light
          eyebrow="Selected projects"
          title="Our Work"
          sub="Explore selected projects, experiments, and digital products we've worked on."
        />
        <Reveal className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Item
              as="article"
              key={p.title}
              className={`group overflow-hidden rounded-3xl bg-background text-foreground transition duration-300 hover:-translate-y-1 hover:shadow-lift ${i % 3 === 0 ? "md:col-span-2 md:grid md:grid-cols-[1.3fr_1fr]" : ""}`}
            >
              <div className="relative aspect-[16/11] overflow-hidden bg-secondary">
                <img
                  src={p.image}
                  alt={`${p.title} — ${p.imageNote.toLowerCase()}`}
                  loading="lazy"
                  width={1280}
                  height={896}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-deep/85 px-3 py-1 text-xs font-semibold text-deep-foreground">
                  {p.imageNote}
                </span>
              </div>
              <div className="flex flex-col p-7 md:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="eyebrow text-primary/70">{p.category}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-semibold text-secondary-foreground">
                    {p.type}
                  </span>
                </div>
                <h3 className="mt-3 text-3xl font-medium">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border px-3 py-1 text-xs font-medium">
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm">
                  <span className="font-semibold">Demonstrates: </span>
                  {p.demonstrates}
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-primary">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      View Project <ArrowUpRight size={15} />
                    </a>
                  )}
                  {p.caseStudyUrl && (
                    <a
                      href={p.caseStudyUrl}
                      className="inline-flex items-center gap-1 hover:underline"
                    >
                      View Case Study <ArrowUpRight size={15} />
                    </a>
                  )}
                  {!p.liveUrl && !p.caseStudyUrl && (
                    <a href="#contact" className="inline-flex items-center gap-1 hover:underline">
                      Ask us about this project <ArrowRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const COMMITMENTS = [
  {
    icon: Handshake,
    t: "1:1 Consultation",
    d: "Direct conversations to understand business requirements.",
  },
  {
    icon: Wrench,
    t: "Custom-Built Solutions",
    d: "Scope and functionality tailored to the project.",
  },
  {
    icon: Cpu,
    t: "AI-Ready Development",
    d: "AI features considered where they provide practical value.",
  },
  {
    icon: ListChecks,
    t: "Clear Project Process",
    d: "Requirements, planning, development, and handover.",
  },
];

function Credibility() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Our commitments" title="Small Team. Thoughtful Solutions." />
        {VERIFIED_METRICS.length > 0 && (
          <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VERIFIED_METRICS.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-serif text-5xl text-primary">{m.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        )}
        <Reveal className="grid divide-y rounded-3xl border bg-card sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {COMMITMENTS.map((c) => (
            <Item key={c.t} className="p-8">
              <c.icon className="text-primary" size={28} />
              <h3 className="mt-5 font-sans text-lg font-bold tracking-normal">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const WHY = [
  {
    icon: IndianRupee,
    t: "Affordable Pricing",
    d: "Get a solution tailored to your budget and requirements, without unnecessary complexity.",
  },
  {
    icon: MessageCircle,
    t: "Personal Consultation",
    d: "We speak with you directly to understand your business, goals, audience, and requirements before development begins.",
  },
  {
    icon: Code2,
    t: "Modern Technology",
    d: "We choose appropriate tools and technologies to create responsive, maintainable digital solutions.",
  },
  {
    icon: Headphones,
    t: "Personal Support",
    d: "Clear communication and guidance throughout the agreed project scope.",
  },
];

function Why() {
  return (
    <section className="bg-secondary py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <Item>
            <p className="eyebrow text-primary/70">Why Gupta's Agency</p>
          </Item>
          <Item>
            <h2 className="mt-3 text-4xl font-medium md:text-5xl">
              Technology That Works for Your Business.
            </h2>
          </Item>
        </Reveal>
        <Reveal className="grid gap-5 sm:grid-cols-2">
          {WHY.map((w) => (
            <Item key={w.t} className="rounded-2xl bg-background p-7">
              <w.icon className="text-primary" size={24} />
              <h3 className="mt-4 text-2xl font-medium">{w.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.d}</p>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const STEPS = [
  [
    "Let's Talk",
    "We discuss your business, target audience, goals, budget, and required functionality.",
  ],
  [
    "Plan & Design",
    "We define the scope, prepare the structure, and agree on the design and project deliverables.",
  ],
  [
    "Build & Test",
    "We develop the agreed solution and test the key features and responsive experience.",
  ],
  [
    "Launch & Support",
    "We help prepare the product for launch and provide support according to the agreed scope.",
  ],
];

function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading eyebrow="Our process" title="From Your Idea to a Working Product." />
        <Reveal
          as="ul"
          className="relative grid gap-10 border-l-2 border-gold/50 pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t-2 lg:pl-0 lg:pt-10"
        >
          {STEPS.map(([t, d], i) => (
            <Item as="li" key={t} className="relative">
              <span
                className="absolute -left-[2.6rem] top-1 h-4 w-4 rounded-full border-4 border-background bg-primary lg:-top-[3.15rem] lg:left-0"
                aria-hidden
              />
              <p className="font-serif text-5xl text-gold">0{i + 1}</p>
              <h3 className="mt-3 text-2xl font-medium">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </Item>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function Feedback() {
  const points = [
    "Requirements review",
    "Design approval",
    "Development review",
    "Final handover feedback",
  ];
  return (
    <section id="feedback" className="bg-secondary/60 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <Item>
            <p className="eyebrow text-primary/70">Feedback</p>
          </Item>
          <Item>
            <h2 className="mt-3 text-4xl font-medium md:text-5xl">Your Feedback Matters.</h2>
          </Item>
          <Item>
            <p className="mt-5 text-lg text-muted-foreground">
              We're building Gupta's Agency around clear communication, useful solutions, and better
              client experiences. Your feedback helps us improve.
            </p>
          </Item>
          <Item>
            <p className="mt-8 font-semibold">How we collect feedback during a project:</p>
          </Item>
          <Reveal as="ul" className="mt-4 space-y-3">
            {points.map((p, i) => (
              <Item
                as="li"
                key={p}
                className="flex items-center gap-4 rounded-xl bg-background px-5 py-4"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                {p}
              </Item>
            ))}
          </Reveal>
        </Reveal>
        <motion.div
          variants={fadeRise}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <FeedbackForm />
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-24">
      <Reveal className="mx-auto max-w-4xl rounded-[2rem] border bg-card px-6 py-14 text-center md:px-14">
        <Item>
          <p className="eyebrow text-primary/70">Pricing</p>
        </Item>
        <Item>
          <h2 className="mt-3 text-4xl font-medium md:text-5xl">
            The Right Solution for Your Budget.
          </h2>
        </Item>
        <Item>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Every business has different requirements. We discuss your needs first and recommend a
            suitable scope before development begins.
          </p>
        </Item>
        <Item>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            We aim to be an affordable alternative to traditional agencies — with clear scope and
            deliverables agreed up front.
          </p>
        </Item>
        <Item>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-semibold text-accent-foreground transition hover:brightness-95"
          >
            Get a Project Estimate <ArrowRight size={18} />
          </a>
        </Item>
      </Reveal>
    </section>
  );
}

function Contact() {
  const wa = waLink("Hello Gupta's Agency, I'd like to discuss a project.");
  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.15fr]">
        <Reveal>
          <Item>
            <p className="eyebrow text-gold">Contact</p>
          </Item>
          <Item>
            <h2 className="mt-3 text-4xl font-medium md:text-6xl">Let's Build Something Useful.</h2>
          </Item>
          <Item>
            <p className="mt-5 text-lg opacity-80">
              Have a business idea or need a better online presence? Let's talk about what you need
              before we start building.
            </p>
          </Item>
          <Item className="mt-10 space-y-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 rounded-2xl bg-deep/40 p-4 transition hover:bg-deep/70"
            >
              <Mail className="shrink-0 text-gold" />
              <span className="min-w-0 break-all">{CONTACT.email}</span>
            </a>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="flex items-center gap-4 rounded-2xl bg-deep/40 p-4 transition hover:bg-deep/70"
            >
              <Phone className="shrink-0 text-gold" />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-deep/40 p-4 transition hover:bg-deep/70"
            >
              <MessageCircle className="shrink-0 text-gold" />
              Chat on WhatsApp
            </a>
          </Item>

        </Reveal>
        <ConsultationForm />
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["Services", "#services"],
    ["Our Work", "#work"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];
  return (
    <footer className="bg-deep py-14 text-deep-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-3">
        <div>
          <Wordmark light />
          <p className="mt-4 max-w-xs text-sm opacity-70">
            A new digital agency building websites, applications, and AI-powered automations for
            small businesses and startups.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-2 text-sm">
            {links.map(([l, h]) => (
              <li key={h}>
                <a href={h} className="opacity-80 hover:opacity-100 hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="space-y-2 text-sm">
          <a
            href={`mailto:${CONTACT.email}`}
            className="block break-all opacity-80 hover:opacity-100"
          >
            {CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phoneTel}`} className="block opacity-80 hover:opacity-100">
            {CONTACT.phoneDisplay}
          </a>
          <a href={mailLink("Project enquiry")} className="block opacity-80 hover:opacity-100">
            Send an enquiry
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-deep-foreground/15 px-5 pt-6 text-xs opacity-60">
        © {new Date().getFullYear()} Gupta's Agency. All rights reserved.
      </p>
    </footer>
  );
}

function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-card focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Work />
        <Credibility />
        <Why />
        <Process />
        <Feedback />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

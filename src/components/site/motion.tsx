import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const fadeRise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "ul" ? motion.ul : motion.div;
  return (
    <Comp
      className={className}
      variants={stagger}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </Comp>
  );
}

export function Item({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const Comp = as === "li" ? motion.li : as === "article" ? motion.article : motion.div;
  return (
    <Comp className={className} variants={fadeRise}>
      {children}
    </Comp>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  light,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <Item>
        <p className={`eyebrow ${light ? "text-gold" : "text-primary/70"}`}>{eyebrow}</p>
      </Item>
      <Item>
        <h2 className="mt-3 text-4xl font-medium md:text-5xl">{title}</h2>
      </Item>
      {sub && (
        <Item>
          <p
            className={`mt-4 text-lg ${light ? "text-deep-foreground/75" : "text-muted-foreground"}`}
          >
            {sub}
          </p>
        </Item>
      )}
    </Reveal>
  );
}

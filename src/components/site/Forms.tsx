import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Mail, MessageCircle } from "lucide-react";
import { mailLink, waLink } from "@/lib/site-data";

const consultSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  business: z.string().trim().max(120).optional(),
  contact: z.string().trim().min(5, "Add an email or phone number").max(150),
  service: z.string().min(1, "Choose a service"),
  description: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(1000),
  budget: z.string().optional(),
});

const feedbackSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email").max(255)]),
  stage: z.string().min(1, "Choose a project stage"),
  message: z.string().trim().min(10, "Please write at least 10 characters").max(1000),
});

type Errs = Partial<
  Record<
    | "name"
    | "business"
    | "contact"
    | "service"
    | "description"
    | "budget"
    | "email"
    | "stage"
    | "message",
    string
  >
>;

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-1 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

function readForm(e: FormEvent<HTMLFormElement>) {
  return Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string> & {
    website?: string;
    company?: string;
  };
}

export function ConsultationForm() {
  const [errors, setErrors] = useState<Errs>({});
  const [ready, setReady] = useState<string | null>(null);

  const build = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const raw = readForm(e);
    if (raw.website) return; // honeypot
    const r = consultSchema.safeParse(raw);
    if (!r.success) {
      setErrors(Object.fromEntries(r.error.issues.map((i) => [String(i.path[0]), i.message])));
      setReady(null);
      return;
    }
    setErrors({});
    const d = r.data;
    setReady(
      `Hello Gupta's Agency, I'd like a personal consultation.\n\nName: ${d.name}\nBusiness: ${d.business || "-"}\nContact: ${d.contact}\nService: ${d.service}\nBudget: ${d.budget || "Not sure yet"}\n\nProject:\n${d.description}`,
    );
  };

  return (
    <form
      onSubmit={build}
      noValidate
      className="space-y-4 rounded-2xl bg-card p-6 text-card-foreground shadow-soft md:p-8"
    >
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="c-name" label="Name" error={errors.name}>
          <input id="c-name" name="name" className="field" autoComplete="name" />
        </Field>
        <Field id="c-biz" label="Business name (optional)">
          <input id="c-biz" name="business" className="field" autoComplete="organization" />
        </Field>
      </div>
      <Field id="c-contact" label="Email or phone" error={errors.contact}>
        <input id="c-contact" name="contact" className="field" />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="c-service" label="Service required" error={errors.service}>
          <select id="c-service" name="service" className="field" defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            <option>Website</option>
            <option>Application</option>
            <option>AI & Automation</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field id="c-budget" label="Budget range (optional)">
          <select id="c-budget" name="budget" className="field" defaultValue="">
            <option value="">Prefer to discuss</option>
            <option>Under ₹25,000</option>
            <option>₹25,000 – ₹75,000</option>
            <option>₹75,000 – ₹2,00,000</option>
            <option>Above ₹2,00,000</option>
          </select>
        </Field>
      </div>
      <Field id="c-desc" label="Short project description" error={errors.description}>
        <textarea id="c-desc" name="description" rows={4} className="field resize-y" />
      </Field>
      <button
        type="submit"
        className="w-full rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        Book a Personal Consultation
      </button>
      {ready ? (
        <div className="rounded-xl bg-secondary p-4" role="status">
          <p className="text-sm font-semibold text-secondary-foreground">
            Your request is ready. Send it to us via:
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <a
              href={waLink(ready)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={mailLink("Consultation request", ready)}
              className="inline-flex items-center gap-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold text-primary"
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      ) : (
        <p className="text-xs text-muted-foreground">
          No meeting is booked automatically — your details open in WhatsApp or email so you can
          send them directly. We only use them to reply to you.
        </p>
      )}
    </form>
  );
}

export function FeedbackForm() {
  const [errors, setErrors] = useState<Errs>({});
  const [ready, setReady] = useState<string | null>(null);

  const build = (e: FormEvent<HTMLFormElement>) => {
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
    setReady(
      `Name: ${d.name}\nEmail: ${d.email || "-"}\nProject stage: ${d.stage}\n\nFeedback:\n${d.message}`,
    );
  };

  return (
    <form
      onSubmit={build}
      noValidate
      className="space-y-4 rounded-2xl bg-card p-6 text-card-foreground shadow-soft"
    >
      <p className="rounded-lg bg-secondary px-3 py-2 text-xs font-medium text-secondary-foreground">
        Online feedback storage isn't connected yet — submitting opens an email draft addressed to
        us.
      </p>
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="f-name" label="Name" error={errors.name}>
          <input id="f-name" name="name" className="field" autoComplete="name" />
        </Field>
        <Field id="f-email" label="Email (optional)" error={errors.email}>
          <input id="f-email" name="email" type="email" className="field" autoComplete="email" />
        </Field>
      </div>
      <Field id="f-stage" label="Project stage" error={errors.stage}>
        <select id="f-stage" name="stage" className="field" defaultValue="">
          <option value="" disabled>
            Select…
          </option>
          <option>Requirements review</option>
          <option>Design approval</option>
          <option>Development review</option>
          <option>Final handover</option>
        </select>
      </Field>
      <Field id="f-msg" label="Feedback message" error={errors.message}>
        <textarea id="f-msg" name="message" rows={3} className="field resize-y" />
      </Field>
      {ready ? (
        <a
          href={mailLink("Project feedback", ready)}
          className="block w-full rounded-full bg-primary px-6 py-3 text-center font-semibold text-primary-foreground"
        >
          Open email draft
        </a>
      ) : (
        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:bg-deep"
        >
          Prepare Feedback
        </button>
      )}
      <p className="text-xs text-muted-foreground">
        Feedback is only shared publicly with your explicit permission.
      </p>
    </form>
  );
}

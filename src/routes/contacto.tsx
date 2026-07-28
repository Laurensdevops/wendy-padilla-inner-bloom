import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { z } from "zod";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";
import { WA_BASE, IG_URL, waLink } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Wendy Padilla" },
      {
        name: "description",
        content:
          "Escríbeme por WhatsApp, Instagram o el formulario de contacto. Wendy Padilla, psicóloga y facilitadora.",
      },
      { property: "og:title", content: "Contacto — Wendy Padilla" },
      {
        property: "og:description",
        content: "WhatsApp, Instagram o formulario de contacto.",
      },
    ],
  }),
  component: Contacto,
});

const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Nombre demasiado corto").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  mensaje: z.string().trim().min(5, "Cuéntame un poco más").max(1000),
});

function Contacto() {
  useReveal();
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revisa el formulario");
      return;
    }
    setError(null);
    const msg = `Hola Wendy, soy ${parsed.data.nombre} (${parsed.data.email}). ${parsed.data.mensaje}`;
    window.open(waLink(msg), "_blank", "noreferrer");
  };

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <PageHeader
          eyebrow="Contacto"
          title={
            <>
              Empecemos el <span className="italic">camino</span>
            </>
          }
          intro="Escríbeme por WhatsApp o Instagram. Con gusto te acompaño a encontrar el proceso que hoy necesitas."
        />

        <div className="reveal mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WA_BASE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle size={18} /> 809-487-1559
          </a>
          <a
            href={IG_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-colors hover:bg-secondary"
          >
            <Instagram size={18} /> @soywendypadilla
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal mx-auto mt-14 max-w-2xl rounded-3xl border border-border bg-card p-8 md:p-10"
        >
          <h2 className="font-serif text-2xl">Envíame un mensaje</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Al enviar se abrirá WhatsApp con tu mensaje listo.
          </p>
          <div className="mt-6 space-y-4">
            <Field
              label="Nombre"
              value={form.nombre}
              onChange={(v) => setForm({ ...form, nombre: v })}
              maxLength={100}
            />
            <Field
              label="Email"
              type="email"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              maxLength={255}
            />
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">
                Mensaje
              </label>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                rows={4}
                maxLength={1000}
                className="mt-1.5 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              />
            </div>
          </div>
          {error && (
            <p className="mt-4 text-sm text-destructive">{error}</p>
          )}
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Enviar
          </button>
        </form>

        <p className="mt-12 text-center font-serif italic text-muted-foreground">
          Wendy Padilla | Kaizen — Siempre se puede ser y estar mejor.
        </p>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        className="mt-1.5 w-full rounded-full border border-border bg-background px-5 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

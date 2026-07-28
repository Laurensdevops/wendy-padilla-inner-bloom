import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";
import { services } from "@/lib/services";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios — Wendy Padilla" },
      {
        name: "description",
        content:
          "Tres acompañamientos: Conócete, Ámate y Mejórate. Procesos individuales online de desarrollo personal.",
      },
      { property: "og:title", content: "Servicios — Wendy Padilla" },
      {
        property: "og:description",
        content: "Conócete, ámate, mejórate. Acompañamientos individuales online.",
      },
    ],
  }),
  component: ServiciosIndex,
});

function ServiciosIndex() {
  useReveal();
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="Acompañamientos"
          title={
            <>
              Tres caminos, <span className="italic">una intención</span>
            </>
          }
          intro="Procesos individuales online diseñados para acompañarte en cada etapa de tu desarrollo personal."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.slug}
              className="reveal group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-4xl italic text-primary/70">
                  {s.n}
                </span>
                <span className="h-px w-10 bg-border transition-all group-hover:w-16 group-hover:bg-primary/60" />
              </div>
              <h2 className="mt-6 font-serif text-3xl">{s.title}</h2>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {s.subtitle}
              </p>
              <p className="mt-5 font-serif italic leading-snug text-foreground/80">
                "{s.tagline}"
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.brief}
              </p>
              <Link
                to="/servicios/$slug"
                params={{ slug: s.slug }}
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline"
              >
                Ver detalle <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check } from "lucide-react";
import { useReveal } from "@/components/site/Reveal";
import { getService, services, type Service } from "@/lib/services";

export const Route = createFileRoute("/servicios/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    const title = s
      ? `${s.title} — ${s.subtitle} · Wendy Padilla`
      : "Servicio no encontrado — Wendy Padilla";
    const desc = s?.tagline ?? "Servicio no disponible.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-serif text-4xl">Servicio no encontrado</h1>
      <Link
        to="/servicios"
        className="mt-8 inline-flex items-center gap-2 text-primary hover:underline"
      >
        <ArrowLeft size={14} /> Volver a Servicios
      </Link>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  useReveal();
  const { service } = Route.useLoaderData();
  return <ServiceView service={service} />;
}

function ServiceView({ service: s }: { service: Service }) {
  const others = services.filter((x) => x.slug !== s.slug);
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Link
          to="/servicios"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
        >
          <ArrowLeft size={14} /> Volver a Servicios
        </Link>

        <div className="reveal mt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            {s.n} · {s.subtitle}
          </p>
          <h1 className="mt-4 font-serif text-5xl uppercase leading-tight md:text-6xl">
            {s.title}
          </h1>
          <p className="mt-6 font-serif text-2xl italic leading-snug text-foreground/80 md:text-3xl">
            "{s.tagline}"
          </p>
        </div>

        <div className="reveal mt-12 space-y-5 text-base leading-relaxed text-foreground/85">
          {s.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="reveal mt-14 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10">
          <h2 className="font-serif text-2xl">¿Qué trabajaremos?</h2>
          <ul className="mt-6 space-y-3">
            {s.trabajaremos.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check size={12} />
                </span>
                <span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border p-8">
            <h3 className="text-xs uppercase tracking-widest text-primary">
              ¿A quién va dirigido?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {s.dirigido}
            </p>
          </div>
          <div className="rounded-3xl border border-border p-8">
            <h3 className="text-xs uppercase tracking-widest text-primary">
              Modalidad
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/80">
              {s.modalidad}
            </p>
          </div>
        </div>

        <div className="reveal mt-14 rounded-3xl bg-primary p-10 text-center text-primary-foreground">
          <h2 className="font-serif text-3xl italic md:text-4xl">
            ¿Empezamos?
          </h2>
          <p className="mt-3 text-sm text-primary-foreground/85">
            Reserva tu primera sesión y da el primer paso.
          </p>
          <Link
            to="/agenda"
            search={{ servicio: s.slug }}
            className="mt-6 inline-flex items-center rounded-full bg-background px-7 py-3.5 text-sm text-foreground transition-opacity hover:opacity-90"
          >
            Agenda tu primera sesión
          </Link>
        </div>

        <div className="mt-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Otros acompañamientos
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to="/servicios/$slug"
                params={{ slug: o.slug }}
                className="group flex items-center justify-between rounded-2xl border border-border p-5 transition-colors hover:border-primary/40"
              >
                <div>
                  <p className="font-serif text-xl">{o.title}</p>
                  <p className="text-xs text-muted-foreground">{o.subtitle}</p>
                </div>
                <span className="text-primary transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

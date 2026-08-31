import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/wendy-hero.jpg";
import bookImg from "@/assets/wendy-book.jpg";
import { services } from "@/lib/services";
import { useReveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wendy Padilla — Desarrollo Personal a través del Ser" },
      {
        name: "description",
        content:
          "Psicóloga, autora y facilitadora. Acompañamiento en autoconocimiento, autoestima y mentoría Kaizen para vivir con presencia y propósito.",
      },
      { property: "og:title", content: "Wendy Padilla — Desarrollo Personal a través del Ser" },
      {
        property: "og:description",
        content:
          "Acompañamiento psicológico y mentoría Kaizen. Conócete, ámate, mejórate.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useReveal();

  return (
    <>
      {/* HERO */}
      <section className="pt-8 md:pt-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-28">
          <div className="reveal">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-primary/60" />
              Psicóloga · Autora · Facilitadora
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              <span className="italic text-primary">Habitarte</span>
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              No siempre puedes cambiar lo que estás viviendo, pero sí puedes cambiar la manera en que lo atraviesas. 



              HABITARTE es un espacio de educación y desarrollo personal para mujeres que atraviesan distintas etapas, cambios y circunstancias de la vida, y quieren aprender a no abandonarse en el proceso.

            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 font-serif text-lg italic text-foreground/80">
              «Siempre se puede ser y estar mejor.»
              <span className="mt-1 block text-xs not-italic tracking-widest text-muted-foreground">
                — KAIZEN
              </span>
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/agenda"
                className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                Agenda tu acompañamiento
              </Link>
              <Link
                to="/servicios"
                className="rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                Conocer servicios
              </Link>
            </div>
          </div>
          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary/60" />
              <div className="absolute -bottom-6 -right-6 -z-10 hidden h-40 w-40 rounded-full bg-accent/25 blur-2xl md:block" />
              <img
                src={heroImg}
                alt="Retrato de Wendy Padilla"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-border/60 bg-secondary/40 py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Sobre mí
            </p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl">
              Habitarse es el camino <span className="italic">más real</span>.
            </h2>
            <p className="mt-6 leading-relaxed text-foreground/80">
              Trabajo con mujeres, jóvenes y personas que sienten que hay algo
              más para ellas — que desean dejar de vivir en piloto automático
              y comenzar a habitarse de verdad.
            </p>
            <Link
              to="/sobre-mi"
              className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              Conocer más sobre mí <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICIOS PREVIEW */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Acompañamientos
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Tres caminos, <span className="italic">una intención</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
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
                <h3 className="mt-6 font-serif text-3xl">{s.title}</h3>
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
                  Ver más <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRO PREVIEW */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
          <div className="reveal order-2 md:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
              Libro
            </p>
            <h2 className="mt-4 font-serif text-4xl italic leading-tight md:text-6xl">
              Cuando me amé
              <br />
              de verdad
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-primary-foreground/85">
              Una guía práctica y profunda para comenzar el camino del amor
              propio auténtico.
            </p>
            <Link
              to="/libro"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm transition-colors hover:bg-primary-foreground/10"
            >
              Conocer el libro <ArrowRight size={14} />
            </Link>
          </div>
          <div className="reveal order-1 md:order-2">
            <div className="mx-auto max-w-md">
              <img
                src={bookImg}
                alt="Libro Cuando me amé de verdad"
                loading="lazy"
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 md:py-28">
        <div className="reveal mx-auto max-w-2xl px-6 text-center">
          <h2 className="font-serif text-4xl leading-tight md:text-5xl">
            Empecemos <span className="italic">el camino</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Reserva tu primer acompañamiento o escríbeme para conversar sobre el
            proceso que hoy necesitas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/agenda"
              className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar sesión
            </Link>
            <Link
              to="/contacto"
              className="rounded-full border border-border px-7 py-3.5 text-sm transition-colors hover:bg-secondary"
            >
              Escribirme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

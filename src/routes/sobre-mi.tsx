import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/wendy-hero.jpg";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Wendy Padilla" },
      {
        name: "description",
        content:
          "Wendy Padilla, psicóloga, autora y facilitadora. Un enfoque que integra desarrollo personal y filosofía Kaizen.",
      },
      { property: "og:title", content: "Sobre mí — Wendy Padilla" },
      {
        property: "og:description",
        content:
          "Un enfoque que integra desarrollo personal y filosofía Kaizen.",
      },
    ],
  }),
  component: SobreMi,
});

function SobreMi() {
  useReveal();
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <PageHeader
          eyebrow="Sobre mí"
          title={
            <>
              Habitarse es el <span className="italic">camino más real</span>
            </>
          }
        />

        <div className="mt-16 grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-secondary/60" />
              <img
                src={heroImg}
                alt="Wendy Padilla, psicóloga y facilitadora"
                className="aspect-[4/5] w-full rounded-[1.75rem] object-cover shadow-sm"
              />
            </div>
          </div>
          <div className="reveal space-y-6 text-base leading-relaxed text-foreground/85">
            <p>
              Soy <strong className="font-medium text-foreground">Wendy Padilla</strong>,
              psicóloga, autora y facilitadora de desarrollo personal. Mi
              trabajo nace de la convicción profunda de que el camino más
              poderoso hacia una vida plena comienza desde adentro: cuando te
              conoces, cuando te amas y cuando decides mejorar de manera
              auténtica y sostenida.
            </p>
            <p>
              Trabajo con mujeres, jóvenes y personas en general que sienten que
              hay algo más para ellas, que desean dejar de vivir en piloto
              automático y comenzar a habitarse de verdad.
            </p>
            <p>
              Mi enfoque integra el desarrollo personal con la filosofía{" "}
              <span className="italic text-primary">Kaizen</span> — el arte del
              mejoramiento continuo — porque creo que los grandes cambios nacen
              de pequeños pasos consistentes.
            </p>
            <blockquote className="border-l-2 border-accent pl-5 font-serif text-lg italic text-foreground/80">
              «Siempre se puede ser y estar mejor.»
            </blockquote>
            <div className="pt-4">
              <Link
                to="/servicios"
                className="inline-flex items-center rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                Conoce mis servicios
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

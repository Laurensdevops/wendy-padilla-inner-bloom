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
              Soy <strong className="font-medium text-foreground">Wendy Padilla</strong> —
              psicóloga, autora y facilitadora de desarrollo personal.
            </p>
            <p>
              Durante años acompañé a otros a encontrar claridad, y en ese camino
              aprendí algo que hoy es la base de todo lo que hago: no se puede dar
              lo que no se tiene. Antes de guiar a alguien hacia su transformación,
              tuve que habitar la mía. Aprendí —a veces de la forma más difícil—
              que amarme, conocerme y mejorar cada día no era un lujo ni una frase
              bonita: era el punto de partida de todo lo demás.
            </p>
            <p>
              De esa convicción nació{" "}
              <span className="italic text-primary">Kaizen</span>: la filosofía
              japonesa del mejoramiento continuo, que me enseñó que los grandes
              cambios no llegan de golpe, sino paso a paso, con constancia y
              compasión hacia una misma.
            </p>
            <p>
              Hoy acompaño a mujeres, jóvenes y personas que sienten que hay algo
              más para ellas —que están cansadas de vivir en piloto automático y
              quieren empezar a habitarse de verdad—. Uno mi formación como psicóloga
              con herramientas prácticas de desarrollo personal, para crear espacios
              donde el crecimiento no se sienta forzado, sino auténtico y sostenible.
            </p>
            <p>
              Soy autora de{" "}
              <strong className="font-medium text-foreground">
                "Cuando me amé de verdad"
              </strong>
              , una guía nacida de mi propia historia, escrita para quien esté lista
              para pausar, mirar hacia adentro y comenzar su propio camino de amor
              propio.
            </p>
            <p>
              Si sientes que es momento de conocerte, de amarte de verdad y de mejorar
              sin perder tu esencia en el intento, este es tu lugar.
            </p>
            <blockquote className="border-l-2 border-accent pl-5 font-serif text-lg italic text-foreground/80">
              «Siempre se puede ser y estar mejor.»
              <footer className="mt-2 text-sm not-italic text-muted-foreground">— Wendy</footer>
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

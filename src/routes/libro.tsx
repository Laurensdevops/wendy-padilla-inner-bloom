import { createFileRoute } from "@tanstack/react-router";
import bookImg from "@/assets/wendy-book.jpg";
import { useReveal } from "@/components/site/Reveal";
import { IG_URL } from "@/lib/site";
import { Instagram } from "lucide-react";

export const Route = createFileRoute("/libro")({
  head: () => ({
    meta: [
      { title: "Cuando me amé de verdad — Libro de Wendy Padilla" },
      {
        name: "description",
        content:
          "Una guía práctica y profunda para comenzar el camino del amor propio auténtico. Un libro de Wendy Padilla.",
      },
      { property: "og:title", content: "Cuando me amé de verdad — Wendy Padilla" },
      {
        property: "og:description",
        content: "Es tiempo de parar, de dejar de abandonarte y empezar a habitarte.",
      },
    ],
  }),
  component: LibroPage,
});

function LibroPage() {
  useReveal();
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-2 md:items-center">
        <div className="reveal order-2 md:order-1">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Libro
          </p>
          <h1 className="mt-4 font-serif text-5xl italic leading-tight md:text-7xl">
            Cuando me amé
            <br />
            de verdad
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-foreground/85">
            Una guía práctica y profunda para comenzar el camino del amor
            propio auténtico. Una obra nacida desde la experiencia personal y
            profesional, que invita a pausar, a mirar hacia adentro y a
            empezar a habitarse.
          </p>
          <blockquote className="mt-8 border-l-2 border-accent pl-5 font-serif text-xl italic text-foreground/80">
            «Es tiempo de parar, de dejar de abandonarte y empezar a habitarte.»
          </blockquote>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={IG_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Instagram size={16} /> Ya disponible — @soywendypadilla
            </a>
          </div>
        </div>
        <div className="reveal order-1 md:order-2">
          <div className="mx-auto max-w-md">
            <img
              src={bookImg}
              alt="Portada del libro Cuando me amé de verdad"
              loading="lazy"
              className="w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

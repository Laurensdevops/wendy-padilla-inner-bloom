import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Clock, Users } from "lucide-react";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";
import { waLink } from "@/lib/site";

export const Route = createFileRoute("/servicios/")({
  head: () => ({
    meta: [
      { title: "Servicios — Wendy Padilla" },
      {
        name: "description",
        content:
          "Talleres Kaizen y consultorías personalizadas con Wendy Padilla. Espacios de autoconocimiento, amor propio y crecimiento personal.",
      },
      { property: "og:title", content: "Servicios — Wendy Padilla" },
      {
        property: "og:description",
        content:
          "Talleres grupales y consultorías individuales para conocerte, amarte y mejorar.",
      },
    ],
  }),
  component: ServiciosIndex,
});

const workshops = [
  {
    n: "01",
    title: "Del Piloto Automático a la Presencia",
    description:
      "Un taller vivencial de autoconocimiento donde identificarás tus patrones emocionales, tus creencias limitantes y el primer paso hacia una vida más consciente.",
    duration: "3 horas",
    modality: "Online en vivo",
    spots: "Cupos limitados",
  },
  {
    n: "02",
    title: "Habitarte: El Camino al Amor Propio",
    description:
      "Basado en los principios del libro \"Cuando me amé de verdad\". Un espacio para sanar la autoimagen, poner límites desde el amor y no desde el miedo, y empezar a tratarte con la compasión que mereces.",
    duration: "3 horas",
    modality: "Online en vivo",
    spots: "Cupos limitados",
  },
  {
    n: "03",
    title: "Kaizen: Pequeños Pasos, Grandes Cambios",
    description:
      "Diseña tu propio plan de mejora continua: metas reales, hábitos sostenibles y herramientas para avanzar sin rigidez ni culpa.",
    duration: "3 horas",
    modality: "Online en vivo",
    spots: "Cupos limitados",
  },
];

const consultations = [
  {
    n: "01",
    title: "Consultoría de Autoconocimiento y Bienestar Emocional",
    description:
      "Sesiones individuales para explorar tu historia, tus patrones y tus bloqueos emocionales, con herramientas prácticas de psicología y desarrollo personal.",
    modality: "Online, sesión 1:1",
    duration: "60 min por sesión",
  },
  {
    n: "02",
    title: "Consultoría de Plan de Vida Kaizen",
    description:
      "Diseño de un plan personalizado de crecimiento con seguimiento mensual, ideal para quienes ya se conocen y están listas para pasar a la acción de forma sostenida.",
    modality: "Online, sesión 1:1 + seguimiento mensual",
    duration: "Plan personalizado",
  },
];

function nextWorkshopDate() {
  const now = new Date();
  const target = new Date(now.getFullYear(), now.getMonth() + 1, 1, 10, 0, 0);
  while (target.getDay() !== 6) {
    target.setDate(target.getDate() + 1);
  }
  return target;
}

function useCountdown(target: Date) {
  const [left, setLeft] = useState(target.getTime() - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setLeft(Math.max(0, target.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [target]);

  const days = Math.floor(left / (1000 * 60 * 60 * 24));
  const hours = Math.floor((left / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((left / (1000 * 60)) % 60);
  const seconds = Math.floor((left / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground md:h-20 md:w-20">
        <span className="font-serif text-3xl md:text-4xl">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function ServiciosIndex() {
  useReveal();
  const [targetDate] = useState(nextWorkshopDate);
  const { days, hours, minutes, seconds } = useCountdown(targetDate);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <PageHeader
          eyebrow="Servicios"
          title={
            <>
              Conócete, <span className="italic">ámate</span>, mejórate
            </>
          }
          intro="Espacios de transformación diseñados para acompañarte en tu proceso de desarrollo personal."
        />

        {/* Talleres Kaizen */}
        <div className="mt-20">
          <div className="reveal text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Talleres Kaizen
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
              Espacios grupales de transformación
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Diseñados para vivir en comunidad lo que muchas veces se siente
              solitario: el proceso de conocerte, amarte y mejorar.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workshops.map((w) => (
              <article
                key={w.n}
                className="reveal group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl italic text-primary/70">
                    {w.n}
                  </span>
                  <span className="h-px w-10 bg-border transition-all group-hover:w-16 group-hover:bg-primary/60" />
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight">
                  {w.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {w.description}
                </p>
                <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-primary" />
                    <span>{w.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={14} className="text-primary" />
                    <span>
                      {w.modality} · {w.spots}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Countdown + CTA */}
          <div className="reveal mt-16 rounded-3xl border border-border bg-secondary/30 p-8 text-center md:p-12">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              ⏳ Contador regresivo
            </p>
            <p className="mt-3 font-serif text-2xl italic text-foreground/80">
              "El próximo taller comienza en:"
            </p>
            <div className="mt-8 flex justify-center gap-3 md:gap-6">
              <CountdownUnit value={days} label="Días" />
              <span className="self-start pt-4 font-serif text-2xl text-muted-foreground md:pt-6">
                :
              </span>
              <CountdownUnit value={hours} label="Horas" />
              <span className="self-start pt-4 font-serif text-2xl text-muted-foreground md:pt-6">
                :
              </span>
              <CountdownUnit value={minutes} label="Minutos" />
              <span className="self-start pt-4 font-serif text-2xl text-muted-foreground md:pt-6">
                :
              </span>
              <CountdownUnit value={seconds} label="Segundos" />
            </div>
            <a
              href={waLink(
                "Hola Wendy, quiero reservar mi cupo para el próximo taller Kaizen."
              )}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Reservar mi cupo <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Consultorías */}
        <div className="mt-24">
          <div className="reveal text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Consultorías personalizadas
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">
              Acompañamiento individual a tu ritmo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Para quienes necesitan un espacio individual, más profundo y a tu
              propio ritmo, con acompañamiento directo de Wendy.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {consultations.map((c) => (
              <article
                key={c.n}
                className="reveal flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-4xl italic text-primary/70">
                    {c.n}
                  </span>
                  <span className="h-px w-10 bg-border" />
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight">
                  {c.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Check size={12} />
                    </span>
                    <span className="text-foreground/85">{c.modality}</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                      <Check size={12} />
                    </span>
                    <span className="text-foreground/85">{c.duration}</span>
                  </li>
                </ul>
              </article>
            ))}
          </div>

          <div className="reveal mt-10 text-center">
            <a
              href={waLink(
                "Hola Wendy, quiero agendar una consultoría personalizada contigo."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar mi consultoría <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import heroImg from "@/assets/wendy-hero.jpg";
import bookImg from "@/assets/wendy-book.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wendy Padilla — Desarrollo Personal a través del Ser" },
      {
        name: "description",
        content:
          "Wendy Padilla, psicóloga, autora y facilitadora. Acompañamiento en autoconocimiento, autoestima y mentoría Kaizen para mejorar de manera auténtica y sostenida.",
      },
      { property: "og:title", content: "Wendy Padilla — Desarrollo Personal a través del Ser" },
      {
        property: "og:description",
        content:
          "Acompañamiento psicológico y mentoría Kaizen. Conócete, ámate, mejórate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/18094871559";
const waLink = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const services = [
  {
    n: "01",
    key: "conocete",
    title: "Conócete",
    subtitle: "Acompañamiento de Autoconocimiento",
    tagline: "El punto de partida para cualquier transformación genuina.",
    brief:
      "Identificación de patrones emocionales, creencias limitantes, valores y propósito de vida.",
    detail:
      "Un espacio íntimo para mirarte de verdad. Exploraremos juntas las historias que te habitan, las emociones que se repiten y los deseos que aún no te has permitido nombrar.",
    trabajaremos: [
      "Reconocimiento de patrones emocionales y de pensamiento",
      "Identificación de creencias limitantes heredadas",
      "Clarificación de valores personales",
      "Búsqueda y sentido de propósito de vida",
    ],
    dirigido:
      "Mujeres y personas que sienten que viven en piloto automático y desean comenzar a habitarse.",
    cta: "Quiero conocerme",
    msg: "Hola Wendy, quiero información sobre el acompañamiento de Conócete.",
  },
  {
    n: "02",
    key: "amate",
    title: "Ámate",
    subtitle: "Acompañamiento de Autoestima y Autocuidado",
    tagline: "La relación más importante de tu vida: la que tienes contigo misma.",
    brief:
      "Sanación de la autoimagen, límites saludables, autocompasión y autocuidado integral.",
    detail:
      "Un proceso para reconstruir la manera en que te miras y te tratas. Aprenderás a sostenerte con amabilidad, a poner límites sin culpa y a habitar tu cuerpo con respeto.",
    trabajaremos: [
      "Sanación de la autoimagen y del diálogo interno",
      "Construcción de límites saludables",
      "Autocompasión y manejo de la culpa",
      "Autocuidado integral (emocional, físico, energético)",
    ],
    dirigido:
      "Mujeres que quieren dejar de abandonarse y aprender a estar de su lado.",
    cta: "Quiero amarme mejor",
    msg: "Hola Wendy, quiero información sobre el acompañamiento de Ámate.",
  },
  {
    n: "03",
    key: "mejorate",
    title: "Mejórate",
    subtitle: "Mentoría Kaizen de Crecimiento Personal",
    tagline: "Pequeños pasos sostenidos que generan grandes cambios.",
    brief:
      "Diseño de un plan de vida personalizado, seguimiento mensual, manejo de bloqueos.",
    detail:
      "Una mentoría de acompañamiento continuo bajo la filosofía Kaizen. Diseñamos juntas tu plan de vida y trabajamos mes a mes en los avances, los bloqueos y las siguientes acciones concretas.",
    trabajaremos: [
      "Diseño de un plan de vida personalizado",
      "Seguimiento mensual de metas y hábitos",
      "Manejo de bloqueos y resistencias",
      "Integración de la filosofía Kaizen en tu día a día",
    ],
    dirigido:
      "Personas comprometidas con su crecimiento que buscan una guía sostenida y estratégica.",
    cta: "Quiero mejorar",
    msg: "Hola Wendy, quiero información sobre la mentoría Mejórate.",
  },
];

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [open, setOpen] = useState<string | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const yearRef = useRef(new Date().getFullYear());

  const navLinks = [
    { href: "#sobre", label: "Sobre mí" },
    { href: "#servicios", label: "Servicios" },
    { href: "#libro", label: "Libro" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-lg tracking-tight">
            Wendy <span className="italic text-primary">Padilla</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink("Hola Wendy, me gustaría agendar un acompañamiento.")}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-5 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Agendar
            </a>
          </nav>
          <button
            className="md:hidden"
            aria-label="Menú"
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {navOpen && (
          <div className="border-t border-border/50 bg-background md:hidden">
            <div className="flex flex-col px-6 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setNavOpen(false)}
                  className="py-3 text-sm text-muted-foreground"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="pt-28 md:pt-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-32">
          <div className="reveal">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="h-px w-8 bg-primary/60" />
              Psicóloga · Autora · Facilitadora
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
              Desarrollo <span className="italic text-primary">Personal</span>
              <br />
              a través del Ser
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
              Un espacio para pausar, mirarte de verdad y comenzar a habitarte.
              Acompañamiento psicológico bajo la filosofía Kaizen: pequeños pasos,
              cambios reales.
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-5 font-serif text-lg italic text-foreground/80">
              «Siempre se puede ser y estar mejor.»
              <span className="mt-1 block text-xs not-italic tracking-widest text-muted-foreground">
                — KAIZEN
              </span>
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={waLink("Hola Wendy, quiero agendar mi acompañamiento.")}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Agenda tu acompañamiento
              </a>
              <a
                href="#servicios"
                className="rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                Conocer servicios
              </a>
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

      {/* SOBRE */}
      <section id="sobre" className="border-t border-border/60 bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto grid max-w-5xl gap-14 px-6 md:grid-cols-[0.4fr_0.6fr]">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">Sobre Wendy</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Habitarse es el
              <br />
              <span className="italic">camino más largo</span>
              <br />
              y el más real.
            </h2>
          </div>
          <div className="reveal space-y-6 text-base leading-relaxed text-foreground/80">
            <p>
              Soy Wendy Padilla, psicóloga, autora y facilitadora de desarrollo
              personal. Mi trabajo nace de la convicción profunda de que el camino
              más poderoso hacia una vida plena comienza desde adentro: cuando te
              conoces, cuando te amas y cuando decides mejorar de manera auténtica
              y sostenida.
            </p>
            <p>
              Trabajo con mujeres, jóvenes y personas en general que sienten que
              hay algo más para ellas, que desean dejar de vivir en piloto
              automático y comenzar a habitarse de verdad.
            </p>
            <p>
              Mi enfoque integra el desarrollo personal con la filosofía{" "}
              <span className="italic text-primary">Kaizen</span> — el arte del
              mejoramiento continuo — porque creo que los grandes cambios nacen de
              pequeños pasos consistentes.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Acompañamientos
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Tres caminos, <span className="italic">una intención</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Procesos individuales online, diseñados para acompañarte en cada
              etapa de tu desarrollo personal.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {services.map((s) => {
              const isOpen = open === s.key;
              return (
                <article
                  key={s.key}
                  className="reveal group flex flex-col rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
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
                  <p className="mt-5 font-serif text-lg italic leading-snug text-foreground/80">
                    "{s.tagline}"
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {s.brief}
                  </p>

                  {isOpen && (
                    <div className="mt-6 space-y-5 border-t border-border pt-6 text-sm text-foreground/80 animate-fade-in">
                      <p className="leading-relaxed">{s.detail}</p>
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-widest text-primary">
                          ¿Qué trabajaremos?
                        </p>
                        <ul className="space-y-1.5">
                          {s.trabajaremos.map((t) => (
                            <li key={t} className="flex gap-2">
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="mb-1 text-xs uppercase tracking-widest text-primary">
                          ¿A quién va dirigido?
                        </p>
                        <p className="leading-relaxed">{s.dirigido}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex items-center justify-between border-t border-border pt-5 text-xs text-muted-foreground">
                    <span>Individual · Online</span>
                    <button
                      onClick={() => setOpen(isOpen ? null : s.key)}
                      className="text-primary hover:underline"
                    >
                      {isOpen ? "Cerrar" : "Ver detalle"}
                    </button>
                  </div>

                  <a
                    href={waLink(s.msg)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 rounded-full bg-foreground px-5 py-3 text-center text-sm text-background transition-opacity hover:opacity-90"
                  >
                    {s.cta}
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIBRO */}
      <section id="libro" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
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
            <p className="mt-8 max-w-md text-base leading-relaxed text-primary-foreground/85">
              Una guía práctica y profunda para comenzar el camino del amor propio
              auténtico. Una obra nacida desde la experiencia personal y
              profesional, que invita a pausar, a mirar hacia adentro y a empezar
              a habitarse.
            </p>
            <blockquote className="mt-8 border-l-2 border-primary-foreground/50 pl-5 font-serif text-xl italic">
              «Es tiempo de parar, de dejar de abandonarte y empezar a
              habitarte.»
            </blockquote>
            <div className="mt-10">
              <span className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm">
                <span className="h-2 w-2 rounded-full bg-accent" /> Ya disponible
              </span>
            </div>
          </div>
          <div className="reveal order-1 md:order-2">
            <div className="mx-auto max-w-md">
              <img
                src={bookImg}
                alt="Libro Cuando me amé de verdad de Wendy Padilla"
                width={1200}
                height={900}
                loading="lazy"
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Contacto
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
              Empecemos el <span className="italic">camino</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              Escríbeme por WhatsApp o Instagram. Con gusto te acompaño a
              encontrar el proceso que hoy necesitas.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle size={18} /> 809-487-1559
              </a>
              <a
                href="https://instagram.com/soywendypadilla"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-3.5 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                <Instagram size={18} /> @soywendypadilla
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground sm:flex-row">
          <p className="font-serif italic">
            Wendy Padilla · Kaizen — Siempre se puede ser y estar mejor.
          </p>
          <p>© {yearRef.current} Wendy Padilla</p>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

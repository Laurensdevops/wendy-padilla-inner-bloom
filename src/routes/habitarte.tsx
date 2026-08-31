import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/habitarte")({
  head: () => ({
    meta: [
      { title: "Habitarte — Wendy Padilla" },
      {
        name: "description",
        content:
          "HABITARTE es un espacio de educación y desarrollo personal para mujeres que atraviesan distintas etapas, cambios y circunstancias de la vida.",
      },
      { property: "og:title", content: "Habitarte — Wendy Padilla" },
      {
        property: "og:description",
        content:
          "Un espacio de educación y desarrollo personal para mujeres que quieren aprender a no abandonarse en el proceso.",
      },
    ],
  }),
  component: HabitartePage,
});

function HabitartePage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h1 className="font-serif text-6xl leading-tight tracking-tight md:text-8xl">
          <span className="italic text-primary">Habitarte</span>
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          HABITARTE es un espacio de educación y desarrollo personal para mujeres
          que atraviesan distintas etapas, cambios y circunstancias de la vida, y
          quieren aprender a no abandonarse en el proceso.
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/80">
          No siempre puedes cambiar lo que estás viviendo, pero sí puedes cambiar
          la manera en que lo atraviesas.
        </p>
        <div className="mt-12">
          <span className="inline-block h-1 w-24 rounded-full bg-primary/60" />
        </div>
      </div>
    </section>
  );
}

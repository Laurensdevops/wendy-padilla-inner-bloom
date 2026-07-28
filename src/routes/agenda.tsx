import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { useReveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/SiteChrome";
import { services } from "@/lib/services";
import { waLink } from "@/lib/site";

const searchSchema = z.object({
  servicio: z.enum(["conocete", "amate", "mejorate"]).optional(),
});

export const Route = createFileRoute("/agenda")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Agenda tu acompañamiento — Wendy Padilla" },
      {
        name: "description",
        content:
          "Reserva tu sesión online con Wendy Padilla. Elige día y hora para tu acompañamiento.",
      },
      { property: "og:title", content: "Agenda tu acompañamiento — Wendy Padilla" },
      {
        property: "og:description",
        content: "Elige día y hora para tu sesión de acompañamiento online.",
      },
    ],
  }),
  component: AgendaPage,
});

const HORARIOS = ["9:00 am", "10:30 am", "1:00 pm", "3:00 pm", "5:00 pm"];
const MESES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const DIAS = ["L", "M", "M", "J", "V", "S", "D"];

const bookSchema = z.object({
  nombre: z.string().trim().min(2, "Nombre requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  telefono: z.string().trim().min(6, "Teléfono inválido").max(30),
  servicio: z.enum(["conocete", "amate", "mejorate"], {
    message: "Elige un servicio",
  }),
});

function AgendaPage() {
  useReveal();
  const { servicio: initialServicio } = Route.useSearch();
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: initialServicio ?? "",
  });
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<null | {
    date: Date;
    time: string;
    servicio: string;
  }>(null);

  const firstOfMonth = new Date(viewYear, viewMonth, 1);
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  // Monday-first offset
  const startOffset = (firstOfMonth.getDay() + 6) % 7;
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++)
    cells.push(new Date(viewYear, viewMonth, d));

  const isDisabled = (d: Date) => {
    if (d < today) return true;
    const day = d.getDay();
    return day === 0 || day === 6; // weekends unavailable
  };

  const nav = (delta: number) => {
    let m = viewMonth + delta;
    let y = viewYear;
    if (m < 0) { m = 11; y--; }
    if (m > 11) { m = 0; y++; }
    setViewYear(y); setViewMonth(m);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setError("Elige un día y un horario");
      return;
    }
    const parsed = bookSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Revisa el formulario");
      return;
    }
    setError(null);
    const svc = services.find((s) => s.slug === parsed.data.servicio)!;
    const dateStr = selectedDate.toLocaleDateString("es-DO", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    setConfirmed({ date: selectedDate, time: selectedTime, servicio: svc.title });
    const msg = `Hola Wendy, quiero confirmar mi cita para ${svc.title} el ${dateStr} a las ${selectedTime}. Soy ${parsed.data.nombre} (${parsed.data.email}, ${parsed.data.telefono}).`;
    setTimeout(() => window.open(waLink(msg), "_blank", "noreferrer"), 400);
  };

  if (confirmed) {
    const dateStr = confirmed.date.toLocaleDateString("es-DO", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
    });
    return (
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent">
            <Check size={28} />
          </div>
          <h1 className="mt-8 font-serif text-4xl md:text-5xl">
            ¡Cita <span className="italic text-primary">reservada</span>!
          </h1>
          <p className="mt-6 text-muted-foreground">
            Tu solicitud para{" "}
            <strong className="text-foreground">{confirmed.servicio}</strong>{" "}
            el <strong className="text-foreground">{dateStr}</strong> a las{" "}
            <strong className="text-foreground">{confirmed.time}</strong> fue registrada.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Se abrió WhatsApp para confirmar los detalles con Wendy.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <PageHeader
          eyebrow="Agenda"
          title={
            <>
              Agenda tu <span className="italic">acompañamiento</span>
            </>
          }
          intro="Elige el día y horario que mejor se adapte a ti. Al confirmar, se abrirá WhatsApp para finalizar los detalles con Wendy."
        />

        <div className="reveal mt-14 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          {/* Calendar */}
          <div className="rounded-3xl border border-border bg-card p-6 md:p-8">
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => nav(-1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"
              >
                <ChevronLeft size={16} />
              </button>
              <p className="font-serif text-xl">
                {MESES[viewMonth]} {viewYear}
              </p>
              <button
                type="button"
                onClick={() => nav(1)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:bg-secondary"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
              {DIAS.map((d, i) => (
                <div key={i} className="py-2 uppercase tracking-widest">
                  {d}
                </div>
              ))}
              {cells.map((d, i) => {
                if (!d) return <div key={i} />;
                const disabled = isDisabled(d);
                const isSelected =
                  selectedDate?.toDateString() === d.toDateString();
                return (
                  <button
                    type="button"
                    key={i}
                    disabled={disabled}
                    onClick={() => {
                      setSelectedDate(d);
                      setSelectedTime(null);
                    }}
                    className={[
                      "aspect-square rounded-full text-sm transition-colors",
                      disabled
                        ? "cursor-not-allowed text-muted-foreground/40"
                        : "text-foreground hover:bg-secondary",
                      isSelected
                        ? "bg-primary text-primary-foreground hover:bg-primary"
                        : "",
                    ].join(" ")}
                  >
                    {d.getDate()}
                  </button>
                );
              })}
            </div>
            <p className="mt-5 text-xs text-muted-foreground">
              Los fines de semana no están disponibles.
            </p>

            {selectedDate && (
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-xs uppercase tracking-widest text-primary">
                  Horarios disponibles
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {HORARIOS.map((h) => (
                    <button
                      type="button"
                      key={h}
                      onClick={() => setSelectedTime(h)}
                      className={[
                        "rounded-full border px-4 py-2 text-sm transition-colors",
                        selectedTime === h
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-primary/60",
                      ].join(" ")}
                    >
                      {h}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Form */}
          <form
            onSubmit={submit}
            className="rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <h2 className="font-serif text-2xl">Tus datos</h2>
            <div className="mt-6 space-y-4">
              <Input
                label="Nombre"
                value={form.nombre}
                onChange={(v) => setForm({ ...form, nombre: v })}
                maxLength={100}
              />
              <Input
                label="Email"
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                maxLength={255}
              />
              <Input
                label="Teléfono"
                type="tel"
                value={form.telefono}
                onChange={(v) => setForm({ ...form, telefono: v })}
                maxLength={30}
              />
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">
                  Servicio de interés
                </label>
                <select
                  value={form.servicio}
                  onChange={(e) =>
                    setForm({ ...form, servicio: e.target.value })
                  }
                  className="mt-1.5 w-full appearance-none rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.title} — {s.subtitle}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {selectedDate && selectedTime && (
              <div className="mt-6 rounded-2xl bg-secondary/60 p-4 text-sm text-foreground/80">
                <p className="text-xs uppercase tracking-widest text-primary">
                  Tu selección
                </p>
                <p className="mt-1 font-serif">
                  {selectedDate.toLocaleDateString("es-DO", {
                    weekday: "long", day: "numeric", month: "long",
                  })}{" "}
                  · {selectedTime}
                </p>
              </div>
            )}

            {error && (
              <p className="mt-4 text-sm text-destructive">{error}</p>
            )}
            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
            >
              Confirmar cita
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Al confirmar se abrirá WhatsApp con tu mensaje listo.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({
  label, value, onChange, type = "text", maxLength,
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

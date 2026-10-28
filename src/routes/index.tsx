import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { RobotArm } from "@/components/RobotArm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ModuArm — მესამე ხელი შენი პროექტისთვის" },
      { name: "description", content: "ModuArm — სტუდენტური პროტოტიპი: მოდულური რობოტი ხელი სტუდენტებისა და ტექნოლოგიის ენთუზიასტებისთვის. შეუერთდი მოლოდინის სიას." },
      { property: "og:title", content: "ModuArm — შენი პროექტის მესამე ხელი" },
      { property: "og:description", content: "მოდულური რობოტი ხელის სტუდენტური პროტოტიპი. შეუერთდი მოლოდინის სიას." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;600;800&display=swap" },
    ],
  }),
  component: Index,
});

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e?.isIntersecting && (el.classList.add("in"), io.disconnect()), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

const btn = "inline-flex items-center justify-center rounded-full bg-metal px-8 py-4 text-lg font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40";

const problems = [
  { icon: "₾", title: "ძალიან ძვირი", text: "სამრეწველო რობოტი ხელები ბევრად მეტი ღირს, ვიდრე სტუდენტს ან მეიქერს შეუძლია დახარჯოს." },
  { icon: "✋", title: "ზედმეტი ხელით სამუშაო", text: "რჩილვა ან გადაღება ხშირად დამატებით ხელებს მოითხოვს, რომლებიც არ გაქვს." },
  { icon: "⚙", title: "ძალიან რთული", text: "რობოტიკის ინსტრუმენტების ათვისებას დიდი დრო სჭირდება." },
];

const steps = [
  { mode: "step1" as const, title: "რჩილავ და ორივე ხელი გჭირდება", text: "დაფა მოძრაობს, რჩილვის ღერო ხელშია — მესამე ხელი აკლია." },
  { mode: "step2" as const, title: "ამაგრებ მოდულს", text: "პატარა მოდული მაგნიტურად ებმება ხელს — ერთ წამში." },
  { mode: "step3" as const, title: "დაფა ადგილზე რჩება", text: "ModuArm უძრავად იჭერს დაფას, შენ კი აგრძელებ მუშაობას." },
];

const tasks = [
  { icon: "🔥", name: "რჩილვა", module: "GripFix მოდული", text: "მყარად იჭერს დაფას ან სადენს, რომ ორივე ხელი თავისუფალი გქონდეს." },
  { icon: "🎥", name: "გადაღება", module: "CamMount მოდული", text: "ტელეფონს ან კამერას ნელა ამოძრავებს და სტაბილურ კადრს გაძლევს." },
  { icon: "🔩", name: "წვრილი დეტალების დახარისხება", module: "PickSort მოდული", text: "ჭანჭიკებსა და ნაწილებს ფერის ან ზომის მიხედვით ალაგებს." },
  { icon: "📐", name: "მასალის დაჭერა", module: "HoldPad მოდული", text: "აწებებისას ან ჭრისას მასალას სწორ კუთხეზე აჩერებს." },
];

const modules = [
  { icon: "🔥", name: "რჩილვა", module: "GripFix მოდული", text: "მყარად იჭერს დაფას ან სადენს, რომ ორივე ხელი თავისუფალი გქონდეს." },
  { icon: "🎥", name: "გადაღება", module: "CamMount მოდული", text: "ტელეფონს ან კამერას ნელა ამოძრავებს და სტაბილურ კადრს გაძლევს." },
  { icon: "🔩", name: "დახარისხება", module: "PickSort მოდული", text: "ჭანჭიკებსა და ნაწილებს ფერის ან ზომის მიხედვით ალაგებს." },
  { icon: "📐", name: "დაჭერა", module: "HoldPad მოდული", text: "აწებებისას ან ჭრისას მასალას სწორ კუთხეზე აჩერებს." },
];

function DaySection() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(Number((e.target as HTMLElement).dataset["i"]))),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);
  return (
    <section className="bg-gunmetal px-6 py-24 text-secondary-foreground">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-4xl font-extrabold md:text-5xl">ერთი დღე ModuArm-თან</h2></Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="sticky top-6 z-10 self-start rounded-3xl bg-dark-muted p-6 md:top-24">
            <RobotArm key={steps[active]!.mode} mode={steps[active]!.mode} className="mx-auto h-56 w-full md:h-80" />
            <p className="mt-2 text-center text-sm text-dark-muted-foreground">ნაბიჯი {active + 1} / 3</p>
          </div>
          <div className="space-y-[40vh] py-[10vh]">
            {steps.map((s, i) => (
              <div key={i} data-i={i} ref={(el) => { refs.current[i] = el; }}
                className={`rounded-3xl border-2 p-8 transition-opacity duration-500 ${active === i ? "border-primary opacity-100" : "border-dark-muted opacity-40"}`}>
                <span className="text-5xl font-extrabold text-primary">{i + 1}</span>
                <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-dark-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SwapSection() {
  const [active, setActive] = useState(0);
  const [swapping, setSwapping] = useState(false);
  const [showTool, setShowTool] = useState(true);

  const select = (i: number) => {
    if (i === active || swapping) return;
    setSwapping(true);
    setShowTool(false);
    window.setTimeout(() => {
      setShowTool(true);
      setActive(i);
      setSwapping(false);
    }, 500);
  };

  const m = modules[active]!;

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal><h2 className="text-4xl font-extrabold md:text-5xl">შეცვალე მოდული</h2></Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="self-start rounded-3xl bg-silver p-6">
            <div className="relative mx-auto h-72 w-full md:h-96">
              <RobotArm className={`mx-auto h-72 w-full md:h-96 ${showTool ? "swap-tool-in" : "swap-tool-out"}`} mode="step3" />
            </div>
            <div className="mt-4 rounded-2xl bg-dark-muted p-5 text-secondary-foreground">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">მაგალითი</span>
              <h3 key={active} className="swap-fade mt-1 text-2xl font-semibold">{m.module}</h3>
              <p key={`t-${active}`} className="swap-fade mt-1 text-dark-muted-foreground">{m.text}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-start">
            {modules.map((mod, i) => (
              <button
                key={mod.name}
                onClick={() => select(i)}
                aria-pressed={active === i}
                disabled={swapping}
                className={`lift rounded-3xl border-2 bg-card p-6 text-left transition-colors ${active === i ? "border-primary swap-chip-active" : "border-transparent"}`}
              >
                <span className="text-3xl" aria-hidden>{mod.icon}</span>
                <span className="mt-3 block text-lg font-semibold leading-snug">{mod.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const [task, setTask] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = String(new FormData(e.currentTarget).get("email") || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255) return setErr("გთხოვ, შეიყვანე სწორი ელფოსტა.");
    setErr("");
    setSent(true); // demo only — nothing is stored
  };

  return (
    <main className="overflow-x-clip">
      {/* Hero */}
      <section className="px-6 pb-20 pt-10 md:pt-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xl font-extrabold">Modu<span className="text-primary">Arm</span></p>
          <div className="mt-10 grid items-center gap-10 md:grid-cols-2">
            <Reveal>
              <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">მესამე ხელი <span className="text-metal">შენი პროექტისთვის</span></h1>
              <p className="mt-6 max-w-md text-xl text-muted-foreground">მოდულური რობოტი ხელის იდეა სტუდენტებისა და ტექნოლოგიის ენთუზიასტებისთვის.</p>
              <a href="#waitlist" className={`${btn} mt-8`}>შემატყობინე გაშვებისას</a>
            </Reveal>
            <div className="rounded-3xl bg-silver p-6"><RobotArm className="mx-auto h-72 w-full md:h-96" /></div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-4xl font-extrabold md:text-5xl">პრობლემა</h2></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {problems.map((p) => (
              <Reveal key={p.title} className="rounded-3xl bg-card p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-metal text-2xl text-primary-foreground">{p.icon}</div>
                <h3 className="mt-5 text-2xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DaySection />

      <SwapSection />

      {/* Tasks */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal><h2 className="text-4xl font-extrabold md:text-5xl">აირჩიე შენი ამოცანა</h2></Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {tasks.map((t, i) => (
              <button key={t.name} onClick={() => setTask(i)} aria-pressed={task === i}
                className={`lift rounded-3xl border-2 bg-card p-6 text-left ${task === i ? "border-primary" : "border-transparent"}`}>
                <span className="text-3xl" aria-hidden>{t.icon}</span>
                <span className="mt-3 block text-lg font-semibold leading-snug">{t.name}</span>
              </button>
            ))}
          </div>
          {task !== null && (
            <div key={task} className="reveal in mt-6 rounded-3xl bg-silver p-8 text-secondary-foreground">
                            <h3 className="text-2xl font-semibold">{tasks[task]!.module}</h3>
              <p className="mt-2 text-dark-muted-foreground">{tasks[task]!.text}</p>
            </div>
          )}
        </div>
      </section>

      {/* Waitlist */}
      <section id="waitlist" className="bg-gunmetal px-6 py-24 text-secondary-foreground">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="text-4xl font-extrabold md:text-5xl">შეუერთდი მოლოდინის სიას</h2>
          {sent ? (
            <div className="mt-10 rounded-3xl bg-dark-muted p-8" role="status">
              <p className="text-2xl font-semibold text-primary">გმადლობ! 🤍</p>
              <p className="mt-2 text-dark-muted-foreground">ეს სადემონსტრაციო ფორმაა — შენი მონაცემები არსად შეინახება.</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="mt-10 space-y-5">
              <label className="block">
                <span className="font-semibold">ელფოსტა</span>
                <input name="email" type="email" maxLength={255} placeholder="name@example.com"
                  className="mt-2 w-full rounded-2xl border-2 border-dark-muted bg-dark-muted px-5 py-4 text-lg outline-none focus:border-primary" />
              </label>
              <label className="block">
                <span className="font-semibold">რა ფასი მიგაჩნია სამართლიანად? <span className="font-normal text-dark-muted-foreground">(არასავალდებულო)</span></span>
                <input name="price" maxLength={50} placeholder="მაგ. 300 ₾"
                  className="mt-2 w-full rounded-2xl border-2 border-dark-muted bg-dark-muted px-5 py-4 text-lg outline-none focus:border-primary" />
              </label>
              {err && <p className="text-primary" role="alert">{err}</p>}
              <button type="submit" className={`${btn} w-full`}>შემატყობინე გაშვებისას</button>
              <p className="text-sm text-dark-muted-foreground">სადემონსტრაციო ფორმა — არაფერი ინახება.</p>
            </form>
          )}
        </Reveal>
      </section>

      <footer className="px-6 py-10 text-center text-muted-foreground">
        <p>
          ეს არის სტუდენტური პროტოტიპი, შექმნილი{" "}
          <a className="font-semibold text-primary underline underline-offset-4" target="_blank" rel="noreferrer"
            href="https://www.kickstarter.com/projects/925044833/kynooe-one-worlds-1st-modular-personal-ai-robot-arm">
            Kynooe One-ის კამპანიით
          </a>{" "}
          შთაგონებით
        </p>
      </footer>
    </main>
  );
}

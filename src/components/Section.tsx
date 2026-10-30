export default function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 max-w-xl text-muted">{intro}</p>}
      <div className="mt-12">{children}</div>
    </section>
  );
}

import Section from "./Section";
export default function About() {
  return (
    <Section id="about" title="A Collective of Builders.">
      <div className="grid gap-10 md:grid-cols-2">
        <p className="max-w-prose leading-relaxed text-muted">We are a group of friends who write software together. We share an interest in programming, new technology and the satisfaction of seeing an idea run for the first time.</p>
        <p className="max-w-prose leading-relaxed text-muted">We review each other&rsquo;s code, try tools we have not used before, and keep what works. Some projects become products. Others are experiments that teach us something. All of them are built in the open when we can.</p>
      </div>
      <dl className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-3">
        {[["Collaboration", "Shared repos, pull requests and honest code review."], ["Continuous learning", "We pick up new stacks by building with them."], ["Experimentation", "Small prototypes first, then the ones that earn it ship."]].map(([t, d]) => (
          <div key={t} className="bg-panel p-6"><dt className="font-medium">{t}</dt><dd className="mt-2 text-sm leading-relaxed text-muted">{d}</dd></div>
        ))}
      </dl>
    </Section>
  );
}

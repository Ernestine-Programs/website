import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects } from "@/config/site";
export default function Projects() {
  return (
    <Section id="projects" title="What we are building." intro="A selection of our work. Each card links to its repository.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((p) => <ProjectCard key={p.name} p={p} />)}</div>
    </Section>
  );
}

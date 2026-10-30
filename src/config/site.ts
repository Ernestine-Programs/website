// Single source of truth. Replace the placeholders marked TODO.
export type Status = "Active" | "Completed" | "Experimental";
export const site = {
  name: "Ernestine Programs",
  description: "An independent collective of developers designing, building and shipping software together.",
  url: "https://ernestine-programs.dev", // TODO: real domain
  github: "https://github.com/Ernestine-Programs",
  email: "hello@ernestine-programs.dev", // TODO
  social: [{ label: "GitHub", href: "https://github.com/Ernestine-Programs" }], // add more: { label: "X", href: "..." }
  nav: [
    { label: "Home", href: "#home" }, { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" }, { label: "Team", href: "#team" }, { label: "Contact", href: "#contact" },
  ],
};
export type Project = { name: string; description: string; stack: string[]; status: Status; repo: string; demo?: string; seed: number };
// TODO: placeholders. Add or edit entries; cards update automatically.
export const projects: Project[] = [
  { name: "project-one", description: "A placeholder for your flagship application. Describe what it does and who it is for.", stack: ["Next.js", "TypeScript", "PostgreSQL"], status: "Active", repo: "https://github.com/Ernestine-Programs", demo: "https://example.com", seed: 3 },
  { name: "project-two", description: "A mobile app experiment. Replace this with a one or two sentence summary.", stack: ["React Native", "Node.js"], status: "Experimental", repo: "https://github.com/Ernestine-Programs", seed: 7 },
  { name: "project-three", description: "A finished tool or library the team shipped. Say what problem it solves.", stack: ["Go", "Docker"], status: "Completed", repo: "https://github.com/Ernestine-Programs", seed: 11 },
];
export const techCategories = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Python", "Go", "REST & GraphQL"] },
  { title: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
  { title: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "SQLite"] },
  { title: "DevOps & Infrastructure", items: ["Docker", "GitHub Actions", "Linux", "Cloud hosting"] },
  { title: "Tools & Frameworks", items: ["Git", "Figma", "Jest", "VS Code"] },
]; // TODO: keep only what you really use
export const team = [
  { name: "Member One", role: "Full-stack developer", bio: "Placeholder bio. Share what you build and what you are learning.", github: "https://github.com/Ernestine-Programs" },
  { name: "Member Two", role: "Mobile developer", bio: "Placeholder bio. Add a sentence about your focus areas.", github: "https://github.com/Ernestine-Programs" },
  { name: "Member Three", role: "Backend & infrastructure", bio: "Placeholder bio. Mention tools you enjoy working with.", github: "https://github.com/Ernestine-Programs" },
  { name: "Member Four", role: "Frontend & design", bio: "Placeholder bio. Describe your approach to interfaces.", github: "https://github.com/Ernestine-Programs" },
];

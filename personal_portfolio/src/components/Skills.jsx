import {
  SiRuby,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiOpenjdk,
  SiCplusplus,
  SiRubyonrails,
  SiSidekiq,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiGraphql,
  SiJest,
  SiPytest,
  SiVitest,
  SiAmazonwebservices,
  SiDocker,
  SiDatadog,
  SiGithubactions,
  SiLinux,
} from "react-icons/si";
import { FiDatabase, FiBox, FiCheckCircle } from "react-icons/fi";
import { Section, SectionHeading } from "./ui";

// Mirrors the Technical Skills section of the resume.
const groups = [
  {
    name: "Languages",
    items: [
      ["Ruby", SiRuby],
      ["Python", SiPython],
      ["TypeScript", SiTypescript],
      ["JavaScript", SiJavascript],
      ["Java", SiOpenjdk],
      ["C/C++", SiCplusplus],
      ["SQL", FiDatabase],
    ],
  },
  {
    name: "Frameworks & Data",
    items: [
      ["Ruby on Rails", SiRubyonrails],
      ["Sidekiq", SiSidekiq],
      ["React", SiReact],
      ["React Native", SiReact],
      ["Next.js", SiNextdotjs],
      ["Node.js", SiNodedotjs],
      ["FastAPI", SiFastapi],
      ["PostgreSQL", SiPostgresql],
      ["GraphQL", SiGraphql],
      ["Cube.js", FiBox],
    ],
  },
  {
    name: "Tools & Testing",
    items: [
      ["RSpec", FiCheckCircle],
      ["Jest", SiJest],
      ["PyTest", SiPytest],
      ["Vitest", SiVitest],
      ["AWS", SiAmazonwebservices],
      ["Docker", SiDocker],
      ["Datadog", SiDatadog],
      ["GitHub Actions", SiGithubactions],
      ["Linux", SiLinux],
    ],
  },
];

const Skills = () => (
  <Section id="skills">
    <SectionHeading accent="My" rest="Skills" />
    <div className="flex flex-col gap-4 pt-12">
      {groups.map((g) => (
        <div
          key={g.name}
          className="grid gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-6 lg:grid-cols-[13rem_1fr] lg:items-center"
        >
          <h3 className="text-lg font-semibold text-slate-300">{g.name}</h3>
          <ul className="flex flex-wrap gap-2">
            {g.items.map(([label, Icon]) => (
              <li
                key={label}
                className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950 px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-400/50 hover:text-blue-300"
              >
                <Icon aria-hidden="true" className="text-base text-blue-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;

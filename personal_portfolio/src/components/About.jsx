import DhruvImg from "../assets/Dhruv.jpg";
import { FiArrowUpRight } from "react-icons/fi";
import { Section } from "./ui";

const facts = [
  { label: "Education", value: "McMaster University, BEng Software Engineering (Co-op) · Dean's Honour Roll" },
  { label: "Currently", value: "Software Engineering Intern at Wealthsimple" },
  { label: "Guiding Principle", value: <i>What if it turns out better than you expect</i> },
];

const About = () => (
  <Section id="about-me" className="bg-gradient-to-b from-black to-slate-950">
    <div className="grid items-center gap-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-16 lg:p-14">
      <div className="flex flex-col items-center gap-5">
        <img
          src={DhruvImg}
          alt="Portrait of Dhruv Chokshi"
          draggable="false"
          className="size-48 select-none rounded-3xl border-2 border-blue-400/70 object-cover sm:size-64 lg:size-72"
        />
        <a
          href="https://www.notion.so/Dhruv-Chokshi-85e16a82406f40eaa48235eaf8129a6c"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 rounded-full border border-blue-400/60 px-5 py-1.5 text-sm font-semibold uppercase tracking-wider text-blue-400 transition-colors hover:bg-blue-400 hover:text-slate-950"
        >
          Portfolio <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>

      <div className="max-w-[65ch]">
        <h2 className="text-4xl font-bold tracking-tight text-blue-400 md:text-5xl">
          <span className="text-slate-400">About </span>Me
        </h2>
        <div className="space-y-5 pt-8 text-base leading-relaxed text-slate-400 md:text-[1.0625rem]">
          <p>
            I&apos;m Dhruv, a Software Engineering student at McMaster University, currently interning
            at <strong className="font-semibold text-slate-200">Wealthsimple</strong>. Before that I
            spent two summers at Info-Tech Research Group, first on Rails backends for Survey Insights
            and then building LLM-powered analytics for CIOs.
          </p>
          <p>
            I like work where the impact is easy to point to: fewer manual hours for an ops team, a
            faster dashboard, a test suite people can trust. Most days that means Ruby on Rails,
            TypeScript and React, and more and more, building with LLMs.
          </p>
          <p>
            It started in the Regional SciTech program at Chinguacousy Secondary School, and in the
            time I spent volunteering at my local hospital, vaccine clinics and pharmacies. The goal
            hasn&apos;t changed since: connect programming with solutions that make a real difference
            for people.
          </p>
          <p>If you&apos;d like to work together or just want to say hi, feel free to reach out!</p>
        </div>
      </div>
    </div>

    <dl className="grid gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 pt-0 md:grid-cols-3 mt-6">
      {facts.map((f) => (
        <div key={f.label} className="bg-slate-950 px-6 py-7 text-center">
          <dt className="text-sm font-semibold uppercase tracking-wider text-blue-400">{f.label}</dt>
          <dd className="pt-2 text-slate-400">{f.value}</dd>
        </div>
      ))}
    </dl>
  </Section>
);

export default About;

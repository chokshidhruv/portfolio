import DhruvImg from "../assets/Dhruv.jpg";
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
      </div>

      <div className="max-w-[65ch]">
        <h2 className="text-4xl font-bold tracking-tight text-blue-400 md:text-5xl">
          <span className="text-slate-400">About </span>Me
        </h2>
        <div className="space-y-5 pt-6 text-lg leading-relaxed text-slate-400">
          <p>
            I&apos;m Dhruv, a Software Engineering student at McMaster and a software engineering
            intern at <strong className="font-semibold text-slate-200">Wealthsimple</strong>. I really
            enjoy what I&apos;m doing right now, because the work I ship reaches millions of Canadians
            and the money they depend on.
          </p>
          <p>
            That&apos;s what I&apos;ve cared about since high school, when I spent my time volunteering
            at my local hospital, vaccine clinics and pharmacies because I wanted to make a real
            difference in my community. Want to work together or just say hi?{" "}
            <a href="#contact" className="font-medium text-blue-400 underline underline-offset-4 hover:text-blue-300">
              Reach out
            </a>
            .
          </p>
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

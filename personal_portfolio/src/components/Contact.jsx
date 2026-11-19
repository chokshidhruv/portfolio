import { FiArrowUpRight } from "react-icons/fi";
import { Section, SectionHeading } from "./ui";
import { socialLinks } from "./Hero";

const EMAIL = "chokshid@mcmaster.ca";

const Contact = () => (
  <Section id="contact" className="pb-28">
    <SectionHeading accent="Me" rest="Contact" accentFirst={false} />

    <div className="flex flex-col items-center pt-14 text-center">
      <p className="text-2xl font-semibold text-slate-200 md:text-3xl">Let&apos;s connect!</p>
      <p className="max-w-lg pt-3 text-slate-400">
        If you have a question or just want to say hi, my inbox is open.
      </p>

      <a
        href={`mailto:${EMAIL}`}
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-blue-300"
      >
        {EMAIL} <FiArrowUpRight aria-hidden="true" />
      </a>

      <ul className="flex gap-3 pt-6">
        {socialLinks
          .filter((l) => l.name !== "Email")
          .map(({ name, url, Icon }) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-blue-400/50 hover:text-blue-300"
              >
                <Icon aria-hidden="true" /> {name}
              </a>
            </li>
          ))}
      </ul>
    </div>
  </Section>
);

export default Contact;

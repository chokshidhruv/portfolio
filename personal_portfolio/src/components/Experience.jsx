import React from "react";
import { Section, SectionHeading, Card, CardGrid, DetailModal } from "./ui";
import WealthsimpleImg from "../assets/wealthsimple.svg";
import InfotechLogo from "../assets/Info-TechImg.jpeg";
import LdcLogo from "../assets/macldc.png";
import SesLogo from "../assets/ses.png";
import MesLogo from "../assets/mesLogo.png";
import MacLogo from "../assets/mcmasterLogo.png";
import SDM from "../assets/shoppers.jpg";
import VaccinationClinic from "../assets/save-max-vaccine-clinic.webp";
import BCHospital from "../assets/bchospital.jpg";
import AceLogo from "../assets/aceLogo.png";
import ChingLogo from "../assets/chinglogo.png";
import ScitechLogo from "../assets/scitech.jpg";

// Card fields: company, title, date, tags. Modal fields: subtitle, loc, links, roles[].
// A company with several work terms keeps ONE card; each term is a role in its modal.
const experienceList = [
  {
    img: WealthsimpleImg,
    company: "Wealthsimple",
    title: "Software Engineering Intern",
    date: "Sep 2026 – Apr 2027",
    loc: "Toronto, ON",
    tags: ["Ruby on Rails", "React"],
    skills: ["Ruby on Rails", "Sidekiq", "React", "React Native", "RSpec", "Braze", "Datadog"],
    links: [{ name: "Website", url: "https://www.wealthsimple.com/" }],
    roles: [
      {
        title: "Software Engineering Intern",
        team: "Money Movement, then Banking & Growth",
        date: "Sep 2026 – Apr 2027",
        body: (
          <>
            <p>
              On Money Movement, I shipped an automated forced-withdrawal pipeline for income-fund
              accounts in Ruby on Rails and Sidekiq. It runs a cron-scheduled notification-to-execution
              flow and is projected to cut manual Ops intervention by 98%, from 35,000 accounts a year
              to 500. Alongside it I built four Braze client-notification workflows, backed by 78+
              RSpec tests and five Rails maintenance tasks that run each workflow end to end, with logs
              tracked in Datadog.
            </p>
            <p>
              I also drove the migration of a mobile-only flow to web for millions of eligible clients
              (React Native to React), shipping zero unintended UI changes across 4,000+ screen states,
              and co-built a Claude Code skill that finds and repairs invalid tests, removing 80% of
              false positives and raising team coverage from 4% to 15%. In January I move to the
              Banking &amp; Growth team for the rest of the term.
            </p>
          </>
        ),
      },
    ],
  },
  {
    img: InfotechLogo,
    company: "Info-Tech Research Group",
    title: "Data & Backend Engineering Intern",
    date: "Two terms · 2025, 2026",
    loc: "Toronto, ON",
    tags: ["Claude API", "Rails"],
    skills: ["Claude API", "Cube.js", "SQL", "MS Fabric", "Ruby on Rails", "RSpec"],
    links: [{ name: "Website", url: "https://www.infotech.com/" }],
    roles: [
      {
        title: "Data Engineering Intern",
        team: "CIO Analytics",
        date: "May 2026 – Aug 2026",
        body: (
          <p>
            Engineered production LLM prompt pipelines on the Claude API that turn each client's own
            data into department performance and trend analytics for CIOs, serving 30,000+ clients
            and validated against a 5% hallucination threshold. I designed Cube.js semantic-layer
            models and SQL transformations over MS Fabric data across a 500+ table schema, and cut one
            dashboard section's API calls from six to one by consolidating hardcoded per-category
            queries into a single grouped query, removing 185 lines of duplicated configuration.
          </p>
        ),
      },
      {
        title: "Backend Engineering Intern",
        team: "Survey Insights",
        date: "May 2025 – Aug 2025",
        body: (
          <p>
            Built a Rails import dashboard on a third-party REST API that parses raw responses into
            structured errors and employee data for 1,000+ records per import, cutting support tickets
            by 60%. I brought dashboard latency down 42% (780ms to 450ms) by removing N+1
            ActiveRecord queries, indexing frequently queried columns and lazy-loading heavy frontend
            components, and raised test coverage from 53% to 75% with 200+ RSpec tests, replacing
            false-positive stubs with integration tests built on fakes.
          </p>
        ),
      },
    ],
  },
  {
    img: LdcLogo,
    imgFit: "contain",
    company: "Leadership Dev. Conference",
    subtitle: "Website Developer Lead · McMaster Engineering Society",
    title: "Website Developer Lead",
    date: "Apr 2024 – Present",
    loc: "McMaster University",
    tags: ["React", "Tailwind"],
    skills: ["React", "Tailwind", "Figma", "UI/UX"],
    links: [
      { name: "Website", url: "https://macengldc.ca" },
      { name: "GitHub", url: "https://github.com/Leadership-Dev-Conference-Committee/LDCC-Website-Official" },
    ],
    roles: [
      {
        body: (
          <>
            <p>
              For the past five years, the McMaster Engineering Society has hosted the annual
              Leadership Development Conference, giving engineering students the chance to build
              skills, network and talk with professionals in industry.
            </p>
            <p>
              As Lead Website Developer (and Co-Chair of the committee), I built the conference
              website from the ground up for a student union of over 5,000 people, using React Router
              for a seamless multi-page experience, Tailwind for responsive layouts, and reusable
              components to keep the site consistent. I designed the UI in Figma from scratch, with
              custom LDC themes that reflect the Engineering Society's branding and appeal to both
              students and sponsors.
            </p>
          </>
        ),
      },
    ],
  },
  {
    img: SesLogo,
    imgFit: "contain",
    company: "Software Engineering Society",
    title: "Website Developer",
    date: "Apr 2024 – Present",
    loc: "McMaster University",
    tags: ["Astro", "Tailwind"],
    skills: ["React", "Astro", "Tailwind", "MDX", "UI/UX"],
    links: [{ name: "GitHub", url: "https://github.com/McMaster-Software-Engineering-Society/SES-Website" }],
    roles: [
      {
        body: (
          <p>
            I worked with the Web Developer Lead to build a fast, dynamic website for McMaster's
            Software Engineering Society (SES), a student union of over 5,000, using React,
            TailwindCSS, Astro and MDX. I researched UI patterns on Dribbble and Behance and used them
            as a starting point for custom designs made specifically for the SES site.
          </p>
        ),
      },
    ],
  },
  {
    img: MesLogo,
    company: "McMaster Engineering Society",
    title: "LDC Committee Co-Chair",
    subtitle: "Leadership Development Conference Committee Co-Chair",
    date: "Apr 2024 – Present",
    loc: "McMaster University",
    tags: ["Leadership", "Teamwork"],
    skills: ["Leadership", "Teamwork", "Event Planning"],
    links: [
      { name: "LDC Website", url: "https://macengldc.netlify.app" },
      { name: "MES Website", url: "https://macengsociety.ca" },
    ],
    roles: [],
  },
  {
    img: MacLogo,
    imgFit: "contain",
    company: "McMaster University",
    title: "Residence Ambassador",
    subtitle: "Residence Ambassador · Housing and Conference Services",
    date: "Aug 2023 – Apr 2024",
    loc: "McMaster University",
    tags: ["Communication", "Tours"],
    skills: ["Communication", "Customer Service", "Time Management"],
    roles: [
      {
        body: (
          <>
            <p>
              I showed prospective students and their families the advantages of living on campus in
              first year, using my own room as the example. I led more than fifty residence tours for
              over 500 students, tailoring each one to what that student cared about and answering a
              wide range of questions about campus life.
            </p>
            <p>
              I did this during my first year of engineering, which taught me to manage my time and
              juggle academics with a part-time job.
            </p>
          </>
        ),
      },
    ],
  },
  {
    img: ScitechLogo,
    imgFit: "contain",
    company: "Chinguacousy S.S.",
    title: "Math Teaching Assistant",
    subtitle: "Teaching Assistant · Grade 9–10 Math Department",
    date: "Sep 2022 – Jan 2023",
    loc: "Chinguacousy Secondary School",
    tags: ["Math", "Scratch"],
    skills: ["Math", "Scratch", "Communication"],
    roles: [
      {
        body: (
          <>
            <p>
              I supported the grade 9/10 math teacher with instruction and marking, and worked closely
              with 25+ students, one-on-one where needed, to help them understand the material.
            </p>
            <p>
              In my spare period I also helped a grade 9 class with curriculum concepts and Scratch
              coding to show how what they were learning applied in practice, and ran lunchtime
              support sessions for 10–12 students at a time. It taught me a lot about clear
              communication and patience.
            </p>
          </>
        ),
      },
    ],
  },
  {
    img: BCHospital,
    imgFit: "contain",
    company: "Brampton Civic Hospital",
    title: "Hospital Volunteer",
    subtitle: "Hospital Volunteer · William Osler Health System",
    date: "Aug 2022 – Jan 2023",
    loc: "Brampton, ON",
    tags: ["Customer Service"],
    skills: ["Customer Service", "Communication", "Compassion"],
    roles: [],
  },
  {
    img: SDM,
    imgFit: "contain",
    company: "Shoppers Drug Mart",
    title: "Pharmacy Assistant (Co-op)",
    date: "Sep 2021 – Mar 2022",
    loc: "Brampton, ON",
    tags: ["Customer Service", "Teamwork"],
    skills: ["Customer Service", "Teamwork", "Time Management"],
    roles: [],
  },
  {
    img: ChingLogo,
    imgFit: "contain",
    company: "Chinguacousy S.S.",
    title: "MC / Host",
    subtitle: "Athletic Council MC · Grade 9 Orientation Host · Take Your Kids to Work Day Host · Prom MC",
    date: "Sep 2021 – Jun 2023",
    loc: "Chinguacousy Secondary School",
    tags: ["Public Speaking"],
    skills: ["Public Speaking", "Leadership"],
    roles: [],
  },
  {
    img: VaccinationClinic,
    company: "Peel Region Vaccine Clinic",
    title: "Vaccination Clinic Volunteer",
    date: "Nov 2021 – Aug 2022",
    loc: "Save Max Sports Centre",
    tags: ["Customer Service", "Teamwork"],
    skills: ["Customer Service", "Teamwork"],
    roles: [],
  },
  {
    img: AceLogo,
    imgFit: "contain",
    company: "Student Athletic Council",
    title: "President / Chairman",
    date: "Aug 2020 – Jun 2023",
    loc: "Chinguacousy Secondary School",
    tags: ["Leadership", "Teamwork"],
    skills: ["Leadership", "Teamwork"],
    roles: [],
  },
  {
    img: ScitechLogo,
    imgFit: "contain",
    company: "Chinguacousy S.S.",
    title: "SciTech Regional Program + Health & Wellness SHSM",
    date: "Sep 2019 – Jun 2023",
    loc: "Chinguacousy Secondary School",
    tags: ["SciTech", "SHSM"],
    skills: ["SciTech", "SHSM"],
    roles: [],
  },
];

const Experience = () => {
  const [selected, setSelected] = React.useState(null);
  const close = React.useCallback(() => setSelected(null), []);
  const multi = selected?.roles.length > 1;

  return (
    <Section id="experiences">
      <SectionHeading accent="My" rest="Experience" />
      <CardGrid
        items={experienceList}
        renderCard={(exp) => (
          <Card
            img={exp.img}
            imgAlt={`${exp.company} logo`}
            imgFit={exp.imgFit}
            title={exp.company}
            subtitle={exp.title}
            date={exp.date}
            tags={exp.tags}
            onOpen={() => setSelected(exp)}
          />
        )}
      />
      <DetailModal
        onClose={close}
        entry={
          selected && {
            img: selected.img,
            imgAlt: `${selected.company} logo`,
            title: selected.company,
            // Multi-term companies name each role in its own block instead of the header.
            subtitle: multi ? `${selected.roles.length} work terms` : selected.subtitle || selected.title,
            meta: [selected.loc, multi ? null : selected.date],
            tags: selected.skills,
            links: selected.links,
            // Single-term roles already show title/date in the header.
            roles: selected.roles.map((r) => (multi ? r : { body: r.body, team: null, title: null, date: null })),
          }
        }
      />
    </Section>
  );
};

export default Experience;

import React from "react";
import Dhruv from "../assets/Dhruv.jpg";
import { motion } from "framer-motion";
import Modal from "./Modal";
import full from "../assets/full.png";
import bottom from "../assets/Intersect.png";
import LdcLogo from "../assets/ldcLogo.png";
import SesLogo from "../assets/sesLogo.png";
import MesLogo from "../assets/mesLogo.png";
import MacLogo from "../assets/mcmasterLogo.png";
import SDM from "../assets/shoppers.jpg";
import VaccinationClinic from "../assets/save-max-vaccine-clinic.webp";
import BCHospital from "../assets/bchospital.jpg";
import AceLogo from "../assets/aceLogo.png";
import ChingLogo from "../assets/chingLogo.png";
import ScitechLogo from "../assets/scitech.jpg";

const Experiences = () => {
  const experienceList = [
    {
      img: LdcLogo,
      title: "Website Developer Lead",
      company: "Leadership Dev. Conference",
      skills: ["React", "Tailwind", "Framer"],
      date: "April 2024 - Present",
      loc: "McMaster University",
      description: {
        title: "Website Developer Lead",
        company:
          "Leadership Development Conference - McMaster Engineering Society",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Website",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
          "Stay tuned for updates!",
      },
    },
    {
      img: SesLogo,
      title: "Wesite Developer",
      company: "Software Engineering Society",
      skills: ["Tailwind", "Astro", 'React'],
      date: "April 2024 - Present",
      loc: "McMaster University",
      description: {
        title: "Website Developer",
        company: "Software Engineering Society",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Website",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph: `As a <strong>website developer</strong> for McMaster’s Software Engineering Society (SES), I assisted the Web Developer Lead in producing SES’s high-performance and dynamic website using <strong>React</strong>, <strong>TailwindCSS</strong>, <strong>AstroJS</strong>, and <strong>MDX</strong> for an engineering student union of over <strong>5,000 students.</strong> I also researched various <strong>UI/UX components</strong> on platforms such as Dribbble and Behance, using them as inspiration to create custom designs from scratch, tailored specifically for the SES website.`      ,
    },
    },
    {
      img: MesLogo,
      title: "Leadership Development Conference Coordinator",
      company: "McMaster Engineernig Society",
      skills: ["Leadership", "Teamwork"],
      date: "April 2024 - Present",
      loc: "McMaster University",
      description: {
        title: "Leadership Development Conference Coordinator",
        company: "McMaster Engineering Society",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "MES Website",
            url: "https://Google.ca",
          },
          {
            name: "MES Website",
            url: "https://Google.ca",
          },
        ],
        paragraph:
          "Stay tuned for updates!",
      },
    },
    {
      img: MacLogo,
      title: "Residence Ambassador",
      company: "McMaster University",
      skills: ["Communication", "Tours"],
      date: "August 2023 - April 2024",
      loc: "McMaster University",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
            "Stay tuned for updates!",      
        },
    },
    {
      img: MacLogo,
      title: "Residence Ambassador",
      company: "McMaster University",
      skills: ["Communication", "Tours"],
      date: "August 2023 - April 2024",
      loc: "McMaster University",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
            "Stay tuned for updates!",     
        },
    },
    {
      img: ScitechLogo,
      title: "TA of Math Dept.",
      company: "Grade 9/10 Math Dept.",
      skills: ["Customer Service", "Teamwork"],
      date: "August 2022 - January 2023",
      loc: "Brampton Civic Hopsital - William Osler",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
          "Stay tuned for updates!",
      },
    },
    {
      img: BCHospital,
      title: "Hopspital Volunteer",
      company: "Brampton Civic Hospital",
      skills: ["Customer Service", "Teamwork"],
      date: "August 2022 - January 2023",
      loc: "Brampton Civic Hopsital - William Osler",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
            "Stay tuned for updates!",      
    },
    },
    {
      img: SDM,
      title: "Pharmacy Assistant (Co-op)",
      company: "Shoppers Drug Mart",
      skills: ["Customer Service", "Teamwork"],
      date: "September 2021 - March 2022",
      loc: "McMaster University",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
            "Stay tuned for updates!",      
    },
    },
    {
      img: ChingLogo,
      title: "Dedicated MC/Host",
      company: "Chinguacousy S.S.",
      skills: ["Customer Service", "Teamwork"],
      date: "September 2021 - June 2023",
      loc: "Save Max Sports Centre",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie",
      },
    },
    {
      img: VaccinationClinic,
      title: "Vaccination Clinic Volunteer",
      company: "Peel Region Vaccine Clinic",
      skills: ["Customer Service", "Teamwork"],
      date: "November 2021 - August 2022",
      loc: "Save Max Sports Centre",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie",
      },
    },
    {
      img: AceLogo,
      title: "President/Chairman",
      company: "Student Athletic Council",
      skills: ["Customer Service", "Teamwork"],
      date: "August 2020 - June 2023",
      loc: "Save Max Sports Centre",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie",
      },
    },
    {
      img: ScitechLogo,
      title: "SciTech Regional Program + Health & Wellness SHSM",
      company: "Chinguacousy S.S.",
      skills: ["Customer Service", "Teamwork"],
      date: "September 2019 - June 2023",
      loc: "Save Max Sports Centre",
      description: {
        title: "Residence Ambassador",
        company: "McMaster University - Housing and Conference Services",
        date: "Month Year - Month Year",
        linksToView: [
          {
            name: "Github",
            url: "https://Google.ca",
          },
          {
            name: "Github",
            url: "https://Google.ca",
          },
        ],
        paragraph:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie",
      },
    },
  ];

  const iconVariant = (duration) => ({
    hidden: {
      y: 0,
      opacity: 0,
      scale: 1,
      x: -500,
    },
    hiddenOpp: {
      y: 0,
      opacity: 0,
      scale: 1,
      x: 500,
    },
    hiddenY: {
      y: -500,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
      },
      scale: 1,
      x: 0,
    },
  });

  const [selectedExperience, setSelectedExperience] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);

  const openModal = (exp) => {
    setSelectedExperience(exp);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  React.useEffect(() => {
    if (selectedExperience) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      document.body.style.position = "absolute";
      document.body.style.width = "100%";
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "auto";
      document.body.style.position = "static";
    };
  }, [selectedExperience]);

  return (
    <>
      <main className="flex justify-center p-10 pb-16">
        <section className="flex-col flex max-w-screen-xl w-full items-center">
          <motion.h1
            variants={iconVariant(1 / 3)}
            initial={"hidden"}
            animate={"visible"}
            className="text-3xl md:text-5xl font-bold text-slate-400 border-b border-slate-800 w-full"
          >
            <span className="text-blue-400">My </span>Experience
          </motion.h1>

          <motion.div
            variants={iconVariant(1 / 3)}
            initial={"hiddenOpp"}
            animate={"visible"}
            className="grid grid-cols-1 min-[450px]:grid-cols-2 max-w-screen-lg md:grid-cols-4 gap-2 pt-14"
          >
            {experienceList
              .slice(0, showAll ? experienceList.length : 4)
              .map((exp, index) => (
                <div key={index} className="p-2 cursor-pointer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 pb-3 pt-3 border border-gray-800 rounded-lg text-start h-full flex flex-col justify-between"
                    style={{
                      boxShadow: "5px 5px 10px 0px rgb(15, 23, 42)",
                      borderRadius: "1rem",
                    }}
                    onClick={() => openModal(exp)}
                  >
                    <img
                      src={exp.img}
                      alt="company logo"
                      className="px-3 w-full h-72 md:h-56 rounded-t-xl select-none"
                    />
                    <p className="text-lg font-bold text-slate-400 px-4 w-full pt-3">
                      {exp.company}
                    </p>
                    <p className="text-sm font-semibold text-slate-500 px-4 py-2">
                      {exp.title}
                    </p>
                    <p className="text-xs font-semibold text-slate-500 italic px-4">
                      {exp.date}
                    </p>
                    <div className="flex justify-start px-3 pt-5 gap-2">
                      {exp.skills.map((skill) => (
                        <p
                          key={skill}
                          className="hidden lg:block text-xs font-semibold text-blue-400 px-2 py-1 bg-slate-800 rounded-full"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ))}
          </motion.div>

          {experienceList.length > 4 && (
            <motion.button
              className="mt-8 px-4 pt-2 text-blue-400 bg-slate-950 rounded-full font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less..." : "View More..."}
            </motion.button>
          )}

          {selectedExperience && (
            <Modal isVisible={true} onClose={closeModal}>
              <section className="flex flex-col items-start px-10 text-slate-400">
                <div className="flex gap-2 border-b w-full pb-6 items-center border-slate-800">
                  <img
                    src={selectedExperience.img}
                    alt="company logo"
                    className="w-[250px] h-[250px] rounded-t-xl hidden md:flex select-none"
                  />
                  <div className="flex flex-col md:px-5">
                    <h2 className="font-thin text-xl ">
                      Experience Information
                    </h2>
                    <h1 className="font-bold tracking-wide pt-2 text-2xl text-slate-300">
                      {selectedExperience.description.title}
                    </h1>
                    <h1 className="font-extrabold py-3 text-slate-300">
                      {selectedExperience.description.company}
                    </h1>
                    <p className="font-thin italic pb-1 text-sm">
                      {selectedExperience.loc}
                    </p>
                    <p className="font-thin italic text-sm">
                      {selectedExperience.date}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-5">
                      {selectedExperience.skills.map((skill, index) => (
                        <p
                          key={index}
                          className="text-xs font-semibold text-blue-400 px-2 py-1 bg-slate-800 rounded-full"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-5">
                      {selectedExperience.description.linksToView.map(
                        (link, index) => (
                          <motion.a
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            key={index}
                            href={link.url}
                            target="_blank"
                            className="cursor:pointer text-sm font-semibold text-slate-950 px-4 py-1 bg-blue-400 rounded-full"
                          >
                            {link.name}
                          </motion.a>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <p className="py-4 pb-8 text-slate-300" dangerouslySetInnerHTML={{ __html: selectedExperience.description.paragraph }}>
                </p>
              </section>
            </Modal>
          )}
        </section>
      </main>
    </>
  );
};

export default Experiences;

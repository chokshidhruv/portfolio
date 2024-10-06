import React from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import LdcLogo from "../assets/macldc.png";
import SesLogo from "../assets/ses.png";
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
      skills: ["React", "Tailwind", "UI/UX"],
      date: "April 2024 - Present",
      loc: "McMaster University",
      description: {
        title: "Website Developer Lead",
        company:
          "Leadership Development Conference - McMaster Engineering Society",
        skills: ["React", "Tailwind", "UI/UX"],
        linksToView: [
          {
            name: "Website (In Progress)",
            url: "https://macengldc.ca",
          },
          {
            name: "Github",
            url: "https://github.com/Leadership-Dev-Conference-Committee/LDCC-Website-Official",
          },
          // {
          //   name: "Portfolio",
          //   url: "https://www.notion.so/Dhruv-Chokshi-85e16a82406f40eaa48235eaf8129a6c",
          // },
        ],
        paragraph:
          <p>For the past five years, McMaster University – specifically the McMaster Engineering Society – has proudly hosted the Annual Leadership Development Conference. A conference providing upcoming engineering students the opportunity to acquire valuable skills, network and participate in discussions with professionals in the industry. <br /> <br />

          With the immense success in the previous year, and as the Lead Website Developer (and the Co-Chair of this committee) I took it upon myself to create a dynamic and responsive website to advertise the advantages of attending this conference for a McMaster University student union of over 5000 individuals. <br /><br />
          
          My role included the development of the LDC Website from the ground up. Created using React and Tailwind, I utilized various techniques to ensure the site was user-friendly. For example, using React Routing to create a seamless multi-page experience; integrating responsive design using TailwindCSS to ensure the site performed well across various devices; and utilizing React’s reusable components to streamline the development process and ensure consistency across the site. <br /><br />
          
          Additionally, I used Figma to craft the UI/UX design from scratch. This includes custom ‘LDC’ theme designs that reflect the branding of the McMaster Engineering Society (specifically, Leadership Development Conference), with a professional aesthetic that appeals to the target audience of students and sponsors. <br /><br />
          
          Finally… 
          Nevermind! I won’t bore you more; however, if you would like to see my full development process, struggles, and what else I have accomplished with the creation of the Leadership Development Conference Committee website, then please visit my portfolio which will be updated soon! 
          </p>
      },
    },
    {
      img: SesLogo,
      title: "Wesite Developer",
      company: "Software Engineering Society",
      skills: ["Tailwind", "Astro", 'UI/UX'],
      date: "April 2024 - Present",
      loc: "McMaster University",
      description: {
        title: "Website Developer",
        company: "Software Engineering Society",
        skills: ["React", "Tailwind", "UI/UX"],
        linksToView: [
          {
            name: "Github",
            url: "https://github.com/McMaster-Software-Engineering-Society/SES-Website",
          },
        ],
        paragraph: <p>As a website developer for McMaster’s Software Engineering Society (SES), I assisted the Web Developer Lead in producing SES’s high-performance and dynamic website using React, TailwindCSS, AstroJS, and MDX for an engineering student union of over 5,000 students. I also researched various UI/UX components on platforms such as Dribbble and Behance, using them as inspiration to create custom designs from scratch, tailored specifically for the SES website.</p>
    },
    },
    {
      img: MesLogo,
      title: "Leadership Dev. Conference Committee Co-Chair",
      company: "McMaster Engineernig Society",
      skills: ["Leadership", "Teamwork"],
      date: "April 2024 - Present",
      loc: "McMaster University",
      description: {
        title: "Leadership Development Conference Committee Co-Chair ",
        company: "McMaster Engineering Society",
        skills: ["React", "Tailwind", "UI/UX"],
        linksToView: [
          {
            name: "LDC Website",
            url: "https://macengldc.netlify.app",
          },
          {
            name: "MES Website",
            url: "https://macengsociety.ca",
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
        skills: ["Communication", "Customer Service", "Time Management", "Tours"],
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
            <p>As a Residence Ambassador for McMaster University, my role was to inform prospective students and their parents/relatives about the numerous advantages of living on campus during their first year, using my own room as an example. I conducted more than fifty informative residence tours, engaging with over 500 students.
            Throughout this role, I continually honed my communication and interpersonal skills, adeptly answering a wide range of questions about campus life and tailoring each tour to align with the specific interests of each prospective student. 
            <br/> <br/>
            This personalized approach created a more welcoming experience for all participants.
            I worked as a Residence Ambassador during the first year of my engineering program at McMaster University. This experience taught me the importance of time management and enhanced my ability to manage multiple commitments – as I was able to successfully juggle my academic responsibilities with my part-time job. 
            </p>      
        },
    },
    {
      img: ScitechLogo,
      title: "Teaching Assistant",
      company: "TA of Math Dept.",
      skills: ["Math", "Scratch Coding"],
      date: "September 2022 - January 2023",
      loc: "Chinguacousy Secondary School",
      description: {
        title: "Teaching Assistant of Grade 9-10 Math Department",
        company: "Chinguacousy S.S. Math Department",
        skills: ["Math", "Scratch Coding", "Communication"],
        linksToView: [
        ],
        paragraph:
          <p>As the Teaching Assistant for the grade 9/10 math department at Chinguacousy Secondary School, I assisted the teacher in carrying out instructions, marked tests, and worked closely with 25+ students to help them understand the provided material with greater efficiency. My role was ensuring that students remained focused during lessons and supported students one-on-one with clarifying any concepts when needed. <br/> <br/> 

          Additionally, during my spare period over the course of four months, I collaborated with a teacher and a grade 9 class in assisting them with various curriculum concepts and Scratch Coding to demonstrate the practical applications of what they were learning. <br/> <br/> 
          
          I also led additional support classes with students during lunchtime, assisting an average of 10-12 students with assignments and clarifying concepts.  <br/> <br/> 
          
          This role taught me immensely on the importance of effective communication and patience. 
          </p>
      },
    },
    {
      img: BCHospital,
      title: "Hopspital Volunteer",
      company: "Brampton Civic Hospital",
      skills: ["Customer Service",],
      date: "August 2022 - January 2023",
      loc: "Brampton Civic Hopsital - William Osler",
      description: {
        title: "Brampton Civic Hopsital Volunteer",
        company: "Brampton Civic Hospital",
        skills: ["Customer Service", "Communication", "Compassion"],
        linksToView: [
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
      loc: "Brampton, ON",
      description: {
        title: "Pharmacy Assistant (Co-op)",
        company: "Shoppers Drug Mart - Pharmacy",
        skills: ["Customer Service", "Teamwork", "Time Management", "Patience"],
        linksToView: [
        ],
        paragraph:
            "Stay tuned for updates!",      
    },
    },
    {
      img: ChingLogo,
      title: "Dedicated MC/Host",
      company: "Chinguacousy S.S.",
      skills: ["Public Speaking", "Leadership"],
      date: "September 2021 - June 2023",
      loc: "Chinguacousy Secondary School",
      description: {
        title: "Dedicated MC/Host",
        company: "Chinguacousy S.S. - Athletic Council MC; Grade 9 Orientation Host; Take your Kids to Work Day Host, Prom MC",
        skills: ["Public Speaking", "Leadership"],
        linksToView: [
        ],
        paragraph:
          "Stay tuned for updates!",
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
        title: "Vaccination Clinic Volunteer",
        company: "Peel Region Vaccine Clinic",
        skills: ["Customer Service", "Teamwork"],
        linksToView: [
        ],
        paragraph:
        "Stay tuned for updates!",
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
        title: "President/Chairman",
        company: "Student Athletic Council - Chinguacousy S.S.",
        skills: ["Customer Service", "Teamwork"],
        linksToView: [
        ],
        paragraph:
        "Stay tuned for updates!",
      },
    },
    {
      img: ScitechLogo,
      title: "SciTech Regional Program + Health & Wellness SHSM",
      company: "Chinguacousy S.S.",
      skills: ["SciTech", "SHSM"],
      date: "September 2019 - June 2023",
      loc: "Chinguacousy Secondary School",
      description: {
        title: "SciTech Regional Program + Health & Wellness SHSM",
        company: "Chinguacousy Secondary School",
        skills: ["SciTech", "SHSM"],
        linksToView: [
        ],
        paragraph:
          <p>Stay tuned for updates!</p>
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
                <div className="flex gap-4 border-b w-full pb-6 items-center border-slate-800">
                  <img
                    src={selectedExperience.img}
                    alt="company logo"
                    className="w-[250px] h-[250px] rounded-t-xl hidden md:flex select-none"
                  />
                  <div className="flex flex-col md:px-5 justify-center gap-3">
                    <h2 className="font-thin text-xl ">
                      Experience Information
                    </h2>
                    <h1 className="font-bold tracking-wide text-2xl py-1 text-slate-300">
                      {selectedExperience.description.title}
                    </h1>
                    <h1 className="font-extrabold gap-2 text-slate-300">
                      {selectedExperience.description.company}
                    </h1>
                    <p className="font-thin italic text-sm">
                      {selectedExperience.loc}
                    </p>
                    <p className="font-thin italic text-sm">
                      {selectedExperience.date}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.description.skills.map((skill, index) => (
                        <p
                          key={index}
                          className="text-xs font-semibold text-blue-400 px-2 py-1 bg-slate-800 rounded-full"
                        >
                          {skill}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
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
                <p className="py-4 pb-8 text-slate-400 leading-relaxed text-md">
                  {selectedExperience.description.paragraph }
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

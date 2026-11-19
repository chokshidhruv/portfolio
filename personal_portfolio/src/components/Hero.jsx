import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-scroll";
import fullImage from "../assets/full.png";
import bottomImage from "../assets/Intersect.png";

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/chokshidhruv", Icon: FaGithub },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/chokshidhruv/", Icon: FaLinkedin },
  { name: "Email", url: "mailto:chokshid@mcmaster.ca", Icon: MdEmail },
];

const ease = [0.16, 1, 0.3, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

const Hero = () => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "60%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "140%"]);

  return (
    <header
      ref={ref}
      id="home"
      className="relative grid h-[100svh] min-h-[560px] select-none place-items-center overflow-hidden px-6"
    >
      <div className="-mt-[22vh] flex flex-col items-center text-center">
      <motion.div style={{ y: textY }} className="relative z-10 flex flex-col items-center">
        <motion.p {...rise(0.1)} className="text-base font-semibold uppercase tracking-[0.2em] text-blue-300 md:text-lg">
          Hello! I&apos;m
        </motion.p>
        <motion.h1
          {...rise(0.2)}
          className="pt-3 text-6xl font-bold tracking-tight text-blue-400 [text-wrap:balance] md:text-8xl"
        >
          Dhruv Chokshi
        </motion.h1>
        <motion.p {...rise(0.32)} className="pt-5 text-lg font-medium text-slate-300 md:text-2xl">
          Software Engineering Intern <span className="text-blue-300">@ Wealthsimple</span>
        </motion.p>

      </motion.div>
        <motion.div {...rise(0.45)} className="relative z-30 flex items-center gap-3 pt-10">
          {socialLinks.map(({ name, url, Icon }) => (
            <a
              key={name}
              href={url}
              target={url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={name}
              className="grid size-12 place-items-center rounded-full border border-blue-400/40 bg-slate-950/40 text-xl text-blue-300 backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-400 hover:text-slate-950"
            >
              <Icon />
            </a>
          ))}
        </motion.div>
      </div>

      <Link
        to="about-me"
        smooth
        duration={750}
        offset={-40}
        href="#about-me"
        aria-label="Scroll to About"
        className="absolute bottom-10 z-30 grid size-12 cursor-pointer place-items-center rounded-full text-2xl text-blue-300 transition-colors hover:text-blue-200 motion-safe:animate-bounce"
      >
        <IoIosArrowDown />
      </Link>

      <motion.img
        style={{ y: backgroundY }}
        src={fullImage}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute inset-0 z-0 h-full w-full object-cover object-bottom"
      />
      <img
        src={bottomImage}
        alt=""
        aria-hidden="true"
        draggable="false"
        className="absolute inset-0 z-20 h-full w-full object-cover object-bottom"
      />
    </header>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { FaCss3Alt as CSS } from "react-icons/fa";
import { FaHtml5 as HTML } from "react-icons/fa";
import { IoLogoJavascript as JS } from "react-icons/io5";
import { FaPython as Python} from "react-icons/fa";
import { TbBrandCpp as CPP } from "react-icons/tb";
import { FaJava as Java} from "react-icons/fa";
import { FaReact as ReactIcon } from "react-icons/fa";
import { RiTailwindCssFill as Tailwind } from "react-icons/ri";
import { FaNodeJs as Nodejs } from "react-icons/fa";
import { FaBootstrap as Bootstrap } from "react-icons/fa";
import { SiNumpy as Numpy } from "react-icons/si";
import { FiFramer as Framer } from "react-icons/fi";
import { DiJqueryLogo as Jquery} from "react-icons/di";
import { SiVisualstudiocode as VSCode} from "react-icons/si";
import { DiVisualstudio as VS} from "react-icons/di";
import { SiPycharm as Pycharm} from "react-icons/si";
import { SiIntellijidea as IntelliJ} from "react-icons/si";
import { DiEclipse as Eclipse } from "react-icons/di";
import { SiJupyter as Jyputer} from "react-icons/si";
import { SiSpyderide as Spyder} from "react-icons/si";
import { FaGitAlt as Git } from "react-icons/fa";
import { FaGithub as Github} from "react-icons/fa";
import { IoLogoFirebase as Firebase} from "react-icons/io5";
import { FaLinux as Linux} from "react-icons/fa";
import { FaWindows as Windows} from "react-icons/fa";
import { SiMicrosoftexcel as Excel} from "react-icons/si";
import { PiMicrosoftPowerpointLogoFill as PPT } from "react-icons/pi";
import { PiMicrosoftWordLogo as Word} from "react-icons/pi";
import { SiArduino as Arduino} from "react-icons/si";


const Languages = [
    { Icon: CSS, alt: 'CSS' },
    { Icon: HTML, alt: 'HTML' },
    { Icon: JS, alt: 'JS' },
    { Icon: Python, alt: 'Python' },
    { Icon: CPP, alt: 'CPP' },
    { Icon: Java, alt: 'Java' },
];

const FramLib = [
    { Icon: ReactIcon, alt: 'React' },
    { Icon: Tailwind, alt: 'Tailwind' },
    { Icon: Nodejs, alt: 'Nodejs' },
    { Icon: Bootstrap, alt: 'Bootstrap' },
    { Icon: Numpy, alt: 'Numpy' },
    { Icon: Framer, alt: 'Framer' },
    { Icon: Jquery, alt: 'Jquery' },

]

const IDE = [
    { Icon: VSCode, alt: 'VSCode' },
    { Icon: VS, alt: 'VS' },
    { Icon: Pycharm, alt: 'Pycharm' },
    { Icon: IntelliJ, alt: 'IntelliJ' },
    { Icon: Eclipse, alt: 'Eclipse' },
    { Icon: Spyder, alt: 'Spyder' },
    { Icon: Jyputer, alt: 'Jyputer' },

]

const Other = [
    { Icon: Git, alt: 'Git' },
    { Icon: Github, alt: 'Github' },
    { Icon: Firebase, alt: 'Firebase' },
    { Icon: Linux, alt: 'Linux' },
    { Icon: Windows, alt: 'Windows' },
    { Icon: Excel, alt: 'Excel' },
    { Icon: PPT, alt: 'Powerpoint' },
    { Icon: Word, alt: 'Word' },
    { Icon: Arduino, alt: 'Arduino' },

]

const iconVariant = (duration) => ({
        
    hidden:{
        y: 0,
        opacity: 0,
        scale: 1,
        x: -500,
    },
    hiddenOpp:{
        y: 0,
        opacity: 0,
        scale: 1,
        x: 500,
    },
    hiddenY:{
        y: -500,
        opacity: 0,
    },
    visible:{
        y: 0,
        opacity: 1,
        transition: {
            duration
        },
        scale: 1,
        x:0
    }

  })

const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center px-10 gap-4 pt-10 pb-16">
            <div className="flex w-full max-w-screen-xl justify-between border-b border-slate-800"> 
                <motion.h1 className="md:text-5xl text-3xl font-bold text-slate-400" variants={iconVariant(1/3)} initial={'hidden'} animate={'visible'}><span className="text-blue-400">My</span> Skills</motion.h1>
            </div>

            <div className="grid place-items-start lg:flex w-full max-w-screen-lg py-5 items-center mt-10 gap-4 px-4 bg-slate-900 opacity-75 rounded-xl border-slate-800">
                <p className="sm:text-2xl text-xl font-semibold text-slate-400">Languages:</p>
                <div whileHover={{scale: 1.05}} whileTap={{scale: 1.00}} className="grid grid-cols-5 xs:grid-cols-9 md:grid-cols-8 md:flex gap-5 sm:gap-10 place-items-center text-center justify-center ">
                    {Languages.map((lang, index) => {
                        const Icon = lang.Icon;
                        return (
                            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} className='select-none'><Icon key={index} className="text-4xl flex font-normal text-blue-400" /></motion.div>
                        )
                    })}
                </div>
            </div>

            <div className="grid place-items-start lg:flex w-full max-w-screen-lg py-5 gap-4 px-4 items-center bg-slate-900 opacity-75 rounded-xl border-slate-800">
                <p className="sm:text-2xl text-xl font-semibold text-slate-400">Frameworks/Libraries:</p>
                <div className="grid grid-cols-5 xs:grid-cols-9 md:flex gap-5 sm:gap-10 place-items-center text-center justify-center">
                    {FramLib.map((framlib, index) => {
                        const Icon = framlib.Icon;
                        return (
                            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} className='select-none'><Icon key={index} className="text-4xl flex font-normal text-blue-400" /></motion.div>
                        )
                    })}
                </div>
            </div>

            <div className="grid place-items-start lg:flex w-full max-w-screen-lg py-5 gap-4 px-4 items-center bg-slate-900 opacity-75 rounded-xl border-slate-800">
                <p className="sm:text-2xl text-xl font-semibold text-slate-400">IDE:</p>
                <div className="grid grid-cols-5 xs:grid-cols-9 md:flex gap-5 sm:gap-10 place-items-center text-center justify-center">
                    {IDE.map((ide, index) => {
                        const Icon = ide.Icon;
                        return (
                            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} className='select-none'><Icon key={index} className="text-4xl flex font-normal text-blue-400" /></motion.div>
                        )
                    })}
                </div>
            </div>

            <div className="grid place-items-start lg:flex w-full max-w-screen-lg py-5 gap-4 px-4 items-center bg-slate-900 opacity-75 rounded-xl border-slate-800">
                <p className="sm:text-2xl text-xl font-semibold text-slate-400">Other:</p>
                <div className="grid grid-cols-5 xs:grid-cols-9 md:flex gap-5 sm:gap-10 place-items-center text-center justify-center">
                    {Other.map((other, index) => {
                        const Icon = other.Icon;
                        return (
                            <motion.div whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} className='select-none'><Icon key={index} className="text-4xl flex font-normal text-blue-400" /></motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;

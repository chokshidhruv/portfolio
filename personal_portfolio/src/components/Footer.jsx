import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
import Logo from '/public/logo-dhruv.png'

const Footer = () => {

    return (
        <footer className="w-full bg-gradient-to-b border-t border-slate-900 from-slate-950 to-slate-900 py-10 z-[9999] px-10">
            <div className="flex flex-col items-center text-sm text-center">
                <Link to={'home'} activeClass="active" smooth={true} spy={true} duration={1000} offset={0} className='text-slate-400 uppercase tracking-wider font-normal select-none text-[1rem]' href="#home" >Dhruv <span className='text-blue-400 font-bold tracking-wider cursor-pointer hover:font-extrabold hover:text-blue-500 active:text-blue-400 transition-[0.1]'> Chokshi</span></Link>

        

                <div className='flex justify-center items-center pt-2 md:gap-6'>
                    <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 1.00}}  className=" text-slate-400 font-semibold tracking-wide p-2 z-40 text-md cursor-pointer"><Link to={'about-me'} activeClass="active" smooth={true} spy={true} duration={1000} offset={-55}>About</Link></motion.a>
                    <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 1.00}}  className=" text-slate-400 font-semibold tracking-wide p-2 z-40 text-md cursor-pointer"><Link to={'experiences'} activeClass="active" smooth={true} spy={true} duration={1000} offset={-55}>Experience</Link></motion.a>
                    <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 1.00}}  className=" text-slate-400 font-semibold tracking-wide p-2 z-40 text-md cursor-pointer"><Link to={'projects'} activeClass="active" smooth={true} spy={true} duration={1000} offset={-55}>Project</Link></motion.a>
                    <motion.a whileHover={{scale: 1.05}} whileTap={{scale: 1.00}}  className=" text-slate-400 font-semibold tracking-wide p-2 z-40 text-md cursor-pointer"><Link to={'contact'} activeClass="active" smooth={true} spy={true} duration={1000} offset={-55}>Contact</Link></motion.a>
                </div>

                <div className='flex justify-center gap-2 md:gap-4 py-2'>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><FaGithub /></motion.a>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><FaInstagram /></motion.a>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><FaLinkedin /></motion.a>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><MdEmail /></motion.a>
                </div>

                <img src={Logo} alt="Dhruv Logo" className="w-52 h-36 select-none"></img>

                <div className="py-1 pb-2">
                    <span className="text-xs text-slate-500">Handmade with React, Tailwind & Framer</span>
                </div>

                <p className="text-center text-xs text-slate-400">
                    Copyright © {new Date().getFullYear()} Dhruv Chokshi
                </p>

            </div>
        </footer>
    )
}

export default Footer;

import { useRef } from 'react'
import React from 'react'
import { motion, useScroll, useTransform } from "framer-motion"
import fullImage from '../assets/full.png'
import bottomImage from '../assets/Intersect.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-scroll'


const Hero = () => {

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({target: ref, offset: ["start start", "end start"]});

    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '170%']);
    const text2Y = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);

    const [click, setClick] = React.useState(false);
    const closeMenu = () => setClick(false);

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
      // <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-blue-400 text-slate-950 font-bold uppercase tracking-wider px-6 py-2 rounded-full z-40">Resume</motion.a>
      // <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-slate-950 border-4 border-blue-400 text-blue-400 font-bold uppercase tracking-wider px-6 py-2 rounded-full z-40">Portfolio</motion.a>

    return (
        <>
        <div ref={ref} className="w-[full] h-screen overflow-hidden relative grid place-items-center px-8 select-none" id='home'>

            <div className='text-center pt-10'>
                <motion.p style={{y: text2Y}} variants={iconVariant(1/3)} initial={'hiddenY'} animate={'visible'} className="font-bold text-xl relative z-10 text-blue-300 uppercase">Hello! I'm </motion.p>
                <motion.h1 style={{y: textY}} className="font-bold text-5xl md:text-8xl relative pb-4 pt-2 z-10" ><span className='text-blue-400' style={{textShadow:' 0rem 0.04rem #f8fcf9'}}
                >Dhruv Chokshi</span></motion.h1>
                <motion.p style={{y: text2Y}} className="font-bold text-xl md:text-2xl relative z-10 mb-24 text-blue-300 uppercase">A Software Engineering Student </motion.p>
                <section className='grid gap-y-4 justify-center'>
                    
                    <motion.div className='flex z-50 text-center items-center justify-center gap-5 mb-8' variants={iconVariant(1/3)} initial={'hidden'} animate={'visible'}>
                        <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-blue-400 text-slate-950 font-bold uppercase tracking-wider p-3 rounded-full z-40 text-xl cursor-pointer" href='#'><FaGithub /></motion.a>
                        <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-blue-400 text-slate-950 font-bold uppercase tracking-wider p-3 rounded-full z-40 text-xl cursor-pointer" target="_blank"><FaInstagram /></motion.a>
                        <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-blue-400 text-slate-950 font-bold uppercase tracking-wider p-3 rounded-full z-40 text-xl cursor-pointer" href="https://www.linkedin.com/in/chokshidhruv/" target='_blank'><FaLinkedin /></motion.a>
                        <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="bg-blue-400 text-slate-950 font-bold uppercase tracking-wider p-3 rounded-full z-40 text-xl cursor-pointer" href='#'><MdEmail /></motion.a>

                    </motion.div>

                </section>
                <div className= 'flex z-50 text-center items-center justify-center p-4'>
                    <Link to="about-me" activeClass="active" smooth={true} spy={true} duration={750} offset={-50} onClick={closeMenu} className="bg-black animate-bounce text-blue-400 font-bold uppercase tracking-wider p-6 text-2xl rounded-full z-40 cursor-pointer"><IoIosArrowDown /></Link>
                </div>

            </div>


            <motion.img style={{y: backgroundY}} src={fullImage} className='w-full h-screen bg-cover bg-bottom inset-0 z-0 absolute' alt="full" />

            <img src={bottomImage} className='w-full h-screen bg-cover bg-bottom inset-0 z-20 absolute' alt="full" />

        </div>
        </>
    );
}

export default Hero;
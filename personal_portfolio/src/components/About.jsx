import React from 'react';
import { motion } from 'framer-motion';
import DhruvImg from '../assets/Dhruv.jpg';
import { AiOutlineExport } from "react-icons/ai";


const About = () => {

    const aboutPar = [
        {
            id: "About Me",
            text: 'Thank you for taking the time to visit my page! My name is Dhruv, I am a software engineering student at McMaster University. I graduated from the Regional SciTech program at Chinguacousy Secondary School, where my passion for influencing positive change through innovation-driven learning grew. At McMaster, I have had the opportunity to apply my skill sets through real-life, project-based learning.'
        },
        {
            id: "Current Endeavours",
            text: 'Currently, I am part of Software Engineering Society and the McMaster Engineering Society where I am putting my Web Dev skills to use!'
        }
    ];

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
      

    return (
        <>
            <main className='grid justify-center text-center bg-gradient-to-b from-black to-slate-950 px-10 pb-16 pt-10 text-sm font-bold text-blue-400'>
                <section className='w-full flex gap-8 justify-between items-center max-w-screen-xl md:px-24 py-10 bg-slate-900 opacity-90 border rounded-xl border-slate-800'>
                    <div className='lg:flex hidden flex-col items-center gap-4'>
                        <img src={DhruvImg} alt='image of me' className='hidden lg:flex rounded-3xl w-80 h-80 border-4  border-blue-300' />
                        <div className='flex justify-center text-center gap-4'>
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href='#' className="bg-blue-400 text-slate-950 font-bold cursor-pointer uppercase tracking-wider flex items-center px-6 py-1 rounded-full text-md z-40">Resume</motion.a>
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href='#' className="bg-slate-950 border-4 border-blue-400 text-blue-400 cursor-pointer font-bold uppercase tracking-wider flex items-center text-mf px-6 py-1 rounded-full z-40">Portfolio</motion.a>
                        </div>
                    </div>
                    <div className='flex flex-col items-center max-w-3xl px-2 ' >
                        <h2 className='text-4xl md:text-6xl pb-3'><span className='text-slate-400 '>About </span>Me</h2>
                        {
                            aboutPar.map((par) => {
                                return(
                                    <p key={aboutPar} className='font-thin text-[1rem] tracking-wider pt-6 leading-6 text-slate-400'>{par.text}</p>
                                )

                            })
                        }   
                        <div className='flex lg:hidden justify-center text-center gap-4 mt-8'>
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href='#' className="bg-blue-400 text-slate-950 font-bold cursor-pointer uppercase tracking-wider flex items-center px-6 py-1 rounded-full text-md z-40">Resume</motion.a>
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} href='#' className="bg-slate-950 border-4 border-blue-400 text-blue-400 cursor-pointer font-bold uppercase tracking-wider flex items-center text-mf px-6 py-1 rounded-full z-40">Portfolio</motion.a>
                        </div>
                    </div>
                
                </section>
                <section className='inline-block justify-center md:inline-flex text-center mt-[-10px] mb-[10px]'>
                        <div className='w-full text-center items-start grid justify-center py-8 mt-2 border rounded-xl opacity-75 border-slate-900'>
                            <p className='text-xl font-semibold text-blue-400'>Education</p>
                            <p className='text-lg font-normal px-3 pt-3 text-slate-400'>McMaster University, BEng in Software Engineering (Co-op)</p>
                        </div>
                        <div className='w-full text-center grid items-start justify-center py-8 mt-2 border opacity-75 rounded-xl border-slate-900'>
                            <p className='text-xl font-semibold text-blue-400'>Current cGPA</p>
                            <p className='text-lg font-normal pt-3 text-slate-400'>10.5/12 (3.90/4.00)</p>
                        </div>
                        <div className='w-full text-center grid items-start justify-center py-8 mt-2 border opacity-75 rounded-xl border-slate-900'>
                            <p className='text-xl font-semibold text-blue-400'>Relevant Coursework</p>
                            <p className='text-lg font-normal pt-3 text-slate-400'>View All My Completed Courses!</p>
                            <a className='text-xl items-center flex justify-center py-3 hover:text-blue-500 cursor-pointer' href='#' ><AiOutlineExport /></a>
                        </div>

                    </section>
            </main>
        </>
    );
}

export default About;
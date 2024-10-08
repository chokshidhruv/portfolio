import { motion } from 'framer-motion';
import DhruvImg from '../assets/Dhruv.jpg';
import { AiOutlineExport } from "react-icons/ai";


const About = () => {

    const aboutPar = [
        {
            id: "About Me",
            text: <p>Welcome to my website, where I hope you’ll take some time to learn more about me! I’m Dhruv, a Software Engineering student at McMaster University – passionate about technology, sports, and making a positive impact. 
            <br/><br/>
            My journey began in the Regional SciTech program at Chinguacousy Secondary School, where I discovered my love for influencing change through innovation-driven learning. That passion has only grown here at McMaster, where I’m applying my skills through project-based learning. But beyond tech, my motivation is to help others. During high school, I spent a significant amount of my time volunteering at my local hospital, vaccine clinics, and pharmacies – driven by my sole desire to make a difference in my community.
            <br/><br/>
            In the end, my goal is to connect programming with meaningful solutions that elicit a genuine difference in my community. I’m always looking for new opportunities to learn and grow, and I’m excited to see where my journey takes me next!
            <br/><br/>
            If you’re interested in working together, I’m currently looking for a 4-month or a 12-month internship/co-op, please feel free to reach out!
            </p>
        },
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
                        <img src={DhruvImg} alt='image of me' className='hidden lg:flex rounded-3xl w-80 h-80 border-4  border-blue-400' />
                        <div className='flex justify-center text-center gap-4'>
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} target='_blank' href='https://drive.google.com/file/d/1I-XB7Vlz9NEpZIwi27-XpDDtJs83VUiy/view?usp=sharing' className="bg-blue-400 text-slate-950 font-bold cursor-pointer uppercase tracking-wider flex items-center px-6 py-1 rounded-full text-md z-40">Resume</motion.a>
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} target='_blank' href='https://www.notion.so/Dhruv-Chokshi-85e16a82406f40eaa48235eaf8129a6c' className="bg-slate-950 border-4 border-blue-400 text-blue-400 cursor-pointer font-bold uppercase tracking-wider flex items-center text-mf px-6 py-1 rounded-full z-40">Portfolio</motion.a>
                        </div>
                    </div>
                    <div className='flex flex-col items-center max-w-3xl px-2 ' >
                        <h2 className='text-4xl md:text-5xl pb-3'><span className='text-slate-400 '>About </span>Me</h2>
                        {
                            aboutPar.map((par) => {
                                return(
                                    <p key={aboutPar} className='font-thin text-[1rem] tracking-wider pt-6 leading-6 text-slate-400'>{par.text}</p>
                                )

                            })
                        }   
                        <div className='flex lg:hidden justify-center text-center gap-4 mt-8'>
                            
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} target='_blank' href='https://drive.google.com/file/d/1I-XB7Vlz9NEpZIwi27-XpDDtJs83VUiy/view?usp=sharing' className="bg-blue-400 text-slate-950 font-bold cursor-pointer uppercase tracking-wider flex items-center px-6 py-1 rounded-full text-md z-40">Resume</motion.a>
                            <motion.a variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} target='_blank' href='https://www.notion.so/Dhruv-Chokshi-85e16a82406f40eaa48235eaf8129a6c' className="bg-slate-950 border-4 border-blue-400 text-blue-400 cursor-pointer font-bold uppercase tracking-wider flex items-center text-mf px-6 py-1 rounded-full z-40">Portfolio</motion.a>
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
                            <p className='text-lg font-normal px-3 pt-3 text-slate-400'>10.4/12 (3.80/4.00)</p>
                        </div>
                        <div className='w-full text-center grid items-start justify-center py-8 mt-2 border opacity-75 rounded-xl border-slate-900'>
                            <p className='text-xl font-semibold text-blue-400'>Relevant Coursework</p>
                            <p className='text-lg font-normal px-3 pt-3 text-slate-400'>View All My Completed Courses </p>
                            <a className='text-xl items-center flex justify-center py-3 hover:text-blue-500 cursor-pointer' href='https://drive.google.com/file/d/15U-hDd4Tol7TwR23BM2CLW7jvYge91YS/view?usp=sharing' ><AiOutlineExport /></a>
                        </div>

                    </section>
            </main>
        </>
    );
}

export default About;
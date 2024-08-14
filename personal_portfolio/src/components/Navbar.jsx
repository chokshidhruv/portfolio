import React from 'react'
import { motion } from "framer-motion"
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-scroll'
import Headroom from 'react-headroom';

const Navbar = () => { 

    const [open, setOpen] = React.useState(false);

    const navItems = [
        {
            id: 'About-me', 
            title: <h1>About Me</h1>,
            link: 'about-me'
        },
        {
            id: 'Experiences', 
            title: <h1>Experience</h1>,
            link: 'experiences'
        },
        {
            id: 'Projects', 
            title: <h1>Projects</h1>,
            link: 'projects'
        },
        {
            id: 'Resume', 
            title: <h1>Resume</h1>,
            link: 'resume'
        }
    ]

    const iconVariant = (duration) => ({
        
        hidden:{
            y: 40,
            opacity: 0,
            scale: 0.5
        },
        visible:{
            y: 0,
            opacity: 1,
            transition: {
                duration
            },
            scale: 1.05,
        }

      })


    const menuDrawer = {
        opened: {
            top: "100vh",
            width: '100%',
            height: '100%',
            transition: {
                duration: 0
            },
        },
        
        closed: {
            x: -100,
            top: '100%',
            width: '100%',
            height: '0%',
            display: 'none',
            transition: {
                duration: 0
            },
            
            // zIndex: -1,
        }
    }

    const [click, setClick] = React.useState(false); 
    const closeMenu = () => setClick(false);

      return (
        <Headroom><header className='flex justify-center shadow-md shadow-slate-900'>
            <section className='flex flex-col justify-between px-10 py-8 bg-slate-950 z-[999] w-full items-center'>
                <div className='flex justify-between max-w-screen-2xl w-full z-500 items-center'>

                    <motion.h1 className='text-slate-300 uppercase tracking-wider font-normal select-none' variants={iconVariant(1/4)} initial="hidden" animate="visible" href="#home" >Dhruv 
                    <Link to={'home'} activeClass="active" smooth={true} spy={true} duration={1000} offset={0} onClick={closeMenu} className='text-blue-300 font-bold tracking-wider cursor-pointer hover:font-extrabold hover:text-blue-400 active:text-sky-500 transition-[0.1]'> Chokshi</Link></motion.h1>
                
                    <ul className="md:flex gap-7 hidden">
                    {
                        navItems.map((item, i) => (
                            <motion.li className="text-slate-300 font-medium hover:text-slate-400 active:text-slate-500 transition-[0.1]" key={item.id} variants={iconVariant(i/10)} initial="hidden" animate="visible" >
                            {/* <a href={item.link}> {item.title}</a> */}
                            <Link to={item.link} activeClass="active" smooth={true} spy={true} duration={1000} offset={-100} onClick={closeMenu} className='cursor-pointer select-none'>{item.title}</Link>
                            </motion.li>
                        ))
                    }
                    </ul>

                    <motion.button className="flex md:hidden text-2xl" initial={true} animate={open ? 'opened' : 'closed'} onClick={() => setOpen((open) => !open)}><IoMenu /></motion.button>

                </div>

                <motion.div className='pt-6 justify-between max-w-screen-2xl w-full items-end flex' variants={menuDrawer} initial={true} animate={open ? 'opened' : 'closed'}>
                        <motion.ul className=" flex-col justify-start flex text-left">
                        {
                            navItems.map((item, i) => (
                                <motion.li className="text-slate-300 font-medium py-2 hover:text-slate-400 active:text-slate-500" key={item.id} variants={iconVariant(i/3)} initial="hidden" animate="visible" >
                                {/* <a href={item.link}> {item.title}</a> */}
                                <Link to={item.link} activeClass="active" smooth={true} spy={true} duration={1000} offset={50} onClick={closeMenu} className='cursor-pointer select-none'>{item.title}</Link>
                                </motion.li>
                            ))
                        }
                        </motion.ul>
                </motion.div>
             </section>
        
        </header></Headroom>
      )

}

export default Navbar
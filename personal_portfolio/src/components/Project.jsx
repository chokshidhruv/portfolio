import React from 'react'
import Dhruv from '../assets/Dhruv.jpg'
import { motion } from 'framer-motion'
import Modal from './Modal'
import full from '../assets/full.png'

const Projects = () => {

    const experienceList = [
        {
            img: full,
            title: 'Software Engineering Intern',
            company: 'inc',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year',
            description: {
                title: 'Software Engineering Intern',
                company: 'inc',
                date: 'Month Year - Month Year',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://Google.ca'
                    },
                    {
                        name: 'Github',
                        url: 'https://Google.ca'
                    }
                ],
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
            },
        },
        {
            img: full,
            title: 'Software Engineering Intern',
            company: 'inc',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year',
            description: {
                title: 'Software Engineering Intern',
                company: 'inc',
                date: 'Month Year - Month Year',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://Google.ca'
                    },
                    {
                        name: 'Github',
                        url: 'https://Google.ca'
                    }
                ],
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
            },
        },
        {
            img: full,
            title: 'Software Engineering Intern',
            company: 'inc',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year',
            description: {
                title: 'Software Engineering Intern',
                company: 'inc',
                date: 'Month Year - Month Year',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://Google.ca'
                    },
                    {
                        name: 'Github',
                        url: 'https://Google.ca'
                    }
                ],
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
            },
        },
        {
            img: full,
            title: 'Software Engineering Intern',
            company: 'inc',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year',
            description: {
                title: 'Software Engineering Intern',
                company: 'inc',
                date: 'Month Year - Month Year',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://Google.ca'
                    },
                    {
                        name: 'Github',
                        url: 'https://Google.ca'
                    }
                ],
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
            },
        },
        {
            img: full,
            title: 'Software Engineering Intern',
            company: 'inc',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year',
            description: {
                title: 'Software Engineering Intern',
                company: 'inc',
                date: 'Month Year - Month Year',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://Google.ca'
                    },
                    {
                        name: 'Github',
                        url: 'https://Google.ca'
                    }
                ],
                paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
            },
        },
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

    const [selectedExperience, setSelectedExperience] = React.useState(null);

    const openModal = (exp) => {
        setSelectedExperience(exp);
    }

    const closeModal = () => {
        setSelectedExperience(null);
    }

        // Use effect to handle body scroll
        React.useEffect(() => {
            if (selectedExperience) {
                // Disable scrolling
                document.body.style.overflow = 'hidden';
            } else {
                // Re-enable scrolling
                document.body.style.overflow = 'auto';
            }
    
            // Cleanup when component unmounts
            return () => {
                document.body.style.overflow = 'auto';
            }
        }, [selectedExperience]);

    return (
        <>
            <main className='flex justify-center p-10 pb-16'>
                <section className='flex-col flex max-w-screen-xl w-full items-center'>
                    <motion.h1 variants={iconVariant(1/3)} initial={'hidden'} animate={'visible'} className='text-3xl md:text-5xl font-bold text-slate-400 border-b border-slate-800 w-full'><span className='text-blue-400'>My</span> Projects</motion.h1>
                    
                    <motion.div variants={iconVariant(1/3)} initial={'hiddenOpp'} animate={'visible'} className='grid grid-cols-1 min-[450px]:grid-cols-2 max-w-screen-lg md:grid-cols-4 gap-2 pt-14' >
                        {
                            experienceList.map((exp, index) => (
                                <div key={index} className='p-2 cursor-pointer'>
                                    <motion.div 
                                        whileHover={{ scale: 1.05 }} 
                                        whileTap={{ scale: 0.95 }} 
                                        className='bg-slate-900 pb-3 pt-3 border border-gray-800 rounded-lg text-start h-full flex flex-col justify-between'
                                        style={{
                                            boxShadow: '5px 5px 10px 0px rgb(15, 23, 42)',
                                            borderRadius: '1rem',
                                        }}
                                        onClick={() => openModal(exp)}
                                    >
                                        <img src={exp.img} alt='company logo' className='px-3 w-full h-60 rounded-t-xl'/>
                                        <p className='text-xl font-bold text-slate-400 px-4 w-full h-10 pt-3'>{exp.company}</p>
                                        <p className='text-sm font-semibold text-slate-500 px-4 py-2'>{exp.title}</p>
                                        <p className='text-xs font-semibold text-slate-500 italic px-4'>{exp.date}</p>
                                        <div className='flex justify-start px-3 pt-5 gap-2'>
                                            {
                                                exp.skills.map((skill) => (
                                                    <p key={skill} className='hidden lg:block text-xs font-semibold text-blue-400 px-2 py-1 bg-slate-800 rounded-full'>{skill}</p>
                                                ))
                                            }
                                        </div>
                                    </motion.div>
                                </div>
                            ))
                        }
                    </motion.div>

                    {selectedExperience && (
                        <Modal isVisible={true} onClose={closeModal}>
                            <section className='flex flex-col items-start px-10 text-slate-400'>
                                <div className='flex gap-2 border-b w-full pb-6 border-slate-800'>
                                    <img src={selectedExperience.img} alt='company logo' className='w-[250px] h-[250px] rounded-t-xl hidden md:flex'/>
                                    <div className='flex flex-col px-10'>
                                        <h2 className='font-thin text-xl '>Project Information</h2>
                                        <h1 className='font-bold tracking-wide pt-5 text-2xl text-slate-300'>{selectedExperience.description.title}</h1>
                                        <h1 className='font-extrabold py-4 text-slate-300'>{selectedExperience.description.company}</h1>
                                        <p className='font-thin italic text-sm'>{selectedExperience.description.date}</p>
                                        
                                        <div className='flex flex-wrap gap-2 pt-5'>
                                            {selectedExperience.skills.map((skill, index) => (
                                                <p key={index} className='text-xs font-semibold text-blue-400 px-2 py-1 bg-slate-800 rounded-full'>{skill}</p>
                                            ))}
                                        </div>

                                        <div className='flex flex-wrap gap-2 pt-5'>
                                            {selectedExperience.description.linksToView.map((link, index) => (
                                                <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} key={index} href={link.url} target="_blank" className='cursor:pointer text-sm font-semibold text-slate-950 px-4 py-1 bg-blue-400 rounded-full'>
                                                    {link.name}
                                                </motion.a>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                <p className='py-4 pb-8 text-slate-300'>{selectedExperience.description.paragraph}</p>
                            </section>
                            
                        </Modal>
                    )}

                </section>
            </main>
        </>
    )
}

export default Projects;

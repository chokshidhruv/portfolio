import React from 'react'
import Dhruv from '../assets/Dhruv.jpg'
import { motion } from 'framer-motion'
import Modal from './Modal'
import full from '../assets/full.png'
import DhruvLogo from '../assets/logo-dhruv-2-.jpg'
import EZKart from '../assets/ezkart.png'
import QuickLink from '../assets/quickLink.png'

const Projects = () => {

    const experienceList = [
        {
            img: DhruvLogo,
            title: 'Personal Portfolio Website',
            company: 'Portfolio Website',
            skills: ['React', 'Tailwind', 'Framer'],
            date: '< 1 Month',
            loc: 'dhruvchokshi.co',
            description: {
                title: 'Personal Portfolio Website',
                company: 'Personal Project',
                date: 'August 2024 · < 1 Month',
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
            img: EZKart,
            title: 'Grocery Checklist Web App',
            company: 'EzKart',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: '< 1 Month',
            description: {
                title: 'EzKart',
                company: 'Grocery Checklist Web App',
                date: 'August 2024 · < 1 Month',
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
            img: QuickLink,
            title: 'Save Tabs With Ease',
            company: 'QuickLink',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: '< 1 Month',
            description: {
                title: 'Software Engineering Intern',
                company: 'inc',
                date: 'August 2024 · < 1 Month',
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
            title: 'Note Taking App',
            company: 'Note Taking App',
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
            title: 'Banking App',
            company: 'Bank App',
            skills: ['C++'],
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
            title: 'Web3 E-commerce Website',
            company: 'TrustBloc',
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
            title: 'Project 4 - McMaster U.',
            company: 'Community Impact',
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
            title: 'Project 3 - McMaster U.',
            company: 'Recycling System',
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
            title: 'Project 2 - McMaster U.',
            company: 'Get A Grip',
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
            title: 'Project 1 - McMaster U.',
            company: 'Renewable Technology',
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
            title: 'Data Management Project',
            company: 'Fusion of Fate',
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
            title: 'Tailwind CSS Project',
            company: 'Tailwind',
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

    const [showAll, setShowAll] = React.useState(false);

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
                            experienceList.slice(0, showAll ? experienceList.lenth : 4).map((exp, index) => (
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
                                        <img src={exp.img} alt='company logo' className='px-3 w-full h-72 md:h-56 rounded-t-xl'/>
                                        <p className='text-lg font-bold text-slate-400 px-4 w-full pt-3'>{exp.company}</p>
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
{/* 
                    {experienceList.length > 4 && (
                        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='mt-8 px-4 pt-2 text-blue-400 bg-slate-950 rounded-full font-semibold' onClick={ () => setShowAll(!showAll)}>
                            {showAll ? 'View Less...' : 'View More...'}
                        </motion.button>
                    )} */}

                    {selectedExperience && (
                        <Modal isVisible={true} onClose={closeModal}>
                            <section className='flex flex-col items-start px-10 text-slate-400'>
                                <div className='flex gap-2 border-b w-full pb-6 items-center border-slate-800'>
                                    <img src={selectedExperience.img} alt='company logo' className='w-[250px] h-[250px] rounded-t-xl hidden md:flex'/>
                                    <div className='flex flex-col md:px-5'>
                                        <h2 className='font-thin md:text-xl text-lg'>Project Information</h2>
                                        <h1 className='font-bold tracking-wide pt-2 text-xl md:text-2xl text-slate-300'>{selectedExperience.description.title}</h1>
                                        <h1 className='font-extrabold py-3 text-slate-300'>{selectedExperience.description.company}</h1>
                                        <p className='font-thin italic pb-1 text-sm'>{selectedExperience.loc}</p>
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

import React from 'react'
import Dhruv from '../assets/Dhruv.jpg'
import { motion } from 'framer-motion'
import Modal from './Modal'
import full from '../assets/full.png'
import DhruvLogo from '../assets/logo-dhruv-2-.jpg'
import EZKart from '../assets/ezkart.png'
import QuickLink from '../assets/quickLink.png'
import Qarm from '../assets/QArm.jpg'
import Wind from '../assets/wind.jpg'
import Cards from '../assets/fof.jpg'
import TB from '../assets/tb.png'

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
                    url: 'https://github.com/chokshidhruv/portfolio'
                    },
                    {
                    name: 'Website',
                    url: 'https://dhruvchokshi.co'
                    }
                ],
                paragraph: <p>
                My very own personal portfolio website! A website, I created individually to to showcase my academic and personal achievements. The primary goal of this project was to enhance my skills in React.js and Tailwind CSS while providing an efficient and engaging way for others to learn more about me.
                <br/><br/>
                To limit code changes, my website follows a simple dynamic structure using JavaScript objects to represent each project or experience inside an array. Then, the object is rendered using the map function with the same design for consistency. 
                </p>
            },
        },
        {
            img: EZKart,
            title: 'Grocery Checklist Web App',
            company: 'EzKart',
            skills: ['Javascript', 'Firebase'],
            date: '~ 1 Month',
            description: {
                title: 'EzKart',
                company: 'Grocery Checklist Web App',
                date: 'August 2024 - September 2024',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/portfolio/ezkart'
                    },
                ],
                paragraph: <p>
                EzKart is a mini project created to enable users to manage their personalized shopping cart—similar to a checklist—addressing the common problem of disorganization during shopping. Instead of noting items down on your notes app or a piece of paper, EzKart offers a more streamlined approach. Beyond basic cart management, users can easily save items into their cart and simply tap on the item once they’ve collected it during their shopping trip. Moreover, users are able to share the entire cart with others, making it easier to collaborate on shopping lists. 
                <br/><br/>
                The frontend is built using HTML and Tailwind CSS, ensuring a clean and responsive user interface. Additionally, the back end is powered by JavaScript and utilizes Firebase for data management.
                <br/><br/>
                Stay tuned for more updates as the website is undergoing further updates!
                </p>           
            },
        },
        {
            img: QuickLink,
            title: 'Save Tabs With Ease',
            company: 'QuickLink',
            skills: ['Google API', 'Javascript'],
            date: '< 1 Month',
            description: {
                title: 'QuickLink',
                company: 'Save Tabs With Ease',
                date: 'August 2024 · < 1 Month',
                linksToView: [

                ],
                paragraph: 'Stay tuned for updates!'
            },
        },
        // {
        //     img: full,
        //     title: 'Note Taking App',
        //     company: 'Note Taking App',
        //     skills: ['React', 'Node.js', 'MongoDB'],
        //     date: 'Month Year - Month Year',
        //     description: {
        //         title: 'Software Engineering Intern',
        //         company: 'inc',
        //         date: 'Month Year - Month Year',
        //         linksToView: [
        //             {
        //             name: 'Github',
        //             url: 'https://Google.ca'
        //             },
        //             {
        //                 name: 'Github',
        //                 url: 'https://Google.ca'
        //             }
        //         ],
        //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
        //     },
        // },
        // {
        //     img: full,
        //     title: 'Banking App',
        //     company: 'Bank App',
        //     skills: ['C++'],
        //     date: 'Month Year - Month Year',
        //     description: {
        //         title: 'Software Engineering Intern',
        //         company: 'inc',
        //         date: 'Month Year - Month Year',
        //         linksToView: [
        //             {
        //             name: 'Github',
        //             url: 'https://Google.ca'
        //             },
        //             {
        //                 name: 'Github',
        //                 url: 'https://Google.ca'
        //             }
        //         ],
        //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
        //     },
        // },
        {
            img: TB,
            title: 'Web3 E-commerce Website',
            company: 'TrustBloc',
            skills: ['React', 'Web3'],
            date: '< 1 Month',
            description: {
                title: 'TrustBloc',
                company: 'E-Commerce Website with Web3',
                date: 'Hackathon Project',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/TrustBloc-main'
                    },
                    {
                        name: 'Taikai',
                        url: 'https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwd31uth0d07z901wpajja3t/idea'
                    }
                ],
                paragraph: <p>View full description of the project <a className='text-blue-400 underline' href='https://taikai.network/hackbox/hackathons/hawkhacks/projects/clwd31uth0d07z901wpajja3t/idea'>here!</a></p>
            },
        },
        // {
        //     img: full,
        //     title: 'Project 4 - McMaster U.',
        //     company: 'Community Impact',
        //     skills: ['React', 'Node.js', 'MongoDB'],
        //     date: 'Month Year - Month Year',
        //     description: {
        //         title: 'Software Engineering Intern',
        //         company: 'inc',
        //         date: 'Month Year - Month Year',
        //         linksToView: [
        //             {
        //             name: 'Github',
        //             url: 'https://Google.ca'
        //             },
        //             {
        //                 name: 'Github',
        //                 url: 'https://Google.ca'
        //             }
        //         ],
        //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
        //     },
        // },
        // {
        //     img: full,
        //     title: 'Project 3 - McMaster U.',
        //     company: 'Recycling System',
        //     skills: ['React', 'Node.js', 'MongoDB'],
        //     date: 'Month Year - Month Year',
        //     description: {
        //         title: 'Software Engineering Intern',
        //         company: 'inc',
        //         date: 'Month Year - Month Year',
        //         linksToView: [
        //             {
        //             name: 'Github',
        //             url: 'https://Google.ca'
        //             },
        //             {
        //                 name: 'Github',
        //                 url: 'https://Google.ca'
        //             }
        //         ],
        //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
        //     },
        // },
        {
            img: Qarm,
            title: 'Project 2 - McMaster U.',
            company: 'Get A Grip',
            skills: ['Python', 'Teamwork'],
            date: 'Oct 2023 - Dec 2023',
            description: {
                title: 'Get A Grip',
                company: 'Course Project',
                date: 'Course: Engineering 1P13',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/Get-A-Grip'
                    },
                ],
                paragraph: <p>View full description of the project <a className='text-blue-400 underline' href='https://www.notion.so/PROJECT-2-GET-A-GRIP-2242ece2ebc1443aa0726885e8bf17a1'>here!</a></p>
            },
        },
        {
            img: Wind,
            title: 'Project 1 - McMaster U.',
            company: 'Renewable Technology',
            skills: ['Inventor', 'GrantaEDU'],
            date: 'Sept 2023 - Oct 2023',
            description: {
                title: 'Rewnewable Technology',
                company: 'Course Project',
                date: 'Course: Engineering 1P13',
                linksToView: [
                ],
                paragraph: <p>View full description of the project <a className='text-blue-400 underline' href='https://www.notion.so/PROJECT-1-RENEWABLE-TECHNOLOGY-4120415ac133465c86b1c84a6a104651'>here!</a></p>
            },
        },
        {
            img: Cards,
            title: 'Data Management Project',
            company: 'Fusion of Fate',
            skills: ['Python', 'Data Management'],
            date: 'May 2023 - June 2023',
            description: {
                title: 'Fusion of Fate',
                company: 'Probability Game',
                date: 'Course: Data Management',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/Fusion-of-Fate'
                    },
                ],
                paragraph: 'A project I made for the Data Management course! The project was a probability game where users could play a game of chance. The game was built using Python and was a great way to learn about data management and probability.'
            },
        },
        // {
        //     img: full,
        //     title: 'Tailwind CSS Project',
        //     company: 'Tailwind',
        //     skills: ['React', 'Node.js', 'MongoDB'],
        //     date: 'Month Year - Month Year',
        //     description: {
        //         title: 'Software Engineering Intern',
        //         company: 'inc',
        //         date: 'Month Year - Month Year',
        //         linksToView: [
        //             {
        //             name: 'Github',
        //             url: 'https://Google.ca'
        //             },
        //             {
        //                 name: 'Github',
        //                 url: 'https://Google.ca'
        //             }
        //         ],
        //         paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec nulla ac nisi pellentesque malesuada. Cras nec purus in nisi tincidunt ultricies. Nullam auctor, purus nec aliquet dictum, nunc lorem ultricies est, nec facilisis metus mi ut sapie'
        //     },
        // },
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
                            experienceList.slice(0, showAll ? experienceList.length : 4).map((exp, index) => (
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

                    {experienceList.length > 4 && (
                        <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className='mt-8 px-4 pt-2 text-blue-400 bg-slate-950 rounded-full font-semibold' onClick={ () => setShowAll(!showAll)}>
                            {showAll ? 'View Less...' : 'View More...'}
                        </motion.button>
                    )}

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

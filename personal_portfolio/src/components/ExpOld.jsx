import React from 'react'
import Dhruv from '../assets/Dhruv.jpg'
import { motion } from 'framer-motion'
import Modal from './Modal'

const Experiences = () => {

    //Please do NOT add more than 3 skills :)

    const experienceList = [

        {
            img: Dhruv,
            title: 'Software Engineering Intern',
            company: 'inc',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year'
        },
        {
            img: Dhruv,
            title: 'Software Engineering',
            company: 'RBC',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year'
        },
        {
            img: Dhruv,
            title: 'Software Engineering Intern',
            company: 'fd',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year'
        },
        {
            img: Dhruv,
            title: 'Software Engineering Intern',
            company: 'RadfBC',
            skills: ['React', 'Node.js', 'MongoDB'],
            date: 'Month Year - Month Year'
        }

    ]

    const [showModal, setShowModal] = React.useState(false)

    return (
        <>

        <main className='flex justify-center p-10'>
            
            <section className='flex-col flex max-w-screen-xl w-full items-center'>

                <h1 className='text-4xl md:text-7xl font-bold text-slate-400 border-b border-slate-800 w-full'>Experience</h1>
                
                <div className='grid grid-cols-1 min-[450px]:grid-cols-2 max-w-screen-lg md:grid-cols-4 gap-2 py-10 pb-20' >
                
                    {
                        experienceList.map((exp) => {
                            return(
                                
                                <div key={experienceList} className='p-2 ' >
                                    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}} className='bg-slate-900 pb-3 pt-3 border border-gray-800 rounded-lg text-start' 
                                    style={
                                        {
                                            boxShadow: '5px 5px 10px 0px rgb(15, 23, 42)',
                                            borderRadius: '1rem',
                                            
                                        }
                                    } onClick={() => setShowModal(true)}>
                                        <img src={exp.img} alt='company logo' className='px-3 rounded-t-xl'/>
                                        <p className='text-xl font-bold text-slate-400 px-4 pt-3'>{exp.company}</p>
                                        <p className='text-sm font-semibold text-slate-500 px-4 py-2'>{exp.title}</p>
                                        <p className='text-xs font-semibold text-slate-500 italic px-4'>{exp.date}</p>
                                        <div className='flex justify-start px-3 pt-5 gap-2'>
                                            {
                                                exp.skills.map((skill) => {
                                                    return(
                                                        <p key={skill} className='hidden lg:block text-xs font-semibold text-blue-400 px-2 py-1 bg-slate-800 rounded-full'>{skill}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </motion.div>

                                </div>
                            )
                        })
                    }
                {/* <Modal isVisible={showModal} onClose={() => setShowModal(false)}/> */}
                </div>

                <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
                    
                    {
                        experienceList.map((exp) => {
                            return(
                                <div key={experienceList}>
                                    <h1>{exp.company}</h1>
                                </div>
                                
                            )
                        })
                    }
                    

                </Modal>

            </section>
        </main>

        </>
    )
}

export default Experiences
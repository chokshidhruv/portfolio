import React from 'react'
import { Section, SectionHeading, Card, CardGrid, DetailModal } from './ui'
import scemas from '../assets/scemas.svg'
import DhruvLogo from '../assets/logo-dhruv-2-.jpg'
import EZKart from '../assets/ezkart.png'
import QuickLink from '../assets/quickLink.png'
import Qarm from '../assets/QArm.jpg'
import Wind from '../assets/wind.jpg'
import Cards from '../assets/fof.jpg'
import TB from '../assets/tb.png'
import bash from '../assets/bash.png'
import nums from '../assets/nums.png'
import minesweeper from '../assets/minesweeper.png'
import tictactoe from '../assets/tictactoe.png'
import healthconnect from '../assets/healthconnect.png'
import maze from '../assets/maze.png'

const projectList = [
    {
        img: scemas,
        title: 'Real-time Environmental Monitoring',
        company: 'SCEMAS',
        skills: ['Next.js', 'TypeScript'],
        date: 'Course Project',
        description: {
            title: 'SCEMAS',
            company: 'Real-time environmental monitoring for city operators',
            date: 'Next.js · React · TypeScript · Tailwind · Vitest',
            linksToView: [],
            paragraph: <p>A real-time environmental monitoring platform for city operators. I led the admin tools and predictive alerting, which forecasts problems from live sensor data before they happen.</p>
        },
    },
        {
            img: maze,
            title: 'Java Maze Solver',
            company: 'MazeRunner',
            skills: ['Java', 'Maven', 'Apache CLI'],
            date: 'January 2025 - Present',
            description: {
                title: 'Java Maze Solver',
                company: 'Large Software Development Project',
                date: 'January 2025',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/MazeRunner'
                    },
                ],
                paragraph: <p>
                A Java maze solver that aims to solve mazes of varying complexity. The project is designed to use Object-Oriented Programming principles including inheritance, polymorphism, and encapsulation. Built using Java, Maven and Apache CLI.
                </p>
            },
        },
        {
            img: healthconnect,
            imgFit: 'contain',
            title: 'Connect Doctors to Patients',
            company: 'HealthConnect',
            skills: ['MERN Stack', 'AI Chatbot'],
            date: '< 1 Month',
            description: {
                title: 'Connect Doctors to Patients',
                company: 'Hackathon Project',
                date: 'January 2025 · < 1 Month',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/HealthConnect---DeltaHacks11'
                    },
                    {
                    name: 'Live Demo',
                    url: 'https://devpost.com/software/health-connect-0z8v4s'
                    }
                ],
                paragraph: <p>
                <strong>Skills: MongoDB (database), Express.js (backend - User Authentication), React.js (frontend), Node.js (backend), JSON Web Tokens, Encrypting (using bcrypt), Cohere API (chatbot), Socket.io (WebSocket for the chatting feature) </strong> 
                <br/><br/>
                Built using the MERN stack (MongoDB, Express.js, React.js, & Node.js) and integrated using Cohere's AI API to provide a personalized AI Chatbot. Health Connect is designed to improve access to healthcare services and reduce the burden on the healthcare system by providing patients with immediate guidance for non-critical health concerns.
                <br/><br/>
                In the Canadian healthcare system, long wait times have become a pervasive issue. Patients often endure hours of waiting for minor diagnoses such as a common cold, fever, or prescription refills. In Canada, waiting times for walk-in clinics is 68 minutes, accessing a hospital takes upwards of 3 hours, and accessing the ER takes upwards of 2 hours! These inefficiencies not only frustrate patients but also burden healthcare professionals who are already stretched thin, diverting their attention from more urgent or severe cases. Our project aims to alleviate this strain on the system by leveraging technology to provide patients with immediate guidance for non-critical health concerns, ultimately improving the healthcare experience for all stakeholders.
                <br/><br/>
                Health Connect is a comprehensive telehealth platform offering patients immediate access to healthcare professionals for <strong>minor health concerns.</strong> The platform is designed to provide patients with a quick and efficient way to receive medical advice and referrals without the need for an in-person visit. The platform features an AI-powered chatbot that can assess patient symptoms and provide recommendations for at home remedies. Patients can also connect with healthcare professionals through texting for a more personalized consultation. The platform is designed to be user-friendly and accessible to patients of all ages and backgrounds. It is also designed to be secure and compliant with privacy regulations to protect patient data. 
                <br/><br/>
                My role in this Hackathon project, along with a teammate, was to work on the front-end of the platform using React.js, back-end of the project - specifically, the User Authentication (ie. Login pages) and working with the Cohere API for the AI Chatbot. I designed the user interface to be user-friendly and intuitive, with a focus on providing an engaging experience for patients. It was a challenging project, especially trying to get the messaging system to work. However, I learned a lot from the experience and gained valuable skills in full-stack development and API integration.
                </p>
            },
        },
        {
            img: minesweeper,
            title: 'Minesweeper (Revamped)',
            company: 'Minesweeper',
            skills: ['C', 'GTK', 'Linux'],
            date: '< 1 Month',
            loc: <p>Play Minesweeper game now! Head to the github link below - and follow the steps! Cmd-line and GUI version available</p>,
            description: {
                title: 'Minesweeper, A Jedi\'s Adventure',
                company: 'Cross-functional team Project',
                date: 'December 2024 · ~ 1 Month',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/A-Jedi-s-Minesweeper'
                    },
                ],
                paragraph: <p>
                A revamped version of the classic Minesweeper game, designed to be user-friendly and provide an engaging experience for players. The game features a simple interface with customizable settings, including the ability to choose the size of the board, the number of mines, and the difficulty level. The game also includes a progress bar and a flagging system to help players keep track of the game. A JEDIs Minesweeper has two versions: A Command-line version and a Graphical version (using the GTK library) and is designed to run on Linux systems. The game is designed to be efficient and provide an enjoyable experience for players of all skill levels.
                <br/><br/>
                My role in this project was to work on the <strong>GUI (Graphical User Interface) version of the game using the GTK library </strong>. I designed the interface to be user-friendly and intuitive, with a focus on providing an engaging experience for players. The game is designed to be efficient and provide an enjoyable experience for players of all skill levels. It was difficult to implement the game logic and the graphical interface, but I learned a lot from the experience and gained valuable skills in C programming and GUI development.
                <br/><br/>
                I also assisted with the Command-line version of the game, helping with the end-game interface and scoring system.  
                <br/><br/>
                You can play the game by following the instructions in the README file on the Github page. Enjoy the game and may the force be with you!
                </p>
            },
        },
        {
            img: tictactoe,
            title: 'Tic-Tac-Toe Game',
            company: 'Tic-Tac-Toe',
            skills: ['Java', 'Maven'],
            date: '< 1 Month',
            description: {
                title: 'Customizable Tic-Tac-Toe Game',
                company: 'OOP Principles Project',
                date: 'December 2024 · < 1 Month',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/Tic-tac-toe'
                    },
                ],
                paragraph: <p>
                A customizable Tic-Tac-Toe game designed to be user-friendly and provide an engaging experience for players. The game features a simple interface with customizable settings, including the ability to choose the size of the board, players (ie. Human v. Human, Human v. Computer and Computer v. Computer), and the difficulty level. The game is designed to use Object-Oriented Programming principles including inheritance, polymorphism, and encapsulation. Built using Java and Maven.
                </p>
            },
        },
        {
            img: nums,
            title: 'Number Base Converter',
            company: 'Base Converter',
            skills: ['C', 'Bash', 'Linux'],
            date: '< 1 Month',
            description: {
                title: 'Number Base Converter',
                company: 'Bash Scripting Project',
                date: 'November 2024 · < 1 Month',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/Number-Base-Converter'
                    }
                ],
                paragraph: <p>
                A simple C program that converts numbers between different bases. The program is designed to be user-friendly and provides a simple interface for users to input a number and the base they want to convert it to. The program supports conversions between bases 2 to 36 and can convert numbers with decimal points. The program also provides the option to convert numbers to and from ASCII characters. The program is designed to be efficient and provides accurate results for all conversions.
                <br/>
                </p>
            },
        },
        {
            img: bash,
            title: 'Baby-Name Ranker',
            company: 'Bash Scripting',
            skills: ['Linux', 'Bash', 'DevOps'],
            date: '< 1 Month',
            description: {
                title: 'Baby-Name Ranker',
                company: 'Bash Scripting',
                date: 'October 2024 · < 1 Month',
                linksToView: [
                    {
                    name: 'Github',
                    url: 'https://github.com/chokshidhruv/Baby-Name-Ranker'
                    },
                ],
                paragraph: <p>
                A simple bash script that ranks the popularity of baby names in the United States. The script uses the Social Security Administration’s baby name data to rank the popularity of a given name over the years. The script is designed to be user-friendly and provides a simple interface for users to input a name and view the ranking. The script also allows users to view the ranking of a name for a specific year or range of years, specific gender and also provides the option to view the ranking of multiple names at once.
                <br/>
                </p>
            },
        },
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
                    url: 'https://dhruvchokshi.ca'
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
                </p>           
            },
        },
        {
            img: QuickLink,
            imgFit: 'contain-dark',
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
                paragraph: null
            },
        },
        {
            img: TB,
            imgFit: 'contain-dark',
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
                paragraph: <p>A collaborative project that was divided into two subgroups: computing and modelling. In the computing subgroup, my team and I worked together to identify the objectives, constraints, and requirements for a design solution. This served as the foundation for developing a program that interfaces with the Quanser Interactive Labs environment. The program was designed to sequentially identify specific containers and place them in their designated autoclave locations. This transfer process was repeated for six different containers, in a randomly selected order.
                    <br/> <br/>View full description of the project <a className='text-blue-400 underline' href='https://www.notion.so/PROJECT-2-GET-A-GRIP-2242ece2ebc1443aa0726885e8bf17a1'>here!</a></p>
            },
        },
        {
            img: Wind,
            title: 'Project 1 - McMaster U.',
            company: 'Renewable Technology',
            skills: ['Inventor', 'GrantaEDU'],
            date: 'Sept 2023 - Oct 2023',
            description: {
                title: 'Renewable Technology',
                company: 'Course Project',
                date: 'Course: Engineering 1P13',
                linksToView: [
                ],
                paragraph: <p>The project focused on renewable technology, specifically windmills. The objective was to select the most suitable material for wind turbine blades based on specific design requirements such as mechanical properties & performance. Working collaboratively in a group of five, I gained experience identifying objectives, utilizing a material selection process, and creating a solid turbine blade model.
                    <br/><br/>View full description of the project <a className='text-blue-400 underline' href='https://www.notion.so/PROJECT-1-RENEWABLE-TECHNOLOGY-4120415ac133465c86b1c84a6a104651'>here!</a></p>
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
                    {
                        name: 'Game Report',
                        url: 'https://docs.google.com/document/d/1LdMV9uIaJUWagguBG2y20wdGZflcCIaUDytMottTWfY/edit?usp=sharing'
                    }
                ],
                paragraph: 'A project I made for the Data Management course! The project was a probability game where users could play a game of chance. The game was built using Python and was a great way to learn about data management and probability.'
            },
        },
    ]

const Projects = () => {
    const [selected, setSelected] = React.useState(null)
    const close = React.useCallback(() => setSelected(null), [])

    return (
        <Section id='projects'>
            <SectionHeading accent='My' rest='Projects' />
            <CardGrid
                items={projectList}
                renderCard={(p) => (
                    <Card
                        img={p.img}
                        imgAlt={`${p.company} preview`}
                        imgFit={p.imgFit}
                        title={p.company}
                        subtitle={p.title}
                        date={p.description.date}
                        tags={p.skills}
                        onOpen={() => setSelected(p)}
                    />
                )}
            />
            <DetailModal
                onClose={close}
                entry={selected && {
                    img: selected.img,
                    imgAlt: `${selected.company} preview`,
                    title: selected.description.title,
                    subtitle: selected.description.company,
                    meta: [selected.description.date],
                    tags: selected.skills,
                    links: selected.description.linksToView,
                    roles: [{ body: selected.description.paragraph }],
                }}
            />
        </Section>
    )
}

export default Projects

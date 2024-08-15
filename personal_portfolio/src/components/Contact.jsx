import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="flex flex-col justify-center items-center px-10 gap-4 py-10 pb-16">

            <div className="flex w-full max-w-screen-xl justify-between border-b border-slate-800"> 
                <h1 className="md:text-5xl text-3xl font-bold text-slate-400">Contact <span className="text-blue-400">Me</span></h1>
            </div>

            <p className="text-slate-400 text-lg pt-10">Let's Connect!</p>
            <p className="max-w-lg text-center text-slate-400">If you have any questions or just want to say hi, feel free to reach me through my social platforms below:</p>

            <div className="grid md:flex max-w-screen-lg gap-4 pt-10 px-10 justify-center w-full">
                <div className="grid md:flex gap-2 border px-4 py-5 bg-slate-900 items-center opacity-45 rounded-xl border-slate-800 md:w-1/2 w-full">
                    <p className="text-lg font-semibold ">Email:</p>
                    <p className="text-slate-400 opacity-80">dhruvchokshi005@gmail.com</p>
                </div>
                <div className="flex gap-2 px-4 border py-5 items-center bg-slate-900 opacity-45 rounded-xl border-slate-800 md:w-1/2 w-full">
                    <p className="text-lg font-semibold ">Social Profiles:</p>
                    <div className='flex justify-center py-2'>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><FaGithub /></motion.a>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><FaInstagram /></motion.a>
                    <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><FaLinkedin /></motion.a>
                    {/* <motion.a whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}  className=" border border-slate-900 text-slate-400 font-bold uppercase tracking-wider p-2 rounded-lg cursor-pointer text-lg" href='#'><MdEmail /></motion.a> */}
                </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;
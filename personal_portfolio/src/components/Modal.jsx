import React from 'react'
import { IoMdClose } from "react-icons/io";


const Modal = ({isVisible, onClose, children}) => {

    if(!isVisible) return null;

    return (
        <div className='fixed inset-0 bg-slate-900 bg-opacity-90 backdrop-blur-sm flex justify-center items-center z-[9999] px-10 '>
            <div className='max-w-screen-xl w-full py-5'>
                <button className='max-w-screen-xl w-full flex justify-end text-2xl px-4 pt-4 font-black bg-slate-950 rounded-t-xl hover:text-blue-300 active:text-blue-400' onClick={() => onClose()}><IoMdClose /></button>
                <div className='bg-slate-950 p-4 max-h-[80vh] overflow-y-auto'>{children}</div>
            </div>
        </div>
    )
}

export default Modal
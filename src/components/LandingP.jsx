import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function Landing() {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textStructure mt-52 px-20'>
                {["we create", "eye-opening", "presentations"].map((item, ind) => {
                    return <div className='masker'>
                        <h1 className='text-8xl uppercase font-semibold leading-[5.8vw] tracking-tighter'>
                            {item}
                        </h1>
                    </div>
                })}


            </div>
            <div className='h-[1px] bg-zinc-600 mt-36  '></div>
                <div className='flex justify-between px-16 mt-5'>
                {["For public and private companies", " From the first pitch to IPO"].map((item, ind) => (
                    <p className='tracking-tighter leading-none '>
                        {item}
                    </p>))}
                <div className='start flex '>
                    <div className='uppercase border-[2px] border-zinc-600 rounded-full px-4'>start the project </div>
                    {/* <span><MdArrowOutward /></span> */}
                    <div className='w-7 h-7 rounded-full border-[2px] border-zinc-600 flex justify-center items-center ml-1 '>
                        <span><MdArrowOutward /></span></div>
                </div>
                </div>
            


        </div>
    )
}

export default Landing
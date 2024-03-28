import React from 'react'
import { MdArrowOutward } from "react-icons/md";
function Landing() {
    return (
        <div className='w-full h-screen bg-zinc-900 pt-1'>
            <div className='textStructure mt-40 px-14 '>
                {["we create", "eye-opening", "presentations"].map((item, ind) => {
                    return <div className='masker'>
                        
                        <div className='w-fit  flex overflow-hidden'>
                            {ind===1 && (
                            <div className='bg-green-500 h-[10vh] w-[120px] relative top-[13px] rounded-lg mr-3'>

                            </div>) }
                            <h1 key={ind} className=' text-[6.4vw] uppercase font-bold leading-[5.8vw] tracking-tighter'>
                            {item}
                        </h1>
                        </div>
                        
                    </div>
                })}


            </div>
            <div className='h-[1px] bg-zinc-600 mt-36  '></div>
                <div className='flex  justify-between px-16 mt-5'>
                {["For public and private companies", " From the first pitch to IPO"].map((item, ind) => (
                    <p className='tracking-tighter leading-none '>
                        {item}
                    </p>))}
                <div className='start flex '>
                    <div className='uppercase border-[2px] border-zinc-600 rounded-full px-4'>start the project </div>
                    {/* <span><MdArrowOutward /></span> */}
                    <div className='w-7 h-7 rounded-full border-[2px] border-zinc-600 flex justify-center items-center ml-1 '>
                        <span className=''><MdArrowOutward /></span></div>
                </div>
                </div>
            


        </div>
    )
}

export default Landing
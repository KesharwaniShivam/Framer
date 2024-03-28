import React from 'react'
import {motion} from "framer-motion"


function Marqee() {
  return (
    <>
    <div className='py-14 w-full rounded-tl-2xl rounded-tr-2xl bg-[#004D43]'>
    <div className='text border-t-2 border-b-2 border-zinc-400 flex  overflow-hidden gap-6 whitespace-nowrap'>
       <motion.h1 initial={{  x: "30%" }} animate={{  x: "-100%" }}  transition={{ease:"linear", repeat:Infinity, duration: 8 }} 
       className='uppercase text-[17vw] tracking-tighter leading-none font-bold text-zinc-100 -mb-3 -mt-11'> we are ochi</motion.h1>
       
       <motion.h1 initial={{ x: 0 }} animate={{x: "-100%" }}  transition={{ease:"linear", repeat:Infinity, duration: 8 }} 
       className='uppercase text-[17vw] tracking-tighter leading-none font-bold text-zinc-100 -mb-3 -mt-11'> we are ochi</motion.h1>

       <motion.h1 initial={{ x: 0 }} animate={{x: "-100%" }}  transition={{ease:"linear", repeat:Infinity, duration: 8 }} 
       className='uppercase text-[17vw] tracking-tighter leading-none font-bold text-zinc-100 -mb-3 -mt-11'> we are ochi</motion.h1>

      
    </div>
    </div>
    </>
  )
}

export default Marqee
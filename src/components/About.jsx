import React from 'react'

function About() {
    return (
        <>
            <div className=' py-[85px] px-16 bg-[#CDEA68] rounded-2xl text-black'>
                <h1 className='text-[3.4vw] leading-[3.3vw] tracking-tight mr-40'> Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
                <div className='border-t-[2px] border-[#99AD53] mt-14 shadow-lg'></div>
                <div className='abt flex gap-[500px]  mt-5'>
                    {["What you can expect:", "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether its live or digital, delivered for one or a hundred people. We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.", "S: Instagram, Facebook, Behance"].map((item, ind)=>(

                        <h1 className='text-[1vw] '> {item}</h1>
                    ) ) }
                </div>
                <div className='border-t-[2px] border-[#99AD53] mt-20 shadow-lg'></div>

                        <div className='flex gap-6'>
                <div className='Left part w-1/2 mt-5'>
                        <h1 className='text-[4vw] font-normal tracking-tight'>Our approach:</h1>
                        <button className='px-8 py-4 rounded-full uppercase bg-zinc-900 text-white flex items-center gap-8 mt-3 '>read more
                        <div className='w-2 h-2 rounded-full bg-white'></div>
                        </button>
                </div>
                <div className='Right part w-1/2 bg-[#004D43] h-[65vh] mt-3 rounded-2xl'></div>
                </div>
            </div>
        </>
    )
}

export default About
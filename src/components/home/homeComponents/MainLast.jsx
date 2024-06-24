import React from 'react'
import { BiArrowToTop, BiUpArrow } from 'react-icons/bi'
import { IoIosArrowUp } from 'react-icons/io'

function MainLast() {
    return (
        <div className=' bg-lblue'>
            <div className="w-11/12 mx-auto relative">
                <div className='py-12 lg:py-24'>
                    <h1 className='text-lg lg:text-4xl italic'>Your <span className="text-purple">Hobby,</span> Your <span className="text-blue">Community...</span></h1>
                    <div className=' mt-6 lg:mt-[30px] max-w-fit bg-[#8064A2] text-white py-1 lg:py-2 px-3 lg:px-[18px] rounded-lg'>Get Started</div>
                </div>
                <img src="/Groupl.png" alt="" className='s' />
                <div className='absolute right-[40px] bottom-[50%] w-10 h-10 bg-white hover:bg-purple text-white rounded-full grid place-items-center shadow-md'>
                    <IoIosArrowUp className='text-dgrey text-3xl rounded-full hover:text-white hover:bg-purple te' />
                </div>
            </div>
        </div>
    )
}

export default MainLast
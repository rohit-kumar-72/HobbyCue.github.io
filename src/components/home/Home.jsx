import React, { useState } from 'react'
import Navbar from '../common/Navbar'
import HeroSection from './homeComponents/HeroSection'
import AllCards from './homeComponents/AllCards'
import Card from '../common/Card'
import add from '/Add.png'
import MainLast from './homeComponents/MainLast'
import Footer from '../common/Footer'

function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showModal, setShowModal] = useState(false);
    console.log(showModal)

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} showModal={showModal} setShowModal={setShowModal} />
            <HeroSection setIsLoggedIn={setIsLoggedIn} showModal={showModal} setShowModal={setShowModal} />
            <AllCards isLoggedIn={isLoggedIn} />
            <div className="bg-lblue">
                <div className="w-11/12 mx-auto py-12 lg:py-[100px]">
                    <Card icon={add} title={"Add your own"} description={"Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page"} buttonText={"Add new"} width={true} />
                </div>
            </div>
            <div className="bg-white">
                <div className="w-11/12 mx-auto py-12 lg:py-[100px]">
                    <div className='bg-mbg lg:px-11 px-[24px] py-[26px] lg:py-10 border border-line rounded-lg flex-1 relative'>
                        <div className="flex justify-center lg:justify-start gap-3 items-center mb-7">
                            <img src={"/quote.png"} alt="" />
                            <h3 className='text-2xl font-semibold'>{"Testimonials"}</h3>
                        </div>
                        <div className=" text-center lg:text-left text-lg font-light mb-8 ">
                            {"In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it."}
                        </div>
                        <div className="grid lg:block place-items-center">
                            <div className="flex flex-col-reverse items-center justify-between lg:flex-row max-w-fit gap-8 lg:gap-20">
                                <img src="/AudioTrack.png" alt="" className='w-full h-16 lg:w-[60%]' />
                                <div className="flex items-center gap-3 min-w-fit">
                                    <img src="/audio.png" alt="" className='rounded-full h-15 lg:h-auto' />
                                    <div className="">
                                        <h3 className='lg:text-lg font-semibold'>Shubha Nagarajan</h3>
                                        <h5 className='text-sm text-[#0096C8]'>Classical Dancer</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MainLast />
            <Footer />
        </div>
    )
}

export default Home
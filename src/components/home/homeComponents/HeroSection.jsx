import React from 'react'
import SignIn from '../../common/SignIn'
import { BiCross } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

function HeroSection({ setIsLoggedIn, showModal, setShowModal }) {
    return (
        <div className='bg-mbg h-full'>
            <div className="w-11/12 mx-auto relative lg:pb-28 ">
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-10 pt-8 lg:pt-[100px]'>
                    <div className="lg:w-[60%] text-wrap">
                        <h1 className='text-lg lg:text-4xl italic font-semibold'>Explore your <span className='text-blue'>hobby</span> or passion</h1>
                        <p className='text-md font-light mt-4 lg:mt-8'>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. <span className='hidden lg:block'> Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</span>
                        </p>
                        <p className="hidden lg:block text-md font-light mt-4">
                            you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                        </p>
                    </div>
                    <div className="">
                        <SignIn rememberMe={false} setIsLoggedIn={setIsLoggedIn} />
                    </div>
                </div>
                <img src="/group.png" alt="" className='z-0 lg:absolute lg:bottom-0 mt-12 lg:mt-0 mx-auto lg:ml-0' />
            </div>
            {
                showModal && (
                    <div className="fixed inset-0 bg-white z-50">
                        <div className='shadow-md h-14 flex justify-between items-center px-12 '>
                            <img src="/h.png" alt="" />
                            <AiOutlineClose className='text-xl' onClick={() => setShowModal(false)} />
                        </div>
                        <div className="w-11/12 mx-auto mt-5">
                            <SignIn rememberMe={true} />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default HeroSection
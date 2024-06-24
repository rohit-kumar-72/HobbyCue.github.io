import React, { useState } from 'react'
import { BiMenu, BiSearch } from 'react-icons/bi'

function Navbar({ isLoggedIn, showModal, setShowModal }) {
    const [showExplore, setShowExplore] = useState(false);
    const [showHobbies, setShowHobbies] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    // console.log(showMenu)

    return (
        <>
            <nav className='border-b border-b-mgrey shadow-md z-20'>
                <div className="w-11/12 mx-auto min-h-[80px] flex items-center justify-between lg:gap-x-[90px] gap-x-8">
                    <div className="flex items-center gap-[35px] justify-between">
                        <img src="/logo.png" alt="Logo" className="h-10" />
                        <div className="hidden lg:flex w-[300px] h-[40px]">
                            <input type="text" placeholder='Search here...' className='bg-lgrey rounded-l-lg p-[12px] active:outline-mgrey border-mgrey border-2 outline-none w-full h-full border-r-0' />
                            <div className="bg-purple w-[40px] h-full grid place-items-center rounded-r-lg">
                                <BiSearch className='bg-purple text-white text-xl' />
                            </div>
                        </div>
                    </div>

                    {/* for mobile screen */}
                    <div className="flex items-center lg:gap-x-[24px]">
                        <div className="lg:hidden flex items-center gap-3">
                            <div className="bg-white w-[40px] h-full grid place-items-center rounded-r-lg">
                                <BiSearch className='bg-white text-purple text-2xl' />
                            </div>
                            <img src="/bell.png" alt="Notifications" className="h-7" onClick={() => setShowModal(!isLoggedIn)} />
                            <button onClick={() => setShowMenu(!showMenu)}>
                                <BiMenu className='text-3xl text-purple' />
                            </button>
                        </div>
                        <div className="hidden lg:flex items-center gap-x-[24px]">
                            <div className="flex justify-center items-center relative" onClick={() => setShowExplore(!showExplore)}>
                                <img src="/Explore.png" alt="Explore" />
                                Explore
                                <img src="/arrow.png" alt="Arrow" />
                                {showExplore && (
                                    <div className="absolute top-full mt-6 z-10 w-[300px] left-0 border border-mgrey rounded-md text-dgrey bg-white">
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>People - Community</p>
                                        </div>
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>Places - Venues</p>
                                        </div>
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>Program - Event</p>
                                        </div>
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>Product - Store</p>
                                        </div>
                                        <div className='p-[12px]'>
                                            <p>Blogs</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-center items-center relative" onClick={() => setShowHobbies(!showHobbies)}>
                                <img src="/Hobbies.png" alt="Hobbies" />
                                Hobbies
                                <img src="/arrow.png" alt="Arrow" />
                                {showHobbies && (
                                    <div className="absolute top-full mt-6 z-10 w-[300px] left-0 border border-mgrey rounded-md text-dgrey bg-white">
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>People - Community</p>
                                        </div>
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>Places - Venues</p>
                                        </div>
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>Program - Event</p>
                                        </div>
                                        <div className='p-[12px] border-b-2 border-mgrey'>
                                            <p>Product - Store</p>
                                        </div>
                                        <div className='p-[12px]'>
                                            <p>Blogs</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <img src="/bookmark.png" alt="Bookmark" onClick={() => setShowModal(!isLoggedIn)} />
                            <img src="/bell.png" alt="Notifications" className="h-6" onClick={() => setShowModal(!isLoggedIn)} />
                            <img src="/cart.png" alt="Cart" onClick={() => setShowModal(!isLoggedIn)} />
                            {
                                isLoggedIn
                                    ? <>
                                        <button className='w-10 h-10 roundedfull'>
                                            <img src="/audio.png" alt="" />
                                        </button>

                                    </>
                                    : <button className='xl:px-[32px] pb-[14px] pt-[10px] text-purple border-2 border-purple rounded-lg font-semibold w-[120px] xl:w-auto'>Sign In</button>
                            }
                        </div>
                    </div>
                </div>
                {showMenu && (
                    <div className="lg:hidden absolute top-[78px] left-0 bg-white w-full z-10 shadow-sm border-b border-b-mgrey">
                        <div className="p-4 w-11/12">

                            <div className="flex flex-col gap-2">
                                <div className="flex items-center justify-between" onClick={() => setShowExplore(!showExplore)}>
                                    <div className="flex gap-4">
                                        <img src="/Explore.png" alt="" />
                                        <span>Explore</span>
                                    </div>
                                    <img src="/arrow.png" alt="Arrow" />
                                </div>
                                {showExplore && (
                                    <div className="pl-4">
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>People - Community</p>
                                        </div>
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>Places - Venues</p>
                                        </div>
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>Program - Event</p>
                                        </div>
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>Product - Store</p>
                                        </div>
                                        <div className='p-2'>
                                            <p>Blogs</p>
                                        </div>
                                    </div>
                                )}
                                <div className="flex items-center justify-between" onClick={() => setShowHobbies(!showHobbies)}>
                                    <div className="flex gap-4">
                                        <img src="/Hobbies.png" alt="" />
                                        <span>Hobbies</span>
                                    </div>
                                    <img src="/arrow.png" alt="Arrow" />
                                </div>
                                {showHobbies && (
                                    <div className="pl-4">
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>People - Community</p>
                                        </div>
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>Places - Venues</p>
                                        </div>
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>Program - Event</p>
                                        </div>
                                        <div className='p-2 border-b border-mgrey'>
                                            <p>Product - Store</p>
                                        </div>
                                        <div className='p-2'>
                                            <p>Blogs</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar

import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'

function Footer() {
    return (
        <div>
            <div className="w-11/12 mx-auto py-14 flex justify-between flex-col lg:flex-row items-start gap-y-6">

                <div className="flex-1 w-full lg:max-w-[150px]">
                    <div className="flex items-center justify-between mb-4 min-w-full">
                        <h1 className='text-sm font-semibold'>Hobbycue</h1>
                        <IoIosArrowDown className='text-lg' />
                    </div>
                    <div>
                        <p className='text-sm'>About Us</p>
                        <p className='text-sm'>Our Services</p>
                        <p className='text-sm'>Work with Us</p>
                        <p className='text-sm'>FAQ</p>
                        <p className='text-sm'>Contact Us</p>
                    </div>
                </div>
                <div className="flex-1 w-full lg:max-w-[150px]">
                    <div className="flex items-center justify-between mb-4 min-w-full">
                        <h1 className='text-sm font-semibold'>How Do I</h1>
                        <IoIosArrowDown className='text-lg' />
                    </div>
                    <div>
                        <p className='text-sm'> Sign Up</p>
                        <p className='text-sm'>Add a Listning</p>
                        <p className='text-sm'>Claim Listning</p>
                        <p className='text-sm'>Post a Query</p>
                        <p className='text-sm'>Add a Blog Post</p>
                        <p className='text-sm'>Other Queries</p>
                    </div>
                </div>


                <div className="flex-1 w-full lg:max-w-[150px]">
                    <div className="flex items-center justify-between mb-4 min-w-full">
                        <h1 className='text-sm font-semibold'>Quick Links</h1>
                        <IoIosArrowDown className='text-lg' />
                    </div>
                    <div>
                        <p className='text-sm'>Listning</p>
                        <p className='text-sm'>Blog Posts</p>
                        <p className='text-sm'>Shop / Store</p>
                        <p className='text-sm'>Community</p>
                    </div>
                </div>
                <div className="flex-1 max-w-fit">
                    <div className="flex items-center justify-between mb-4 min-w-full">
                        <h1 className='text-sm font-semibold'>Socail Media</h1>
                    </div>
                    <div className="flex gap-2">
                        <img src="/icon1.png" alt="" />
                        <img src="/icon2.png" alt="" />
                        <img src="/icon3.png" alt="" />
                        <img src="/icon4.png" alt="" />
                        <img src="/icon5.png" alt="" />
                        <img src="/icon6.png" alt="" />
                        <img src="/icon7.png" alt="" />
                        <img src="/icon8.png" alt="" />
                    </div>
                    <h1 className='text-sm font-semibold my-4'>Invite Friends</h1>
                    <div className="flex w-[300px] h-[40px]">
                        <input type="text" placeholder='Email Id' className='bg-lgrey rounded-l-lg p-[12px] active:outline-mgrey border-mgrey border-2 outline-none w-full h-full border-r-0' />
                        <div className="text-white bg-purple w-[80px] h-full grid place-items-center rounded-r-lg">
                            Invite
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#F7F5F9] grid place-items-center py-7 -mt-4">
                © Purple Cues Private Limited
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import { BsEye, BsEyeFill, BsLockFill } from 'react-icons/bs'

function SignIn({ rememberMe, setIsLoggedIn }) {
    return (
        <div>
            <div className="z-10 flex items-center justify-center lg:justify-start gap-10">
                <h2 className='font-semibold text-md lg:text-xl border-b-4 border-b-transparent text-signIn'>SignIn</h2>
                <h2 className='font-semibold text-md lg:text-xl border-b-2 border-b-purple text-purple'>JoinIn</h2>
            </div>
            <div className="mt-7 lg:mt-8 flex lg:flex-col flex-col-reverse">
                <div className="">
                    <div className="flex items-center gap-14 lg:gap-[88px] lg:pr-32 pl-4 lg:pl-6 border border-purple rounded-md mb-3 lg:mb-4">
                        <img src="/Google.png" alt="" className='h-4' />
                        <h3 className='text-sm font font-semibold py-3 max-w-fit'>Continue with Google</h3>
                    </div>
                    <div className="flex items-center gap-14 lg:gap-[88px] lg:pr-32 pl-4 lg:pl-6 border border-purple rounded-md ">
                        <img src="/Facebook.png" alt="" className='h-4' />
                        <h3 className='text-sm font font-semibold py-3 '>Continue with Facebook</h3>
                    </div>
                </div>
                <div className="flex gap-2 items-center justify-between py-6 lg:py-7">
                    <div className="border flex-1 border-line"></div>
                    <div className="text-sm font-semibold">or Connect With</div>
                    <div className="border flex-1 border-line"></div>
                </div>
                <div className="">
                    <input type="email" className=' px-3 py-2 lg:p-3 border border-mgrey rounded-lg w-full' placeholder='Email' />
                    <div className="relative mt-4">
                        <input type="password" className=' px-3 py-2 lg:p-3 border border-mgrey rounded-lg w-full' placeholder='Password' />
                        <BsEyeFill className='text-xl text-[#6D747A] absolute right-3 top-1/2 -translate-y-2' />
                    </div>
                    {
                        rememberMe
                            ?
                            <>
                                <div className="flex justify-between items-center mt-2 mb-6">
                                    <div>
                                        <input type="checkbox" id='Rememberme' className='text-xl mr-2' />
                                        <label htmlFor="Rememberme">Remember me</label>
                                    </div>
                                    <div>
                                        <BsLockFill className='inline text-lg text-[#939CA3] mr-2' />
                                        Forgot Password?
                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex justify-between items-center mt-3 mb-2'>
                                    <div className="flex gap-1">
                                        <div className="border-2 border-white w-14 rounded-md"></div>
                                        <div className="border-2 border-white w-14 rounded-md"></div>
                                        <div className="border-2 border-white w-14 rounded-md"></div>
                                    </div>
                                    <h5 className='font-semibold text-xs text-signIn'>Password Strength</h5>
                                </div>
                                <h4 className='text-sm text-dgrey mb-3'>By continuing, you agree to our <span className='text-black font-normal '>Terms of Service</span> and <span className='text-black '>Privacy Policy</span>.</h4>
                            </>
                    }
                    <div className=' bg-purple py-2 lg:p-3 text-white text-sm font-semibold border rounded-lg w-full text-center'
                        onClick={() => setIsLoggedIn(true)}
                    >
                        Continue
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SignIn
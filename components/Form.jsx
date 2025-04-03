'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({type}) => {
    const router=useRouter()
    const { register , handleSubmit , formState:{errors}}=useForm()

    const submitHandler=(data)=>{
        console.log(data)
    }
  return (
    <div className='w-11/12 md:w-3/4 lg:w-1/2 mx-auto my-12 lg:my-24 p-6 md:p-12 lg:p-24 rounded-md bg-[#F6F6F7]'>
        <div className='w-full flex flex-col gap-y-4 '>
            <div className='text-[#1a1a1a] text-center text-lg md:text-xl font-bold'>
                {
                    (type===1)?"Create Your Account":"Login Into Your Account"
                }
            </div>

            <button className='bg-white w-full py-2 rounded-md flex items-center justify-center gap-x-4 cursor-pointer'>
                <Image loading="lazy" src="/google.png" alt='google' width={25} height={25}  />
                <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Login with Google</div>
            </button>

            <div className='w-full flex items-center justify-between'>
                <div className='w-[45%] h-[0.5px] bg-[#E7E7E7]'/>
                <div className='text-[#1a1a1a] text-xs md:text-sm font-bold'>OR</div>
                <div className='w-[45%] h-[0.5px] bg-[#E7E7E7]'/>

            </div>


            <form onSubmit={handleSubmit(submitHandler)} className='w-full flex flex-col gap-y-6'>
                {
                    (type===1) && <div className='flex flex-col gap-y-1'>
                        <label htmlFor="name" className='text-[#1a1a1a] text-[8px] md:text-xs'>Username</label>
                        <input 
                            type="text" id="name" name="name" className="outline-none border bg-white rounded-md py-2 px-4 text-xs md:text-sm text-[#7B7E86] border-[#EBEBEB]" 
                            {...register("name", {
                                required: "Name is required",
                                minLength: {
                                value: 5,
                                message: "Your name must be at least 5 characters long"
                            }
                            })} 
                        />
                        {
                            errors.name && <span className="text-[#E53E3E] text-xs">{errors.name.message}</span>
                        }
                    </div>
                }
                <div className='flex flex-col gap-y-1'>
                    <label htmlFor="email" className='text-[#1a1a1a] text-[8px] md:text-xs'>Email Address</label>
                    <input 
                        type="email" id="email" name="email" className="outline-none border bg-white rounded-md py-2 px-4 text-xs md:text-sm text-[#7B7E86] border-[#EBEBEB]" 
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                message: "Please provide a valid email address"
                            }
                        })} 
                    />
                    {
                        errors.email && <span className="text-[#E53E3E] text-xs">{errors.email.message}</span>
                    }
                </div>

                

                <div className='flex flex-col gap-y-1'>
                    <label htmlFor='password' className='text-[#1a1a1a] text-[8px] md:text-xs'>Password</label>
                    <input type='password' id='password' name='password' className='outline-none border bg-white rounded-md py-2 px-4 text-xs md:text-sm text-[#7B7E86] border-[#EBEBEB]'
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters long"
                            }
                    })}
                    />
                    {
                        errors.password && <span className="text-[#E53E3E] text-xs">{errors.password.message}</span>
                    }

                </div>
                

                {
                    (type===2) && <div>

                    </div>
                }


                {
                    (type===2) && <div className='flex items-center gap-x-3'>
                        <input type='checkbox' className='w-[20px] h-[20px] rounded-xs border border-[#DADADA]'/>
                        <div className='text-xs text-[#7B7E86] font-semibold'>Remember me</div>
                    </div>
                }


                {
                    (type===1) && <div className=''>
                        <div className='flex items-center gap-x-3'>
                            <input type='checkbox' className='w-[20px] h-[20px] rounded-xs border border-[#DADADA]'/>
                            <div className='text-xs text-[#7B7E86] font-semibold'>Subscribe to stay updated with new products and offers!</div>
                        </div>

                        <div className='flex items-center gap-x-3 mt-2'>
                            <input type='checkbox' className='w-[20px] h-[20px] rounded-xs border border-[#DADADA]'/>
                            <div className='text-xs text-[#7B7E86] font-semibold'>I accept the <span className='text-[#1a1a1a]'>Terms / Privacy Policy</span></div>
                        </div>
                    </div>
                }

                

                <button type='submit' className='bg-[#E53E3E] w-full py-2 text-white uppercase text-xs md:text-sm rounded-md mt-8 font-bold tracking-wide cursor-pointer'>
                {
                    (type===1)?"Register":"Log in"
                }
                </button>

                {
                    (type===2) && <div className='mt-4 text-[#1a1a1a] font-bold text-xs'>Lost your password?</div>
                }

                {
                    (type===1) && <div onClick={()=>router.push("/login")}  className='mt-4 text-[#1a1a1a] cursor-pointer font-bold text-xs'>Already have an account? <span className='text-[#E53E3E]'>Log in</span></div>
                }




            </form>
        </div>
    </div>
  )
}

export default Form
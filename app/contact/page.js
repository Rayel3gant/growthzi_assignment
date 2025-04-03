'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaLocationDot } from 'react-icons/fa6'

const Contact = () => {
    const { register , handleSubmit , formState:{errors} }=useForm()

    const submitHandler=(data)=>{
        console.log(data)
    }
  return (
    <div className='w-full '>
        <Navbar1/>
        <HeroSection text="Contact" pageName="Contact" />

        <div className="w-11/12 xl:w-[1200px] mx-auto my-12">
            <div className='w-full rounded-md bg-[#F6F6F7] p-4 lg:p-6 flex flex-col gap-y-6 lg:flex-row lg:justify-between '>
                {/* form  */}
                <div className='w-full lg:w-[65%]'>
                    <div className='text-black font-bold text-sm md:text-lg lg:text-xl'>Get In Touch</div>

                    <form onSubmit={handleSubmit(submitHandler)} className="mt-6 w-full flex flex-col gap-y-6">
                        <div className="w-full  flex flex-col gap-y-4 md:flex-row items-center justify-between">
                            <div className="w-full md:w-[45%]">
                                <label htmlFor='name' className='text-[#74787C] text-[8px] md:text-xs'>Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-[#74787C] py-3 px-4"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                            </div>

                            <div className="w-full md:w-[45%]">
                                <label htmlFor='email' className='text-[#74787C] text-[8px] md:text-xs'>Email Address</label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-[#74787C] py-3 px-4"
                                    {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" }
                                    })}
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                            </div>
                        </div>

                        <div className="w-full">
                            <label htmlFor='subject' className='text-[#74787C] text-[8px] md:text-xs'>Subject</label>
                        
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-[#74787C] py-3 px-4"
                                {...register("subject", { required: "Subject is required" })}
                            />
                            {errors.subject && <span className="text-red-500 text-xs">{errors.subject.message}</span>}
                        </div>

                        <div className="w-full">
                            <label htmlFor='message' className='text-[#74787C] text-[8px] md:text-xs'>Your Message</label>

                            <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-[#74787C] py-3 px-4"
                            {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
                            />
                            {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
                        </div>

                        <button type="submit" className="mt-6 bg-[#E53E3E] text-white font-bold  px-4 py-2 rounded-md w-fit cursor-pointer">
                            Send message
                        </button>
                    </form>

                </div>

                {/* card  */}
                <div className='w-full lg:w-[25%] rounded-md bg-white border border-[#ECECEC] p-6'>
                    <div className='w-full bg-[#D9D9D9] min-h-[150px] rounded-md'/>

                    <div className='flex flex-col gap-y-4 mt-4'>
                        <div className='text-black font-bold text-sm lg:text-lg'>Clothing Store</div>

                        <div className='text-[#7B7E86] text-xs font-semibold'>
                            <div>Germany — 785 15h Street, Office 478/B</div>
                            <div>Green Mall Berlin, De 81566</div>
                        </div>

                        <div className='text-[#7B7E86] text-xs md:text-sm lg:text-xs font-semibold'>
                            <div>Phone: +1 1234 567 88</div>
                            <div>Email: contact@example.com</div>
                        </div>

                        <div className='w-full h-[0.5px] bg-[#E1E1E1]'/>
                        <div className='text-black font-bold text-sm lg:text-lg'>Opening Hours</div>

                        <div className='text-[#7B7E86] text-xs md:text-sm lg:text-xs font-semibold'>
                            <div>Monday - Friday : 9am - 5pm</div>
                            <div>Weekend Closed</div>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>

        <div className="w-11/12 xl:w-[1200px] mx-auto my-12">
            <div className='w-full h-[400px] bg-[#D9D9D9] rounded-md relative'>

                <div className='w-[250px] h-[230px] absolute top-[20%] left-[20%] rounded-md bg-white border border-[#ECECEC] p-6'>
                    <div className='w-full bg-[#D9D9D9] min-h-[100px] rounded-md'/>

                    <div className='flex flex-col gap-y-4 mt-4'>
                        <div className='text-black font-bold text-sm lg:text-lg'>Montani Daniel</div>

                        <div className='text-[#7B7E86] text-xs font-semibold'>
                            478/B Green Mall Berlin
                        </div>
                                        
                    </div>
                </div>

                <div className='w-[45px] h-[45px] rounded-full bg-[#E53E3E] border-[5px] border-white flex items-center justify-center absolute top-[5%] left-[5%] lg:top-[10%] lg:left-[45%]'>
                    <FaLocationDot className='text-white text-xl'/>
                </div>


                <div className='w-[45px] h-[45px] rounded-full bg-[#E53E3E] border-[5px] border-white flex items-center justify-center absolute top-[60%] left-[85%] lg:left-[75%]'>
                    <FaLocationDot className='text-white text-xl'/>
                </div>
            </div>
        </div>


        <Footer color="#E53E3E"/>
    </div>
  )
}

export default Contact
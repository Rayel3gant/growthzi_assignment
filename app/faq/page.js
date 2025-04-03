'use client'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import { accordionData } from '@/data/Others'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useForm } from 'react-hook-form'
import Footer from '@/components/Footer'


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const { register , handleSubmit, formState:{errors} } =useForm()

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  const submiHandler=(data)=>{
    console.log(data)
  }
  return (
    <div className='w-full'>
      <Navbar1/>
      <HeroSection text="Frequently asked questions" pageName="FAQ's"/>

      <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>        
        <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-y-12'>
          {/* accordion  */}
          <div className='w-full lg:w-[65%] flex flex-col gap-y-4 '>
            {accordionData.map((item) => (
              <div key={item.id} className="border border-[#E8E8E8] rounded-md bg-white overflow-hidden">
                <button
                  className="w-full text-left p-4  hover:bg-gray-100 flex justify-between items-center"
                  onClick={() => toggleAccordion(item.id)}
                >
                  <span className="font-semibold text-[#1a1a1a] text-sm lg:text-[15px]">{item.title}</span>
                  <span>{openIndex === item.id ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={openIndex === item.id ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="p-4 text-[#7B7E86] text-xs md:text-sm font-semibold">{item.desc}</div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* form  */}
          <div className='w-full lg:w-[33%] bg-[#F6F6F6] px-4 py-4 md:px-6 md:py-6 lg:x-6 lg:py-12 rounded-md h-fit'>
          <form onSubmit={handleSubmit(submiHandler)} className="w-full flex flex-col gap-y-6">
            <div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="border p-2 w-full border-[#E8E8E8] bg-white outline-none rounded-md"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
                className="border p-2 w-full border-[#E8E8E8] bg-white outline-none rounded-md"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                className="border p-2 w-full border-[#E8E8E8] bg-white outline-none rounded-md"
                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } })}
              />
              {errors.message && <span className="text-red-500 text-xs">{errors.message.message}</span>}
            </div>

            <button
              type="submit"
              className="cursor-pointer mt-6 bg-[#E53E3E] text-white font-bold text-xs md:text-sm uppercase tracking-widest py-3 rounded-md"
            >
              Submit
            </button>
          </form>

          </div>  
        </div>
        
      </div>

      <Footer color="#E53E3E"/>
    </div>
  )
}

export default FAQ
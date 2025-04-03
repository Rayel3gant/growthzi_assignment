import { footerFeatures } from '@/data/HomePage'
import Image from 'next/image'
import React from 'react'
import { IoMdCall } from "react-icons/io";

const Footer = ({color}) => {
  return (
    <div className='w-full bg-[#F6F6F7] mt-12'>
        <div className='w-11/12 xl:w-[1200px] mx-auto py-12  '>
            <div className='w-full   bg-white grid grid-cols-2 lg:grid-cols-4 p-4 rounded-md gap-y-8 gap-x-4 '>
            {
                footerFeatures.map((item)=>(
                    <div key={item.id} className='flex items-center gap-x-3'>
                        <Image loading="lazy" src={item.src} width={40} height={40} alt={item.id} className=""/>

                        <div>
                            <div className='text-[#1a1a1a] text-sm lg:text-lg font-semibold'>{item.title}</div>
                            <div className='text-[#74787C] text-xs lg:text-sm'>{item.desc}</div>
                        </div>
                    </div>
                ))
            }
            </div>

            <div className='w-full flex flex-wrap lg:flex-nowrap justify-between mt-12 gap-6'>
                <div className='w-full md:w-fit'>
                    <div className='text-[#1a1a1a] text-sm font-bold'>About Store</div>
                    <div className='flex items-center gap-x-3 mt-3'>
                    <div className='w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full'>
                        <IoMdCall className={`text-[${color}]`} />
                    </div>
                    <div>
                        <div className='text-[#74787C] text-sm'>Have Question? Call Us 24/7</div>
                        <div className={`text-[${color}] text-lg font-semibold`}>+258 3692 2569</div>
                    </div>
                    </div>
                    <div className='flex flex-col gap-y-2 mt-5'>
                    <div className='text-[#74787C] text-sm'>Monday - Friday: <span className='text-[#1a1a1a]'>8:00am - 6:00pm</span></div>
                    <div className='text-[#74787C] text-sm'>Saturday: <span className='text-[#1a1a1a]'>8:00am - 6:00pm</span></div>
                    <div className='text-[#74787C] text-sm'>Sunday: <span className='text-[#1a1a1a]'>Service Closed</span></div>
                    </div>
                </div>

                {["Our Stores", "Shop Categories", "Useful Links"].map((section, index) => (
                    <div key={index} className='w-full md:w-fit'>
                    <div className='text-[#1a1a1a] text-sm font-bold'>{section}</div>
                    <div className='flex flex-col gap-y-2 mt-5'>
                        {(
                        section === "Our Stores"
                            ? ["New York", "London SF", "Los Angeles", "Chicago", "Gotham"]
                            : section === "Shop Categories"
                            ? ["New Arrivals", "Best Selling", "Vegetables", "Fresh Meat", "Fresh Seafoods"]
                            : ["Privacy Policy", "Terms & Conditions", "Contact Us", "Latest News", "Our Sitemaps"]
                        ).map((item) => (
                        <div key={item} className='text-[#74787C] text-sm'>{item}</div>
                        ))}
                    </div>
                    </div>
                ))}

                <div className='w-full md:w-[50%] lg:w-[25%]'>
                    <div className='text-[#1a1a1a] text-sm font-bold'>Our Newsletter</div>
                    <div className='mt-5 text-[#74787C] text-sm'>Subscribe to the mailing list to receive updates on new arrivals and discounts.</div>
                    <div className='border border-[#E4E5EE] bg-white p-3 rounded-xs flex flex-wrap sm:flex-nowrap items-center gap-x-2 mt-4'>
                    <input type='text' placeholder='Your email' className='outline-none border-none text-[#74787C] flex-grow' />
                    <button className={`uppercase bg-[${color}] text-white px-3 py-2 rounded-xs text-[10px] cursor-pointer`}>
                        Subscribe
                    </button>
                    </div>
                    <div className='mt-4 text-[#74787C] text-sm'>I would like to receive news and special offers.</div>
                </div>
            </div>

            <div className='w-full my-8 h-[0.5px] bg-[#DDDDDE]'/>


            <div className='w-full flex flex-col md:flex-row gap-y-4 items-center justify-between'>
                <div className='flex items-center gap-x-2'>
                    <div className='text-[#1a1a1a] text-[10px] md:text-sm'>Payment System:</div>
                    <Image loading="lazy" src="/payment.png" alt='payment' width={320} height={50} className='w-[250px] md:w-[320px]'/>
                </div>

                <div className='text-[#1a1a1a] text-[10px] md:text-sm'>
                 Copyright 2024 <span className='font-bold'>©Roiser</span>. All rights reserved.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
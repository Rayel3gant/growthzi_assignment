'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { IoPricetag } from 'react-icons/io5'

const BlogGrid = () => {
    const router=useRouter()
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Blog Grid" pageName="Blog Grid"/>

        {/* grid  */}
        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12'>
            {
                [0,1,2,3,4,5,6,7,8].map((item)=>(
                    <div key={item} className='rounded-md w-full shadow-sm overflow-hidden '>
                        <Image loading="lazy" src="/blog.jpg" alt='blog' width={250} height={350} className='w-full h-[250px] lg:h-[200px]' />
                        
                        <div className='py-8 px-4 bg-white'>
                            <div className='flex items-center gap-x-5'>
                                <div className='flex items-center gap-x-3'>
                                    <FaCalendarAlt className='text-[#E53E3E] text-lg '/>
                                    <div className='text-[#74787C] text-xs md:text-sm uppercase'>March 15, 2022</div>
                                </div>

                                <div className='flex items-center gap-x-3'>
                                    <IoPricetag className='text-[#E53E3E] text-lg '/>
                                    <div className='text-[#74787C] text-xs md:text-sm uppercase'>oil Change</div>
                                </div>

                            </div>

                            <div className='text-[#1a1a1a] mt-6 font-bold text-sm md:text-lg w-[80%]'>How to Decorate Your Car for Halloween</div>

                            <div className='w-full mt-4 bg-[#EAEAEA] h-[0.5px]'/>

                            <button onClick={()=>router.push("/blogDetails")} className='cursor-pointer mt-6 text-[#FF4D24] flex items-center gap-x-3'>                                
                                <div className='text-xs font-bold md:text-sm'>Read more</div>
                                <IoIosArrowRoundForward className='text-lg' />
                            </button>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>

        <Footer color="#E53E3E"/>
    </div>
  )
}

export default BlogGrid
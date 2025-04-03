'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const NotFound = () => {
    const router=useRouter()
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection pageName="Not Found" text="Not Found" />

        <div className="w-11/12 md:w-3/4 xl:w-[35%] mx-auto my-12">           
            <div className='w-full flex flex-col items-center gap-y-6'>
                <Image src="/404.png" alt='404' width={600} height={400} className='w-full h-[300px] md:h-[350px]' />
                <div className='text-black font-bold text-lg md:text-xl lg:text-5xl '>Page Not found</div>
                <div className='text-[#74787C] text-xs md:text-sm  text-center mx-auto'>Sorry, we couldn't find the page you where looking for. We suggest that you return to homepage.</div>

                <button onClick={()=>router.push("/")} className='bg-[#E53E3E] mt-12 cursor-pointer text-white font-bold w-fit px-4 py-3 rounded-md uppercase text-xs md:text-sm '>
                    back to homepage
                </button>
            </div>
        </div>

        


        <Footer color="#E53E3E"/>
    </div>
  )
}

export default NotFound
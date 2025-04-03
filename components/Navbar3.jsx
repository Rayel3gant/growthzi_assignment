"use client"

import { navRoutes } from '@/data/HomePage';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { CiHeart, CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci';

import { RiMenu2Fill } from 'react-icons/ri';
import { useSelector } from 'react-redux';

const Navbar3 = () => {
    const router=useRouter()
    const { total , totalItems} =useSelector((state)=>state.cart)

  return (
    <div className='w-full'>
      <div className=' bg-[#885B3A] w-full py-2   '>
        <div className='text-white text-xs md:text-sm uppercase font-bold text-center'>20% Off Everything With a Min. Spend, Sale Ends</div>
      </div>

      <div className='w-11/12 xl:w-[1200px] mx-auto flex justify-between items-center py-2'>
        <div className='w-fit flex items-center gap-x-4 '>
        {
            ["Track Order","English","About us","FAQ","Contact"].map((item)=>(
                <div key={item} className='text-[#74787C] text-xs md:text-sm'>{item}</div>
            ))
        }
        </div>

        <div className='hidden md:flex items-center w-fit gap-x-4'>
            <div className='text-xs md:text-sm text-[#74787C]  '>Call Us 24/7:<span className='text-[#885B3A] font-bold'>(1800)-88-66-991</span></div>
            <div className='text-[#74787C] text-xs md:text-sm'>English</div>
            <div className='text-[#74787C] text-xs md:text-sm'>USD</div>
        </div>
      </div>

      <div className='w-full h-[0.5px] mt-2 bg-[#00000014]'/>



    <div className="w-11/12 xl:w-[1200px] mx-auto flex items-center justify-between pt-5 pb-2 ">
        <Image loading="lazy" src="/logo3.png" alt="logo" width={160} height={40} className="w-[75px] md:w-[120px] lg:w-[160px] "/>

        <div className="w-fit hidden lg:flex gap-x-4 items-center">
            <div className="bg-[#F6F6F7] px-4 py-2 rounded-full flex items-center gap-x-1 text-[#1a1a1a]">
                <RiMenu2Fill/>
                <div className="text-xs md:text-sm font-semibold">Categories</div>
            </div>

            <div className="border border-[#E4E5EE] hidden lg:flex lg:justify-between px-3 py-2 lg:min-w-[600px] ">
                <input type="text" className="outline-none border-none text-[#74787C] w-3/4 pl-2 text-xs md:text-sm" placeholder="Search for products, categories or brands"/>
              
                <CiSearch className="text-xl"/>
            </div>
        </div>

        <div className="w-fit flex gap-x-2 items-center">
            

            <div onClick={()=>router.push("/cart")} className=" flex items-center gap-x-2  text-[#999999] font-semibold text-xs md:text-sm cursor-pointer">
                <CiShoppingCart className="text-lg"/>
                <div>${total}</div>

                {
                    (totalItems>0) && <div className="w-[15px] h-[15px] absolute -top-1 right-1 rounded-full bg-green-400 text-black font-bold text-[8px] flex items-center justify-center animate-bounce">{totalItems}</div> 
                }
            </div>

            <CiHeart onClick={()=>router.push("/wishlist")}  className="text-lg text-[#1a1a1a] cursor-pointer"/>

            <CiUser onClick={()=>router.push("/login")} className="text-lg text-[#1a1a1a] cursor-pointer"/>


        </div>


    </div>

    <div className='w-full h-[0.5px] mt-2 bg-[#00000014]'/>


    <div className="w-11/12 xl:w-[1200px] mx-auto hidden lg:flex items-center  ">
    <div className="lg:w-[70%]  flex items-center gap-x-5  py-4 ">
    {
        navRoutes.map((item)=>(
            <div onClick={()=>router.push(item.link)} key={item.id} className="lg:text-[14px] text-[#1a1a1a] font-semibold uppercase cursor-pointer">
                {item.title}
            </div>
        ))
    }
    </div>

    <div className=" lg:w-[30%] flex items-center gap-x-3 justify-center">
        <div className="lg:text-[16px] text-[#1a1a1a] font-semibold">Get 30% Discount Now</div>
        <div className="w-[50px] h-[20px] text-white bg-[#885B3A] rounded-full lg:text-[12px] flex items-center justify-center">
            SALE
        </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar3
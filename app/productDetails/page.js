'use client'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import Image from 'next/image'
import React, { useState } from 'react'
import { CiCircleCheck, CiZoomIn } from 'react-icons/ci'
import { FaArrowRightArrowLeft, FaEye, FaStar, FaVanShuttle } from 'react-icons/fa6'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoBagOutline, IoGitCompareOutline } from 'react-icons/io5'
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaShareAlt } from 'react-icons/fa'
import { MdOutlinePlayCircleOutline } from 'react-icons/md'
import Footer from '@/components/Footer'

const ProductDetails = () => {
    const [count,setCount]=useState(1)
    const [slide,setSlide]=useState(0)

    const decreaseCount=()=>{
        if(count!==0){
            setCount(count-1)
        }
    }
  return (
    <div className='w-full '>
        <Navbar1/>
        <HeroSection text="Product Details" pageName="Product Details"/>

        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
            <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-y-8 '>
                <div className='w-full lg:w-[45%] flex gap-x-4 min-h-[450px] '>
                    <div className='hidden md:flex flex-col gap-y-6 '>
                    {
                        [0,1,2].map((item)=>(
                            <div key={item} className='bg-[#D9D9D9] w-[100px] h-[100px] rounded-md '/> 
                        ))
                    }
                    </div>

                    <div className='w-full md:w-11/12 relative min-h-[450px]'>
                        <Image loading="lazy" src="/product.jpg" alt='product' width={400} height={500} className='w-full min-h-[450px] rounded-md'/>

                        <div className='absolute w-[40px] h-[40px] text-xs font-semibold flex items-center justify-center bg-[#1a1a1a] text-white top-[5%] left-[5%] rounded-full'>
                            Sale
                        </div>
                        <div className='absolute w-[40px] h-[40px] text-xl font-semibold flex items-center justify-center text-[#1a1a1a] bg-white top-[5%] right-[5%] rounded-full'>
                            <CiZoomIn/>
                        </div>


                        <div className='absolute w-[40px] h-[40px] text-xl font-semibold flex items-center justify-center text-[#1a1a1a] bg-white top-[45%] left-[5%] rounded-full'>
                            <IoIosArrowBack />
                        </div>


                        <div className='absolute w-[40px] h-[40px] text-xl font-semibold flex items-center justify-center text-[#1a1a1a] bg-white top-[45%] right-[5%] rounded-full'>
                            <IoIosArrowForward />
                        </div>
                    
                    
                    </div>
                </div>

                <div className='w-full lg:w-[50%]'>
                    <div className='text-[#E53E3E] text-xs font-bold uppercase'>Modern Dress</div>
                    <div className='text-[#1a1a1a] font-bold text-lg md:text-xl lg:text-5xl mt-4'>Tony Gold Neaklaces</div>
                    <div className='flex items-center gap-x-3 text-[#1a1a1a] mt-4'>
                        <div className='flex items-center gap-x-1 text-xs'>
                            {
                                [0,1,2,3,4].map((item)=>(
                                    <FaStar key={item}/>
                                ))
                            }
                        </div>
                        <div>(1 customer review)</div>
                    </div>
                    <div className='font-bold text-[#1a1a1a] text-sm md:text-lg' >$260.00  <span className='font-normal text-[#74787C] text-xs line-through'>$360.00</span></div>

                    <div className='w-full h-[1px] bg-[#EBEBEB] my-6'/>
                    <div className='text-[#74787C] text-xs md:text-sm'>Eget taciti odio cum habitant egestas conubia turpis phasellus, ante parturient donec duis primis nam faucibus augue malesuada venenatis</div>
                    <div className='flex items-center gap-x-3 mt-4 text-[#1a1a1a]'>
                        <FaEye/>
                        <div className='text-sm'>28 people are viewing this right now</div>
                    </div>
                    <div className='w-full h-[1px] bg-[#EBEBEB] my-6'/>
                        
                    <div>
                        <div className='text-[#74787C] text-xs md:text-sm'>Only 15 items left in stock!</div>
                        <div className="w-full bg-[#EBEBEB] rounded-full h-1 mt-2">
                            <div
                                className="bg-[#E53E3E] h-1 rounded-full transition-all duration-300 w-[55%]"
                            ></div>
                        </div>

                    </div>

                    <div className='flex mt-4 flex-col gap-y-3'>
                        <div className='flex items-center gap-x-5 text-[#1a1a1a]'>
                            <FaArrowRightArrowLeft /> 
                            <div className='text-xs md:text-sm'>Free returns</div>    
                        </div>

                        <div className='flex items-center gap-x-5 text-[#1a1a1a]'>
                            <FaVanShuttle />
                            <div className='text-xs md:text-sm'>Free shipping via DHL, fully insured</div>    
                        </div>

                        <div className='flex items-center gap-x-5 text-[#1a1a1a]'>
                            <CiCircleCheck/> 
                            <div className='text-xs md:text-sm'>All taxes and customs duties included</div>    
                        </div>
                    </div>


                    <div className='w-full flex items-center  justify-between mt-8'>

                        <div className='w-fit p-2 rounded-md border border-[#E8E8E8] flex items-center gap-x-3'>
                            <button className='cursor-pointer' onClick={decreaseCount}>-</button>
                            <div>{count}</div>
                            <button className='cursor-pointer' onClick={()=>setCount(count+1)}>+</button>
                        </div>

                        <button className='w-[85%] border border-[#141414] rounded-md py-2 flex justify-center items-center gap-x-2 cursor-pointer uppercase font-semibold'>
                            Add To Cart
                            <IoBagOutline />
                        </button>


                    </div>

                    <div className='w-full py-2 rounded-md text-white mt-4 text-xs md:text-sm cursor-pointer bg-[#E53E3E]  font-semibold uppercase text-center'>
                        Buy The Item Now
                    </div>


                    <div className='flex mt-4  gap-x-5'>
                        <div className='flex items-center gap-x-3 text-[#1a1a1a]'>
                            <IoGitCompareOutline /> 
                            <div className='text-xs md:text-sm'>Compare</div>    
                        </div>

                        <div className='flex items-center gap-x-3 text-[#1a1a1a]'>
                            <AiOutlineExclamationCircle />
                            <div className='text-xs md:text-sm'>Ask a question</div>    
                        </div>

                        <div className='flex items-center gap-x-3 text-[#1a1a1a]'>
                            <FaShareAlt /> 
                            <div className='text-xs md:text-sm'>Share</div>    
                        </div>
                    </div>
                    



                </div>
            </div>
        </div>

        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
            <div>
                <div className='flex gap-x-5'>
                    {
                        ["Description","Additional Information","Reviews"].map((item,index)=>(
                            <div onClick={()=>setSlide(index)} key={item} className={`text-xs cursor-pointer md:text-sm transition-all duration-500 ${(slide===index) ? "text-[#1a1a1a] font-bold" :"text-[#74787C] font-normal"}`}>{item}</div>
                        ))
                    }
                </div>

                <div className='mt-4 bg-[#E8E8E8] h-[0.5px]'/>
            </div>

            <div className='w-full flex flex-col lg:flex-row gap-y-6 lg:justify-between mt-12'>
                <div className='w-full lg:w-1/2 text-[#74787C] text-xs md:text-sm'>
                    <div>Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</div>
                    <div className='mt-4'>Lobortis rhoncus litora pretium tempor mattis proin, auctor dis massa enim himenaeos. Torquent senectus dui vehicula libero cum vitae natoque magna commodo quam</div>
                </div>

                <div className='w-full lg:w-[45%] bg-[#D9D9D9] rounded-md min-h-[200px] flex justify-center items-center'>
                    <MdOutlinePlayCircleOutline className='text-white text-xl md:text-3xl lg:text-5xl' />
                </div>               
            </div>
        </div>

        <Footer color="#E53E3E"/>
    </div>
  )
}

export default ProductDetails
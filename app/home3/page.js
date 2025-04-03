import Footer from '@/components/Footer'
import Navbar3 from '@/components/Navbar3'
import { newsData } from '@/data/HomePage'
import Image from 'next/image'
import React from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaStar, FaTag } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Home3 = () => {
  return (
    <div className='w-full'>
        <Navbar3/>


        {/* hero section  */}
        <div className='w-full bg-[#F3F0E8] min-h-[400px] relative overflow-hidden'>
            <div className='uppercase absolute top-[20%] left-[5%]'>
                <div className='text-lg md:text-xl lg:text-3xl text-[#1a1a1a]'>Ready Item</div>
                <div className='text-lg md:text-xl lg:text-5xl font-bold text-[#1a1a1a] mt-1'>Home Decor</div>
                <div className='mt-4 text-xs md:text-sm text-[#1a1a1a]'>From $299.00</div>

                <button className='border border-[#141414] mt-6 px-3 py-2 text-[#1a1a1a] text-xs md:text-sm uppercase font-bold'>Explore Items</button>
            </div>

            <div className='bg-[#885B3A0F] w-[800px] h-[800px] rounded-full absolute -right-[120%] md:-right-[35%] -top-[40%] lg:-right-[5%] '/>


            <div className='bg-transparent w-[800px] h-[800px] border border-[#885B3A]  rounded-full absolute -right-[150%] md:-right-[45%] -top-[25%] lg:-right-[10%] '/>

        
        </div>

        <div  className="w-11/12 xl:w-[1200px] mx-auto my-12 flex flex-col md:flex-row md:justify-between gap-y-6">
            <div className="w-full md:w-[48%] bg-[#D9D9D9] py-6 pl-12">
                <div className='text-[#885B3A] text-xs font-bold uppercase'>Unique Office Table</div>
                <div className='text-[#1a1a1a] font-bold text-lg md:text-xl xl:text-4xl mt-3'>30% Flat Sale</div>
                <div className='text-[#74787C] text-xs mt-3'>Online Promo Code: <span className='text-[#885B3A] font-bold underline'>70Hot</span></div>

                <button className='bg-[#885B3A] text-white font-bold text-xs md:text-sm px-3 py-2 rounded-md  uppercase mt-6'>
                    Start Shopping
                </button>

                <div className='flex items-center gap-x-4 mt-4 '>
                {
                    ["53 d","23 h","39m","00 s"].map((item)=>(
                        <div key={item} className='border border-[#1A1A1A14] bg-[#F0F0F05E] rounded-md text-[#74787C] text-xs font-semibold p-2'>
                            {item}
                        </div>
                    ))
                }
                </div>
            </div>

       
            <div className="w-full md:w-[48%] bg-[#D9D9D9] py-6 pl-12">
                <div className='text-[#885B3A] text-xs font-bold uppercase'>Unique Office Table</div>
                <div className='text-[#1a1a1a] font-bold text-lg md:text-xl xl:text-4xl mt-3'>10% Flat Sale</div>
                <div className='text-[#1a1a1a] text-xs mt-3'>Save 20% more order more than $2500</div>

                <button className='text-[#885B3A] border border-[#885B3A] bg-white font-bold text-xs md:text-sm px-3 py-2 rounded-md  uppercase mt-6'>
                    Start Shopping
                </button>

                <div className='flex items-center gap-x-4 mt-4 '>
                {
                    ["53 d","23 h","39m","00 s"].map((item)=>(
                        <div key={item} className='border border-[#1A1A1A14] bg-[#F0F0F05E] rounded-md text-[#74787C] text-xs font-semibold p-2'>
                            {item}
                        </div>
                    ))
                }
                </div>
            </div>
        </div>

        {/* featured items */}

        <div className='w-full bg-[#EBEBE9] mt-12 py-12'>
            <div className='w-11/12 xl:w-[1200px] mx-auto '>
                <div className='text-[#1a1a1a] text-sm md:text-lg font-bold text-center'>FEATURED ITEMS</div>
                <div className='w-fit flex items-center gap-x-4 mt-2 mx-auto'>
                {
                    ["hot items","best sellers","on sale","new arrivals"].map((item)=>(
                        <div key={item} className='text-[#1a1a1a] text-xs md:text-sm uppercase font-semibold'>
                            {item}
                        </div>
                    ))
                }

                </div>


                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12'>
                    {
                        [0,1,2,3,4,5,6,7].map((item)=>(
                            <div key={item} className='w-full bg-white rounded-md p-4'>
                                <Image loading="lazy" src="/product.jpg" alt='product' width={200} height={150} className='w-11/12 mx-auto h-[250px] md:[200px] lg:h-[200px]'/>

                                <div className='flex flex-col gap-y-1 mt-4 px-4'>
                                    <div className='text-[#74787C] text-xs'>Table, Office</div>
                                    <div className='text-[#1a1a1a] font-bold text-lg'>Cotton Waiting Chair</div>
                                    <div className="flex items-center gap-x-0">
                                    {
                                        [0,1,2,3,4].map((item)=>(
                                            <FaStar key={item} className="text-[#885B3A] text-[10px]"/>
                                        ))
                                    }
                                    </div>
                                    <div className='mt-3 text-[#1a1a1] text-xs md:text-sm font-bold'>$259.00</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

        <div className='bg-[#D9D9D9] min-h-[450px] w-full relative '>
            <div className='w-[85%] md:w-[75%] lg:w-[60%] h-full bg-[#885B3A] absolute top-0 bottom-0 right-0'>
                <div className='pt-12 pl-6 md:pl-12'>
                    <div className='text-white font-bold text-lg md:text-xl lg:text-3xl uppercase'>We’re online Furniture seller</div>
                    <div className='text-white text-xs md:text-sm mt-2 w-3/4'>Fringilla fames malesuada egestas dui est ultricies ante, nec primis elementum pharetra donec turpis sapien porta senectuss agittis justo consequat</div>
                    
                    <div className='flex items-center gap-x-4 mt-8'>
                        <div className='w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-white rounded-full flex items-center justify-center'>
                            <Image loading="lazy" src="/table.png" alt='table' width={35} height={35} className='h-[20px] w-[20px] md:h-[35px] md:w-[35px] '  />
                        </div>

                        <div className='flex flex-col gap-y-1'>
                            <div className='text-white uppercase text-sm md:text-lg font-bold'>Pure Furnished Table</div>
                            <div className='text-white text-xs md:text-sm w-3/4 leading-6'>Understanding the sometimes harmful methods of modern agriculture, we started a niche for quality</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4 mt-2'>
                        <div className='w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-white rounded-full flex items-center justify-center'>
                            <Image loading="lazy" src="/chat.png" alt='table' width={35} height={35} className='h-[20px] w-[20px] md:h-[35px] md:w-[35px]'  />
                        </div>

                        <div className='flex flex-col gap-y-1'>
                            <div className='text-white uppercase text-sm md:text-lg font-bold'>24/7 Support Services</div>
                            <div className='text-white text-xs md:text-sm w-3/4 leading-6'>Understanding the sometimes harmful methods of modern agriculture, we started a niche for quality</div>
                        </div>
                    </div>

                    <div className='flex items-center gap-x-4 mt-2'>
                        <div className='w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-white rounded-full flex items-center justify-center'>
                            <Image loading="lazy" src="/discount.png" alt='table' width={35} height={35} className='h-[20px] w-[20px] md:h-[35px] md:w-[35px]'  />
                        </div>

                        <div className='flex flex-col gap-y-1'>
                            <div className='text-white uppercase text-sm md:text-lg font-bold'>Offers And Discounts</div>
                            <div className='text-white text-xs md:text-sm w-3/4 leading-6'>Understanding the sometimes harmful methods of modern agriculture, we started a niche for quality</div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>

        {/* shop popular  */}
        <div className='w-11/12 xl:w-[1200px] mx-auto my-12 bg-[#EBEBE9] p-4 rounded-md'>
            <div className='text-[#1a1a1a] text-sm md:text-lg font-bold'>SHOP POPULAR</div>

            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                    {
                        [0,1,2,3].map((item)=>(
                            <div key={item} className='w-full bg-white rounded-md p-4'>
                                <Image loading="lazy" src="/product.jpg" alt='product' width={200} height={150} className='w-11/12 mx-auto h-[250px] md:[200px] lg:h-[200px]'/>

                                <div className='flex flex-col gap-y-1 mt-4 px-4'>
                                    <div className='text-[#74787C] text-xs'>Table, Office</div>
                                    <div className='text-[#1a1a1a] font-bold text-lg'>Cotton Waiting Chair</div>
                                    <div className="flex items-center gap-x-0">
                                    {
                                        [0,1,2,3,4].map((item)=>(
                                            <FaStar key={item} className="text-[#885B3A] text-[10px]"/>
                                        ))
                                    }
                                    </div>
                                    <div className='mt-3 text-[#1a1a1] text-xs md:text-sm font-bold'>$259.00</div>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </div>

        {/* happy customers */}
        <div className='w-full my-12 py-12 bg-[#885B3A] '>
            <div className='text-white text-sm md:text-lg font-bold text-center'>HAPPY CUSTOMERS</div>

            <div className='w-11/12 xl:w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                    {
                        [0,1,2].map((item)=>(
                            <div key={item} >
                                <div className='w-full bg-white p-6 rounded-md relative'>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='text-[#1a1a1a] text-xs md:text-sm  font-bold'>Product Quality</div>
                                        <div className="flex items-center gap-x-1">
                                        {
                                            [0,1,2,3,4].map((item)=>(
                                                <FaStar key={item} className="text-[#885B3A] text-[10px]"/>
                                            ))
                                        }
                                        </div>
                                    </div>
                                    <div className='mt-4 text-[#74787C] text-xs md:text-sm'>“This is genuinely the first theme bought for which i did not had to write one line of ode. I would recommend everybody“</div>
                                    

                                    <Image loading="lazy" src="/arrow.png" alt='arrow' width={40} height={20} className='absolute -bottom-4 left-20'/>
                                </div>

                                <div className='mt-8 pl-4 flex items-center gap-x-4'>
                                    <Image loading="lazy" src="/profile.png" alt='profile' width={50} height={50} className='rounded-full object-cover h-[50px] w-[50px]'/>
                                    
                                    <div className='text-white'>
                                        <div className='text-sm md:text-lg font-bold'>Alaxis D. Dowson</div>
                                        <div className='text-xs'>Head Of Idea</div>
                                    </div>
                                
                                </div>
                            </div>
                        ))
                    }
            </div>

        </div>
        
        {/* latest news  */}
        <div className="w-11/12 xl:w-[1200px] mx-auto my-12">
            <div className="text-[#1a1a1a] text-center text-sm md:text-xl lg:text-3xl font-bold uppercase ">Our Latest News Insight</div>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-4">
                {
                newsData.map((item)=>(
                    <div key={item.id} className="shadow-sm">
                    <Image loading="lazy" src="/Vector.png" alt="vector" width={350} height={200} className="w-full h-[200px] lg:h-[150px]" />
    
                    <div className="w-[85%] mx-auto mt-4">
                        <div className="flex items-center gap-x-4 uppercase">
                        <div className="flex items-center gap-x-1">
                            <FaCalendarAlt className="text-[#E53E3E] text-sm"/>
                            <div className="text-[#74787C] text-[10px] lg:text-[12px]">{item.date}</div>
                        </div>
    
                        <div className="flex items-center gap-x-1">
                            <FaTag className="text-[#E53E3E] text-sm"/>
                            <div className="text-[#74787C] text-[10px] lg:text-[12px]">oil Change</div>
                        </div>
                        </div>
    
                        <div className="uppercase mt-3 text-[#1a1a1a] font-bold text-sm lg:text-xl">{item.title}</div>
                        <div className="h-[0.5px] mt-6 w-full bg-[#EAEAEA]"/>
    
    
                        <div className="flex items-center gap-x-2 text-[#E53E3E] mt-2 mb-4">
                        <div className="">Read More</div>
                        <IoIosArrowRoundForward/>
                        </div>
                    </div>
                    </div>
                ))
                }
            </div>
        </div>

        <Footer color="#885B3A"/>



    </div>
  )
}

export default Home3
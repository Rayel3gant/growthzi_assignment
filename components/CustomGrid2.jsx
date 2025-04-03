import React from 'react'
import ProductCard2 from './ProductCard2'
import Image from 'next/image'
import { GoPlus } from 'react-icons/go'
import { CiHeart } from 'react-icons/ci'
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const CustomGrid2 = () => {
  return (
    <div className='w-full flex flex-wrap justify-center mt-6 gap-4 lg:flex-nowrap'>
      {/* Left Section */}
      <div className='w-full xl:w-[30%] flex flex-row flex-wrap xl:flex-nowrap   xl:flex-col gap-4'>
        {[0, 1, 2].map((item) => (
          <ProductCard2 key={item} />
        ))}
      </div>

      {/* Center Section */}
      <div className='w-full xl:w-[35%] bg-white rounded-md min-h-[400px]'>
        <div className='relative'>
          <Image 
            src='/product.jpg' 
            alt='product' 
            width={350} 
            height={250} 
            className='w-[75%] min-h-[300px] lg:h-[325px] mx-auto my-4' 
            loading="lazy"
          />
          <div className='flex flex-col items-center gap-y-4 bg-[#F6F6F7] rounded-full px-2 py-4 w-fit absolute top-[5%] right-[20%]'>
            <div className='bg-[#67B02E] text-white w-[25px] h-[25px] rounded-full flex justify-center items-center'>
              <GoPlus />
            </div>
            <button>
              <CiHeart />
            </button>
            <button>
              <FaArrowRightArrowLeft />
            </button>
          </div>
        </div>

        <div className='mt-4 px-4'>
          <div className='bg-[#67B02E1A] text-[#67B02E] px-3 py-1 font-semibold rounded-md uppercase text-xs w-fit'>Nescafe USA</div>
          <div className='text-[#1a1a1a] font-bold text-xs mt-1'>Hillshire Farm Thin Sliced Honey Deli Lunch Meat</div>
          <div className='text-[#74787C] text-xs mt-1'>9 oz Pack</div>
          <div className='text-[#74787C] text-xs md:text-sm font-semibold mt-1'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent Vivamus adipiscing nisl.</div>
          <div className='text-[#DC2626] text-lg font-extrabold mt-3'>
            $36.00 <span className='text-[#1a1a1a] ml-2 text-sm line-through'>$40.00</span>
          </div>
        </div>

        <div className='w-full h-[0.5px] bg-[#1A1A1A14] mt-2' />

        <div className='flex flex-col gap-y-1 px-4 mt-2 py-2'>
          <div className='text-[#1a1a1a] text-xs md:text-sm font-semibold'>In Stock</div>
          <div className='w-full bg-gray-200 rounded-full h-2'>
            <div className='bg-[#DC2626] h-2 rounded-full transition-all duration-300' style={{ width: '65%' }}></div>
          </div>
          <div className='text-[#74787C] text-xs'>Available: <span className='text-[#1a1a1a] text-sm font-semibold'>250</span></div>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-full xl:w-[30%] flex flex-row flex-wrap xl:flex-nowrap   xl:flex-col gap-4'>
        {[0, 1, 2].map((item) => (
          <ProductCard2 key={item} />
        ))}
      </div>
    </div>
  )
}

export default CustomGrid2
import Image from 'next/image'
import React from 'react'

const ProductCard = ({type}) => {
  return (
    <div className='bg-white rounded-md '>
        <div className='p-4'>
            <Image loading="lazy" src="/product.jpg" className='w-11/12 mx-auto rounded-xs h-[250px] md:h-[150px]' width={150} height={100}/>

            <div className='mt-6'>
                <div className='bg-[#67B02E1A] text-[#67B02E] px-3 py-2 rounded-md uppercase text-xs w-fit'>Nescafe USA</div>
                <div className='text-[#1a1a1a] font-bold text-xs  mt-1'>Hillshire Farm Thin Sliced Honey Deli Lunch Meat</div>
                <div className='text-[#74787C] text-xs mt-1'>9 oz Pack</div>

                <div className='text-[#DC2626] text-lg font-extrabold mt-3'>
                    $36.00 <span className='text-[#1a1a1a]  ml-2 text-sm line-through'>$40.00 </span>
                </div>
            </div>
        </div>

        <div className='w-full h-[0.5px] bg-[#1A1A1A14]'/>

        <div className='px-4 py-2'>
            {
                (type===1)? (
                    <div className='flex flex-col gap-y-1'>
                        <div className='text-[#1a1a1a] text-xs md:text-sm font-semibold'>In Stock</div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-[#DC2626] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${65}%` }}
                            ></div>
                        </div>

                        <div className='text-[#74787C] text-xs'>Available: <span className='text-[#1a1a1a] text-sm font-semibold'>250</span></div>
                    </div>
                ) : (
                    <div className=' uppercase text-[#67B02E] text-sm :md:text-lg text-center font-semibold'>
                        Add to cart
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default ProductCard
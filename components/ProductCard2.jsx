import React from 'react'

const ProductCard2 = () => {
  return (
    <div className='border border-[#1A1A1A14] rounded-md w-full min-w-[350px] min-h-[200px] flex bg-white '>
        <div className='h-full w-[55%] border-r-1 border-[#1A1A1A14] relative'>
            <div className='text-[#74787C] pt-2 pl-2 text-xs  uppercase'>Delivery 9 MINS</div>

            <div className='flex flex-col gap-y-3 absolute top-2 right-[5%]'>
            {
                ["53 d","23 h","39m","00 s"].map((item)=>(
                    <div key={item} className='border border-[#1A1A1A14] bg-[#F0F0F05E] rounded-md text-[#74787C] text-xs font-semibold p-2'>
                        {item}
                    </div>
                ))
            }
            </div>
        </div>

        <div className='h-full w-[45%]  '>
             <div className='mt-4 pl-2 '>
                <div className='bg-[#67B02E1A] text-[#67B02E] px-3 py-1 font-semibold rounded-md uppercase text-xs w-fit'>Nescafe USA</div>
                <div className='text-[#1a1a1a] font-bold text-xs  mt-1'>Hillshire Farm Thin Sliced Honey Deli Lunch Meat</div>
                <div className='text-[#74787C] text-xs mt-1'>9 oz Pack</div>

                <div className='text-[#DC2626] text-lg font-extrabold mt-3'>
                    $36.00 <span className='text-[#1a1a1a]  ml-2 text-sm line-through'>$40.00 </span>
                </div>
            </div>

            <div className='w-full h-[0.5px] bg-[#1A1A1A14] mt-2'/>


            <div className=' uppercase text-[#67B02E] text-sm :md:text-lg text-center font-semibold mt-2'>
                Add to cart
            </div>
        </div>
    </div>
  )
}

export default ProductCard2
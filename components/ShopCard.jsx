import { addToCart } from '@/lib/redux/slices/cartSlice'
import { addToWishlist } from '@/lib/redux/slices/wishlistSlice'
import { useRouter } from 'next/navigation'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaEye, FaStar } from 'react-icons/fa6'
import { IoBagOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'

const ShopCard = ({data}) => {
    const router=useRouter()
    const dispatch=useDispatch()
    const add2cart=()=>{
        dispatch(addToCart(data))
    }


    const add2wishlist=()=>{
        dispatch(addToWishlist(data))
    }

    const viewMore=()=>{
        router.push("/productDetails")
    }
  return (
    <div className="relative w-full bg-white rounded-md group overflow-hidden border border-[#E8E8E8]">
        <div className="w-full bg-[#D9D9D9] min-h-[300px] relative">
            {/* Buttons (hidden by default, shown on hover) */}
            <div className="absolute top-[5%] right-[5%] flex flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <button onClick={add2cart} className='cursor-pointer w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                    <IoBagOutline />
                </button>
                <button onClick={add2wishlist} className='cursor-pointer w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                    <CiHeart/>
                </button>
                <button onClick={viewMore} className='cursor-pointer w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center'>
                    <FaEye/>
                </button>
            </div>

            <div className='absolute top-[5%] left-[5%] px-2 py-1 rounded-full text-white text-[8px] font-bold bg-[#E53E3E]'>NEW</div>

        </div>

        <div className="p-4 flex flex-col gap-y-2">
            <div className="text-xs text-[#74787C] uppercase">{data.category}</div>
            <div className="font-bold text-[#1a1a1a] text-sm md:text-lg">{data.title}</div>
            <div className="flex w-fit gap-x-3 items-center">
                <div className="flex w-fit gap-x-1 items-center text-[#E53E3E]">
                    {[0, 1, 2, 3, 4].map((item) => (
                        <FaStar key={item} className="text-sm" />
                    ))}
                </div>
                <div className="text-[#74787C] text-xs">( {data.rating.count} reviews)</div>
            </div>
            <div className="text-[#1a1a1a] font-bold text-sm md:text-lg">$ {data.price}</div>
        </div>
    </div>

  )
}

export default ShopCard
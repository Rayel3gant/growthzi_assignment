'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import { addToCart } from '@/lib/redux/slices/cartSlice'
import { removeFromWishlist } from '@/lib/redux/slices/wishlistSlice'
import React from 'react'
import { IoBagOutline } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

const Pagelist = () => {
    const { wishlist }=useSelector((state)=>state.wishlist)
    const dispatch=useDispatch()


    const addHandler=(item)=>{
        removeHandler(item.id)
        dispatch(addToCart(item))
    }

    const removeHandler=(id)=>{
        dispatch(removeFromWishlist(id))
    }
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Wishlist" pageName="Wishlist" />

        <div className="w-11/12 xl:w-[1200px] mx-auto my-12">
            <>
            {
                (wishlist.length===0)?(
                    <div className='w-full h-[200px] flex items-center justify-center text-black font-bold text-sm md:text-lg lg:text-3xl'>
                        Wishlist is Empty!!!
                    </div>
                ): (
                    <div className="overflow-x-auto bg-[#F6F6F6]">
                        <table className="min-w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                            <thead>
                                <tr className=" border border-gray-300 text-[#7B7E86] uppercase font-semibold text-xs lg:text-sm">
                                    <th className="px-4 py-2 text-center border border-gray-300 ">Product Name</th>
                                    <th className="px-4 py-2 text-center border border-gray-300">Price</th>
                                    <th className="px-4 py-2 text-center border border-gray-300">Stock</th>
                                    <th className="px-4 py-2 text-center border border-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {wishlist.map((item, index) => (
                                <tr key={index} className="border border-gray-300 ">
                                    <td className="px-4 py-2  flex items-center gap-x-3">
                                        <div className='h-[75px] w-[75px] bg-white rounded-md'/>
                                        <div>{item.title}</div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-300 text-black font-bold text-xs text-center lg:text-sm">${item.price}</td>
                                    <td className="px-4 py-2 border border-gray-300 text-center">
                                        <span className={
                                        item.stock > 0 ? "text-green-600" : "text-red-600"
                                        }>
                                        {item.stock > 0 ? "In Stock" : "Out of Stock"}
                                        </span>
                                    </td>
                                    <td className=" ">
                                        <div className='flex items-center w-fit mx-auto gap-x-4'>
                                            <button onClick={()=>addHandler(item)} className="w-[50px] h-[50px] bg-[#E53E3E] cursor-pointer rounded-full flex items-center justify-center text-white px-4 py-2 ">
                                                <IoBagOutline className='text-xl'/>
                                            </button>

                                            <button onClick={()=>removeHandler(item.id)} className="w-[50px] h-[50px] text-[#E53E3E] cursor-pointer rounded-full flex items-center justify-center bg-white px-4 py-2 ">
                                                <MdDelete className='text-xl'/>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
            </>
        </div>


        <Footer color="#E53E3E" />
    </div>
  )
}

export default Pagelist
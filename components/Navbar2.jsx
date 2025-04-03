"use client"
import Image from "next/image";
import { CiHeart, CiLocationOn, CiShoppingCart } from "react-icons/ci";

import { RiMenu2Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import CustomMenu from "./CustomMenu";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { navRoutes2 } from "@/data/HomePage";
const Navbar2 = () => {
    const router=useRouter()
    const { total} =useSelector((state)=>state.cart)
  return (
    <div className='w-full'>
        <div className="w-full h-[3px] bg-[#67B02E]"/>
        <div className=' bg-white w-full py-2   '>
            <div className='w-11/12 xl:w-[1200px] mx-auto flex items-center justify-between'>
                <div className='w-fit hidden md:flex items-center gap-x-6 text-[#74787C] text-[10px] md:text-[12px] xl:text-[14px]'>
                    <div>About us</div>
                    <div>My Account</div>
                    <div>Wishlist</div>
                    <div>Order Tracking</div>
                </div>

                <div className="relative block md:hidden">
                    <CustomMenu data={navRoutes2} color="#67B02E"/>
                </div>

                <div className='text-[#74787C] text-[10px] xl:text-[14px]'>
                    Need help? Call Us: +258 3268 21485
                </div>

            
            </div>
        </div>

        <div className="bg-[#E4E5EE] w-full h-[0.5px] mt-1"/>

        <div className="w-11/12 xl:w-[1200px] mx-auto flex items-center justify-between pt-5 pb-2 ">
            <Image loading="lazy" src="/logo2.png" alt="logo" width={160} height={40} className="w-[75px] md:w-[120px] lg:w-[160px] "/>

            <div className="w-fit hidden lg:flex gap-x-4 items-center">
                <div className="bg-[#F6F6F7] px-4 py-2 rounded-full flex items-center gap-x-1 text-[#1a1a1a]">
                    <RiMenu2Fill/>
                    <div className="text-xs md:text-sm font-semibold">Categories</div>
                </div>

                <div className="border border-[#E4E5EE] hidden lg:flex lg:justify-between px-3 py-1 lg:min-w-[400px] rounded-full">
                    <input type="text" className="outline-none border-none text-[#74787C] w-3/4 pl-2 text-xs md:text-sm" placeholder="Search for products, categories or brands"/>

                    <button className="bg-[#67B02E] text-white px-3 py-1 rounded-full cursor-pointer flex items-center gap-x-1 text-xs md:text-sm">
                        <div className="text-xs">SEARCH</div>
                        <CiSearch className="text-xl"/>
                    </button>
                </div>
            </div>

            <div className="w-fit flex gap-x-2 items-center">
                <div onClick={()=>router.push("/wishlist")} className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] rounded-full flex items-center justify-center bg-[#F1F1F1] cursor-pointer">
                    <CiHeart className="text-lg text-[#1a1a1a]"/>
                </div>

                <div onClick={()=>router.push("/register")} className="bg-[#F1F1F1] px-5 py-2 rounded-full text-[#1a1a1a] text-xs md:text-sm cursor-pointer">
                    Login / Register
                </div>

                <div onClick={()=>router.push("/cart")} className="bg-[#67B02E] px-5 py-2 hidden lg:flex items-center gap-x-2 rounded-full text-white font-semibold text-xs md:text-sm cursor-pointer">
                    <CiShoppingCart className="text-lg"/>
                    <div>${total}</div>
                </div>



            </div>


        </div>

        


        <div className="bg-[#67B02E] w-full">
            <div className="w-11/12 xl:w-[1200px] mx-auto hidden lg:flex items-center  ">
                <div className="lg:w-[60%]  flex items-center gap-x-5  py-4 ">
                {
                    navRoutes2.map((item)=>(
                        <div onClick={()=>router.push(item.link)} key={item.id} className="lg:text-[12px] text-white uppercase font-semibold cursor-pointer">
                            {item.title}
                        </div>
                    ))
                }
                </div>

                <div className="lg:w-[40%] flex items-center gap-x-3 justify-center py-3.5">

                    <div className="flex items-center gap-x-2 text-white">
                        <CiLocationOn className="text-lg"/>
                        <div className="lg:text-[16px] ">Find Location</div>
                    </div>

                    <div className="text-white">|</div>
                    <div className="flex items-center gap-x-2">
                        <div className="lg:text-[16px] text-white">Get 30% Discount Now</div>
                        <div className="w-[50px] h-[20px] text-[#67B02E] font-semibold bg-white rounded-full lg:text-[12px] flex items-center justify-center">
                            SALE
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default Navbar2
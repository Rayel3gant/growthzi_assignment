"use client"
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { navRoutes } from "@/data/HomePage";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import CustomMenu from "./CustomMenu";



const Navbar1 = () => {
    const { cart , total , totalItems} =useSelector((state)=>state.cart)

    const router=useRouter()
  return (
    <div className='w-full'>
      <div className=' bg-[#E53E3E] w-full py-2   '>
        <div className='w-11/12 xl:w-[1200px] mx-auto flex items-center justify-between'>
            <div className='w-fit hidden md:flex items-center gap-x-2 text-white text-[10px] md:text-[12px] xl:text-[14px]'>
                <div>About</div>
                <div>My Account</div>
                <div>Wishlist</div>
                <div>Checkout</div>
            </div>

            <div className="relative block md:hidden">
                <CustomMenu data={navRoutes} color="#E53E3E"/>
            </div>
 
            <div className='text-white text-[10px] xl:text-[14px]'>
                Free shipping for all orders of 150$
            </div>


            <div className='w-fit hidden md:flex items-center gap-x-2 text-white text-[10px] md:text-xs xl:text-[14px]'>
                <div>Store Location</div>
                <div>|</div>
                <div className="flex items-center gap-x-1">Language <IoIosArrowDown/></div>
                <div>|</div>
                <div className="flex items-center gap-x-1">Currency <IoIosArrowDown/></div>
            </div>

           
        </div>
      </div>

      <div className="w-11/12 xl:w-[1200px] mx-auto flex items-center justify-between pt-5 pb-2 ">
        <Image loading="lazy" src="/logo.png" alt="logo" width={160} height={40} className="w-[75px] md:w-[120px] lg:w-[160px] "/>

        <div className="border border-[#e8e8e8] w-[275px] md:w-[500px] lg:w-[600px] justify-between    flex items-center py-1 md:py-2 px-1 sm:px-3">
            <div className="w-fit flex items-center gap-x-2" >
                <div className="flex items-center gap-x-1 text-[8px] md:text-xs lg:text-[14px] text-black">All Categories <IoIosArrowDown/></div>
                <div className="text-black">|</div>
            </div>
            <input type="text" className="outline-none border-none text-black ml-2 w-[40%] lg:w-[35%] text-[8px] md:text-xs " placeholder="Search Keywords..."/>
            
            <button className="bg-[#E53E3E] text-white w-fit text-[8px] md:text-[10px] lg:text-[12px] px-1 md:px-3 py-2 cursor-pointer">
                SEARCH HERE
            </button>
        </div>


        <div className="hidden xl:flex items-center gap-x-2">
            <div className="flex items-center gap-x-3">
                <div className="flex flex-col items-end">
                    <div className="text-[#74787C] lg:text-[14px]">Call Us Now:</div>
                    <div className="text-[#1a1a1a] lg:text-[16px]">+(258) 2159-2159</div>
                </div>

                <div className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#F5F6F2]">
                    <FiPhone className="text-[#1a1a1a] lg:text-[16px]"/>
                </div>
            </div>

            <div>|</div>

            <div onClick={()=>router.push("/wishlist")} className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#F5F6F2] cursor-pointer">
                <CiHeart className="text-[#1a1a1a] lg:text-[16px]"/>
            </div>

            <div>|</div>

            <div className="flex items-center gap-x-3">               
                <div onClick={()=>router.push("/cart")} className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#F5F6F2] relative cursor-pointer">
                    <IoBagOutline className="text-[#1a1a1a] lg:text-[16px]"/>

                    {
                        (totalItems>0) && <div className="w-[15px] h-[15px] absolute -top-1 right-1 rounded-full bg-green-400 text-black font-bold text-[8px] flex items-center justify-center animate-bounce">{totalItems}</div> 
                    }
                </div>

                <div className="flex flex-col items-start">
                    <div className="text-[#74787C] lg:text-[14px]">Your cart:</div>
                    <div className="text-[#1a1a1a] lg:text-[16px]">${total}</div>
                </div>
            </div>


        </div>


      </div>
    
    {/* item 3  */}
      <div className="w-11/12 xl:w-[1200px] mx-auto hidden lg:flex lg:-mt-6 items-center rounded-md overflow-hidden transform translate-y-8 relative z-10">
        <div className="lg:w-[70%] bg-black flex items-center gap-x-5 pl-5 py-4 ">
        {
            navRoutes.map((item)=>(
                <div onClick={()=>router.push(item.link)} key={item.id} className="lg:text-[14px] text-white uppercase cursor-pointer">
                    {item.title}
                </div>
            ))
        }
        </div>

        <div className="bg-[#E53E3E] lg:w-[30%] flex items-center gap-x-3 justify-center py-3.5">
            <div className="lg:text-[16px] text-white">Get 30% Discount Now</div>
            <div className="w-[50px] h-[20px] text-[#E53E3E] bg-white rounded-full lg:text-[12px] flex items-center justify-center">
                SALE
            </div>
        </div>
      </div>
    </div> 
  )
}

export default Navbar1
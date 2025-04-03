'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import { removeFromCart } from '@/lib/redux/slices/cartSlice'
import { useRouter } from 'next/navigation'
import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const { cart , total } =useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  const router=useRouter()

  const deleteHandler=(id)=>{
    dispatch(removeFromCart(id))
  }
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Cart" pageName="Cart Page"/>

        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
          {
            (cart.length===0)? (
              <div className='w-full min-h-[200px] flex justify-center items-center font-bold tracking-widest text-lg md:text-xl lg:text-3xl'>
                CART IS EMPTY!!!
              </div>
            ) : (
              <div className='w-full flex flex-col lg:flex-row gap-y-6 lg:justify-between'>
                <div className='w-full lg:w-[65%]'>
                  <div className='w-full bg-[#F6F6F7] rounded-md p-6 lg:p-8 flex flex-col gap-y-2'>
                    <div  className='text-black font-bold text-xs md:text-sm '>Add <span className='text-[#E53E3E]'>$59.69</span> to cart and get free shipping</div>
                    <div className="w-full bg-[#EBEBEB] rounded-full h-1 mt-2">
                      <div
                          className="bg-[#E53E3E] h-1 rounded-full transition-all duration-300 w-[55%]"
                      ></div>
                    </div>
                  </div>


                  <div className="w-full mt-6 overflow-x-auto bg-[#F6F6F7]">
                    <table className="min-w-full border-collapse border border-gray-300  rounded-lg">
                      <thead>
                        <tr className=" py-2 px-4 rounded-md font-semibold text-left border-b border-gray-300 text-[#74787C] text-xs lg:text-xs uppercase">
                          <th className="py-2 px-4 text-center">Product</th>
                          <th className="py-2 px-4 text-center">Price</th>
                          <th className="py-2 px-4 text-center">Quantity</th>
                          <th className="py-2 px-4 text-center">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id} className="  border-b border-gray-300">
                            <td className="py-2 px-4 flex  items-center gap-x-2">
                              <div className="w-[80px] h-[80px] bg-white rounded-md" />
                              <div className="text-sm lg:text-base text-center">{item.title}</div>
                            </td>
                            <td className="py-2 px-4 text-sm lg:text-base text-center">${item.price}</td>
                            <td className="py-2 px-4 text-center text-sm lg:text-base">1</td>
                            <td >
                              <div className=" text-sm lg:text-base  flex ">
                                <button 
                                  onClick={() => deleteHandler(item.id)} 
                                  className="w-[40px] mx-auto h-[40px] bg-red-500 text-white flex items-center justify-center rounded-md cursor-pointer"
                                >
                                  <MdDelete className="text-xl" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    <div className='w-11/12 mx-auto flex flex-col gap-y-4 md:flex-row md:justify-between my-6'>
                      <div className='w-full md:w-3/4  gap-x-4 flex items-center'>
                        <input type='text' className='outline-none w-[45%] md:w-[60%] rounded-md bg-white p-2 border border-[#E8E8E8]' placeholder='coupon code'/>

                        <button className='bg-white border border-[#141414] px-2 md:px-4 py-2 rounded-md text-black font-bold cursor-pointer uppercase text-xs md:text-sm'>
                          Apply coupon
                        </button>
                      </div>

                      <button className='bg-[#E53E3E] px-4 py-2 rounded-md text-white font-bold cursor-pointer uppercase text-xs md:text-sm'>
                        UPDATE CART
                      </button>
                    </div>
                  </div>


                </div>
                

                {/* cart total  */}
                <div className='w-full lg:w-[30%] bg-[#F6F6F7] py-6 rounded-md lg:h-fit '>
                    <div className='px-6 text-black font-bold text-sm lg:text-lg'>Cart Total</div>
                    <div className='w-full my-4 h-[0.5px] bg-[#E8E8E8]'/>

                    <div className='w-full flex px-6 items-center justify-between'>
                      <div className='w-[35%] text-[#74787C] text-xs md:text-sm'>
                        Subtotal
                      </div>

                      <div className='w-[60%] text-black text-xs md:text-sm font-bold'>
                        ${total}
                      </div>
                    </div>

                    <div className='w-full my-4 h-[0.5px] bg-[#E8E8E8]'/>

                    <div className='w-full flex px-6 items-start justify-between'>
                      <div className='w-[35%] text-[#74787C] text-xs md:text-sm'>
                        Shipping
                      </div>

                      <div className='w-[60%] '>
                        <div className='text-black text-xs md:text-sm w-full'>
                          {["Free Shipping", "Flat Rate", "Local Pickup"].map((item, index) => (
                            <div key={index} className='flex items-center gap-x-4'>
                              <input 
                                id={`shipping-${index}`} 
                                type='radio' 
                                name='shippingMethod' 
                                className="w-4 h-4 cursor-pointer accent-black" 
                              />
                              <label htmlFor={`shipping-${index}`} className='cursor-pointer'>{item}</label>
                            </div>
                          ))}
                        </div>

                        <div className='text-xs lg:text-sm mt-4 text-[#74787C]'>Shipping options will be updated during checkout</div>
                        <div className='text-black lg:text-sm mt-2 text-xs'>Calculate shipping</div>
                      </div>


                    </div>


                    <div className='w-full my-4 h-[0.5px] bg-[#E8E8E8]'/>


                    <div className='w-full flex px-6 items-center justify-between'>
                      <div className='w-[35%] text-[#74787C] text-xs md:text-sm'>
                        Total
                      </div>

                      <div className='w-[60%] text-black text-xs md:text-sm font-bold'>
                        ${total}
                      </div>
                    </div>


                    <div className='px-6'>
                      <button onClick={()=>router.push("/checkout")} className='w-full cursor-pointer bg-[#E53E3E]  text-white font-bold uppercase py-2 rounded-md mt-6'>
                          proceed to checkout
                      </button>
                    </div>


                </div>
              </div>
            )
          }

        </div>


        <Footer color="#E53E3E"/>

    </div>
  )
}

export default Cart
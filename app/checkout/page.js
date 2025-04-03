'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
    "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
    "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu", "Lakshadweep",
    "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
];
const paymentOptions = ["UPI", "Net Banking", "Cash on Delivery"];

const Checkout = () => {
    const router=useRouter()
    const { register , handleSubmit, formState:{errors}}=useForm()
    const { cart , total } =useSelector((state)=>state.cart)
    const formRef = useRef(null);

    const submitHandler=(data)=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar1/>
        <HeroSection text="Checkout" pageName="Checkout" />

        <div className="w-11/12 xl:w-[1200px] mx-auto my-12">
            <button onClick={()=>router.push("/login")} className='bg-[#E53E3E] w-full rounded-md text-white text-xs lg:text-sm py-3 px-4 text-left font-semibold cursor-pointer'>
                Returning customers? Click here to login
            </button>

            <button  className='bg-white w-full mt-6 rounded-md text-black border border-[#E9E9E9] text-xs lg:text-sm py-3 px-4 text-left font-semibold cursor-pointer'>
                Have a coupon? Click here to enter your code
            </button>

            <div className='w-full flex flex-col lg:flex-row gap-y-8 lg:justify-between mt-12'>
                {/* billing details  */}
                <div className='w-full lg:w-[60%]'>
                    <div className='text-black font-bold text-sm lg:text-lg '>Billing Details</div>


                    <form ref={formRef} onSubmit={handleSubmit(submitHandler)} className='mt-6 flex flex-col gap-y-4'>
                        <div className="w-full">
                            <label htmlFor='email' className='text-[#74787C] text-[8px] md:text-xs'>Email Address*</label>
                        
                            <input
                                type="email"
                                id="subject"
                                name="subject"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("email", { required: "Email is required" })}
                            />
                            {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                        </div>


                        <div className='w-full flex items-center justify-between'>
                            <div className="w-[47.5%]">
                                <label htmlFor='firstName' className='text-[#74787C] text-[8px] md:text-xs'>First Name*</label>
                            
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                    {...register("firstName", { required: "First Name is required" })}
                                />
                                {errors.firstName && <span className="text-red-500 text-xs">{errors.firstName.message}</span>}
                            </div>


                            <div className="w-[47.5%]">
                                <label htmlFor='lastName' className='text-[#74787C] text-[8px] md:text-xs'>Last Name*</label>
                            
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                    {...register("lastName", { required: "Last Name is required" })}
                                />
                                {errors.lastName && <span className="text-red-500 text-xs">{errors.lastName.message}</span>}
                            </div>
                        </div>

                        <div className="w-full">
                            <label htmlFor='company' className='text-[#74787C] text-[8px] md:text-xs'>Company Name (Optional)</label>
                        
                            <input
                                type="text"
                                id="company"
                                name="company"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("company")}
                            />
                        </div>

                        <div className="w-full">
                            <label htmlFor='country' className='text-[#74787C] text-[8px] md:text-xs'>Country / Region*</label>
                        
                            <input
                                type="text"
                                id="country"
                                name="country"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("country", { required: "Country / Region is required" })}
                            />
                            {errors.country && <span className="text-red-500 text-xs">{errors.country.message}</span>}
                        </div>

                        <div className="w-full">
                            <label htmlFor='address' className='text-[#74787C] text-[8px] md:text-xs'>Address*</label>
                        
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("address", { required: "Address is required" })}
                            />
                            {errors.address && <span className="text-red-500 text-xs">{errors.address.message}</span>}
                        </div>


                        <div className="w-full">
                            <label htmlFor='city' className='text-[#74787C] text-[8px] md:text-xs'>Town / City*</label>
                        
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("city", { required: "Town /City is required" })}
                            />
                            {errors.city && <span className="text-red-500 text-xs">{errors.city.message}</span>}
                        </div>


                        <div className="w-full">
                            <label htmlFor="state" className="text-[#74787C] text-[8px] md:text-xs">State*</label>

                            <select
                                id="state" name="state"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4 "
                                {...register("state", { required: "State is required" })}
                            >
                                <option value="">Select a state</option>
                                {states.map((state) => (
                                    <option key={state} value={state}>{state}</option>
                                ))}
                            </select>

                            {errors.state && (
                                <span className="text-red-500 text-xs">{errors.state.message}</span>
                            )}
                        </div>

                        <div className="w-full">
                            <label htmlFor="zipcode" className="text-[#74787C] text-[8px] md:text-xs">Zip Code*</label>

                            <input
                                type="text" id="zipcode" name="zipcode" className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("zipcode", {
                                    required: "Zipcode is required",
                                    pattern: {
                                        value: /^\d{6}$/, // Ensures exactly 6 digits
                                        message: "Zipcode must be exactly 6 digits",
                                    },
                                })}
                                maxLength={6} // Prevents entering more than 6 characters
                            />                            
                            {errors.zipcode && <span className="text-red-500 text-xs">{errors.zipcode.message}</span>}
                        </div>


                        <div className="w-full">
                            <label htmlFor="phone" className="text-[#74787C] text-[8px] md:text-xs">Phone*</label>

                            <input
                                type="text" id="phone" name="phone" 
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^[6-9]\d{9}$/, // Starts with 6-9 and has exactly 10 digits
                                    message: "Enter a valid 10-digit Indian phone number",
                                },
                                })}
                                maxLength={10} // Prevents entering more than 6 characters
                            />                            
                            {errors.phone && <span className="text-red-500 text-xs">{errors.phone.message}</span>}
                        </div>


                        <div className="w-full">
                            <label htmlFor="notes" className="text-[#74787C] text-[8px] md:text-xs">Order Notes*</label>

                            <textarea
                                id="notes" name="notes" rows={4} 
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-black py-3 px-4"
                                {...register("notes")}
                            />                            
                        </div>











                    </form>

                </div>

                {/* order details  */}
                <div className='w-full lg:w-[35%]'>
                    {
                        (cart.length===0)? (
                            <div className='bg-[#F6F6F7] text-black font-bold text-sm md:text-lg h-[200px] w-full flex items-center justify-center'>
                                Cart Is Empty!!
                            </div>
                        ) : (
                            <div>
                            <div className='text-black font-bold text-sm lg:text-lg '>Order Details</div>
                    
                                <div className='bg-[#F6F6F7] p-4 lg:p-6 rounded-md flex flex-col gap-y-4'>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='text-[#74787C] w-[80%] font-semibold uppercase text-xs lg:text-sm'>Products</div>
                                        <div className='text-[#74787C] w-[15%] font-semibold uppercase text-xs lg:text-sm'>Price</div>
                                    </div>

                                    <div className='w-full h-[0.5px] bg-[#E8E8E8] '/>

                                    <div className=''>
                                        {
                                            cart.map((item)=>(
                                                <div key={item.id} className='mt-4'>
                                                    <div className='w-full flex items-center justify-between'>
                                                        <div className='flex justify-between w-[80%] items-center'>
                                                            <div className='w-[20%] h-[75px] bg-white rounded-xs'/>
                                                            <div className='w-3/4 font-bold text-black text-xs lg:text-sm'>{item.title}</div>
                                                        </div>

                                                        <div className='font-bold w-[15%] text-black text-xs lg:text-sm'>${item.price}</div>
                                                    </div>
                                                    <div className='w-full h-[0.5px] bg-[#E8E8E8] mt-4'/>
                                                </div>
                                            ))
                                        }
                                    </div>


                                    <div className='w-full flex items-center justify-between '>
                                        <div className='text-[#74787C] w-[80%]  text-xs lg:text-sm'>SubTotal</div>
                                        <div className='text-black font-bold w-[15%] uppercase text-xs lg:text-sm'>${total}</div>
                                    </div>

                                    <div className='w-full h-[0.5px] bg-[#E8E8E8] '/>



                                    <div className='w-full flex items-center justify-between '>
                                        <div className='text-[#74787C] w-[80%]  text-xs lg:text-sm'>Shipping</div>
                                        <div className='text-black font-bold w-[15%] uppercase text-xs lg:text-sm'>$30.00</div>
                                    </div>

                                    <div className='w-full h-[0.5px] bg-[#E8E8E8] '/>

                                    <div className='w-full flex items-center justify-between '>
                                        <div className='text-black font-bold w-[80%]  text-xs lg:text-sm'>Total Price</div>
                                        <div className='text-[#E53E3E] font-bold w-[15%] uppercase text-xs lg:text-sm'>${total+30.00}</div>
                                    </div>


                                    <div className='w-full'>
                                        <div className="flex flex-col gap-2 mt-2">
                                            {paymentOptions.map((option) => (
                                            <label key={option} className="flex items-center gap-y-2 gap-x-3 text-xs lg:text-sm  text-black">
                                                <input
                                                type="radio"
                                                name="paymentMethod"
                                                value={option}
                                                {...register("paymentMethod", { required: "Please select a payment method" })}
                                                className="w-4 h-4 accent-black text-black"
                                                />
                                                {option}
                                            </label>
                                            ))}
                                        </div>

                                        {errors.paymentMethod && (
                                            <span className="text-red-500 text-xs">{errors.paymentMethod.message}</span>
                                        )}
                                    </div>


                                    <div className='text-xs lg:text-sm text-[#74787C] leading-4 '>
                                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className='text-[#E53E3E]'>privacy policy</span>.
                                    </div>
                                    

                                   

                                    <div className='w-full'>
                                        <div className="flex items-center gap-x-3">
                                            <input
                                                type="checkbox" id="terms"
                                                {...register("terms", {
                                                    required: "You must agree to the terms and conditions",
                                                })}
                                                className="w-4 h-4 accent-black"
                                            />
                                            <label htmlFor="terms" className="text-xs lg:text-sm text-[#74787C]">
                                                I have read and agree to the terms and conditions *
                                            </label>
                                        </div>

                                        {/* Display error if the checkbox is not checked */}
                                        {errors.terms && <span className="text-red-500 text-xs">{errors.terms.message}</span>}
                                    </div>


                                    <button onClick={() => formRef.current?.requestSubmit()} className='bg-[#E53E3E] tracking-wider cursor-pointer mt-8 text-white py-3 font-bold uppercase text-xs lg:text-sm rounded-md w-full'>
                                        place order
                                    </button>




                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>

        <Footer color="#E53E3E" />
    </div>
  )
}

export default Checkout
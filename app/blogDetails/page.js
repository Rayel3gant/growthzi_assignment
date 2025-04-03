"use client"

import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import Image from 'next/image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CiClock1 } from 'react-icons/ci'
import { FaFacebookF, FaFolder, FaInstagram, FaXTwitter } from 'react-icons/fa6'
const categories=[
    {id:0,text:"Latest News"},
    {id:1,text:"Today Best Posts"},
    {id:2,text:"Design Trend"},
    {id:3,text:"UI/UX Tips"},
    {id:4,text:"Brand Design"}
]

const icons=[
    {id:0,icon:<FaFacebookF/>},
    {id:1,icon:<FaInstagram/>},
    {id:2,icon:<FaXTwitter/>}
]

const tags=[
    {id:0,text:"Dream"},
    {id:1,text:"Rings"},
    {id:2,text:"Birthday"},
    {id:3,text:"Gifts"},
    {id:4,text:"Necklace"},
    {id:5,text:"Chain"},
    {id:6,text:"Braclet"}
]

const BlogDetails = () => {
    const [selected, setSelected] = useState([]);

    const { register,handleSubmit,formState:{errors}}=useForm()
    const handleChange = (category) => {
        setSelected((prev) =>
        prev.includes(category)
            ? prev.filter((item) => item !== category)
            : [...prev, category]
        );
    };

    const submitHandler=(data)=>{
        console.log(data)
    }
    
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Blog Details" pageName="Blog Details" />

        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
            <div className='w-full flex flex-col lg:flex-row gap-y-8 lg:justify-between'>               
            <div className='w-full lg:w-[65%] bg-[#F6F6F7]'>
                <Image loading='lazy' src="/blog.jpg" alt='blog' width={500} height={400} className='w-full h-[200px] md:h-[250px] lg:h-[400px]'/>

                {/* blog details  */}
                <div className='mt-12 w-11/12 mx-auto'>
                    <div className='flex items-center gap-x-5 text-[#74787C]'>
                        <div className='flex items-center gap-x-2'>
                            <CiClock1 className='text-lg'/>
                            <div className='text-xs md:text-sm'>15 Sep, 2023</div>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <FaFolder  className='text-lg'/>
                            <div className='text-xs md:text-sm'>Modern Fashion</div>
                        </div>
                    </div>

                    <div className='text-[#1a1a1a] text-lg md:text-xl lg:text-3xl font-bold mt-4'>Fueling Your Passion for All Things Stylish</div>

                    <div className='text-[#74787C] text-xs font-semibold flex flex-col gap-y-4 mt-6 leading-6'>
                        <div>
                            Donec rutrum congue leo eget malesuada. Curabitur aliquet quam posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpa estibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                        </div>

                        <div>
                            Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque in ipsum id orci porta dapibus Vestibulum ante ipsum primis in faucibus orci luctus  ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam ullamcorper sit amet ligula.
                        </div>
                    </div>

                    <div className='text-[#1a1a1a] text-sm md:text-lg  font-bold mt-4'>
                        “Cras ultricies ligula sed magna dictum porta aesent sapien massa pellentesque nec egestas vamus magna justo”
                    </div>

                    <div className='text-[#74787C] text-xs font-semibold mt-6 leading-6'>
                        Aptent vestibulum sodales porttitor hac torquent commodo magnis cum molestie donec, egestas ultrices ultricies eget sapien tortor odio condimentum dictum eu, lacus phasellus velit elementum maecenas fringilla placerat suscipit libero. Suscipit fermentum rutrum nisl lacinia varius duis euismod a praesent feugiat inceptos leo, senectus ac facilisis placerat mi posuere lobortis aliquam litora eget dictumst semper, vestibulum morbi aenean volutpat accumsan.
                    </div>

                    <div className='w-full flex flex-col md:flex-row md:justify-between gap-y-6 mt-6'>
                    {
                        [0,1].map((item)=>(
                            <div key={item} className='w-full md:w-[48%] bg-[#D9D9D9] rounded-md min-h-[200px]'/>
                        ))
                    }
                    </div>

                    <div className='text-[#74787C] text-xs font-semibold mt-6 leading-6'>
                        Vestibulum ante ipsum primis in faucibus orci luctus  ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam ullamcorper sit amet ligula. Quisque velit , pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                    </div>

                    <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-y-4 my-6'>
                        <div className='flex items-center gap-x-4'>
                            <div className='uppercase text-[#1a1a1a] font-bold text-xs md:text-sm'>Tags</div>

                            <div className='flex items-center gap-x-3'>
                                {
                                    ["Dream","Rings","Birthday"].map((item,index)=>(
                                        <div key={index} className={` rounded-md uppercase text-xs md:text-sm font-bold px-2 py-2 ${(index===0)?"bg-black text-white":"bg-white text-black border border-[#E6E6E6]"}`}>
                                            {item}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='flex items-center gap-x-4'>
                            <div className='uppercase text-[#1a1a1a] font-bold text-xs md:text-sm'>Social Accounts</div>
                            
                            <div className='flex items-center gap-x-3'>
                                <FaFacebookF />
                                <FaXTwitter />
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[0.5px] bg-[#e1e1e1] my-6'/>

                    <div className='my-4 w-full flex flex-col md:flex-row gap-y-4 md:justify-between'>
                        <div className='bg-[#E1E1E1] w-full md:w-[25%] min-h-[175px] rounded-md'/>

                        <div className='w-full md:w-[70%] flex flex-col gap-y-4'>
                            <div className='text-black font-bold text-sm md:text-lg '>David Walton</div>
                            <div className='text-[#74787C] text-xs font-semibold mt-2 leading-6'>
                                Donec sollicitudin molestie malesuada. Pellentesque in ipsum  orci porta dapibus ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus magna justo orem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>

                            <div className='flex items-center gap-x-4'>
                                {
                                    icons.map((item)=>(
                                        <div key={item.id} className='border border-[#EAEAEA] w-[40px] h-[40px] rounded-md bg-white flex items-center justify-center'>
                                            {item.icon}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className='w-full h-[0.5px] bg-[#e1e1e1] my-6'/>

                    <div className='w-full my-6'>
                        <div className='text-black text-sm font-bold md:text-lg lg:text-2xl'>03 Comments</div>

                        <div className='flex flex-col gap-y-4 mt-4'>
                            <div className='flex flex-col md:flex-row gap-y-2  md:justify-between'>
                                <div className='bg-[#D9D9D9]  w-[50px] h-[50px] md:min-w-[100px] md:h-[100px] rounded-md'/> 

                                <div className='w-[85%] md:w-[75%]'> 
                                    <div className='text-[#74787C] text-xs'>Sep 25, 2022</div>
                                    <div className='flex items-center justify-between'>
                                        <div className='text-black text-sm md:text-lg font-bold'>Amalia Genner</div>
                                        <div className='text-black text-xs md:text-sm font-black uppercase'>reply</div>
                                    </div>

                                    <div className='text-xs text-[#74787C] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit tortor eget felis porttitor volutpat.</div>
                                </div>
                            </div>
                            <div className='w-full h-[0.5px] bg-[#e1e1e1] my-2'/>

                            <div className='flex ml-[15%] flex-col md:flex-row gap-y-2  md:justify-between'>
                                <div className='bg-[#D9D9D9]  w-[50px] h-[50px] md:min-w-[100px] md:h-[100px] rounded-md'/> 

                                <div className='w-[85%] md:w-[75%]'> 
                                    <div className='text-[#74787C] text-xs'>Sep 25, 2022</div>
                                    <div className='flex items-center justify-between'>
                                        <div className='text-black text-sm md:text-lg font-bold'>Amalia Genner</div>
                                        <div className='text-black text-xs md:text-sm font-black uppercase'>reply</div>
                                    </div>

                                    <div className='text-xs text-[#74787C] mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed convallis at tellus ivamus suscipit tortor eget felis porttitor volutpat.</div>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className='w-full h-[0.5px] bg-[#e1e1e1] my-6'/>



                    <div className='my-12'>
                        <div className='text-black text-sm font-bold md:text-lg lg:text-2xl'>Add a Review</div>
                        <div className='text-[#74787C] text-xs'>Your email address will not be published. Required fields are marked*</div>

                        <form onSubmit={handleSubmit(submitHandler)} className="mt-6 w-full flex flex-col gap-y-6">
                            <div className="w-full  flex flex-col gap-y-4 md:flex-row items-center justify-between">
                                <div className="w-full md:w-[45%]">
                                <input
                                    type="text"
                                    placeholder="Your Name*"
                                    id="name"
                                    name="name"
                                    className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-[#74787C] py-3 px-4"
                                    {...register("name", { required: "Name is required" })}
                                />
                                {errors.name && <span className="text-red-500 text-xs">{errors.name.message}</span>}
                                </div>

                                <div className="w-full md:w-[45%]">
                                <input
                                    type="email"
                                    placeholder="Email address*"
                                    id="email"
                                    name="email"
                                    className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-[#74787C] py-3 px-4"
                                    {...register("email", {
                                    required: "Email is required",
                                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" }
                                    })}
                                />
                                {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                                </div>
                            </div>

                            <div className="w-full">
                                <textarea
                                placeholder="Your Review*"
                                id="review"
                                name="review"
                                className="w-full border border-[#E8E8E8] rounded-md outline-none bg-white text-xs text-[#74787C] py-3 px-4"
                                {...register("review", { required: "Review is required", minLength: { value: 10, message: "Review must be at least 10 characters" } })}
                                />
                                {errors.review && <span className="text-red-500 text-xs">{errors.review.message}</span>}
                            </div>

                            <button type="submit" className="mt-6 bg-[#E53E3E] text-white font-bold uppercase px-4 py-2 rounded-md w-fit cursor-pointer">
                                Submit
                            </button>
                        </form>

                    </div>

                    
                </div>
            </div>

            {/* filters  */}
            <div className='w-full lg:w-[30%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 h-fit'>
                {/* item 1  */}
                <div className='w-full bg-white border border-[#E8E8E8] rounded-md p-4 h-fit'>
                    <input type='text' placeholder='Search here...' className='bg-[#F6F6F7] text-xs md:text-sm py-3 px-4 w-full outline-none border-none'/>
                </div>
            
                {/* item 2 */}
                <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                    <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Categories</div>
                    <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>

                    <div className='mt-4 flex flex-col gap-y-3'>
                        {categories.map((category) => (
                        <div key={category.id} className="flex items-center gap-2 mb-1">
                            <input
                            type="checkbox"
                            checked={selected.includes(category.text)}
                            onChange={() => handleChange(category.text)}
                            className="w-[20px] h-[20px] bg-white border border-#E3E3E3] rounded-xs"
                            />
                            <label className="text-sm text-[#1a1a1a] ">{category.text}</label>
                        </div>
                        ))}
                    </div>
                </div>
                
                {/* item 3 */}
                <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                    <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Latest Posts</div>
                    <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>
                    
                    <div className='w-full grid xl:grid-cols-1 gap-4 mt-4'>
                    {
                        [0,1,2].map((item)=>(
                            <div key={item} className='bg-white flex items-center justify-between'>
                                <div className='w-1/3 min-h-[80px] bg-[#D9D9D9] '/>

                                <div className='w-[60%] flex flex-col gap-y-2'>                                       
                                    <div className='text-[#74787C] font-bold text-xs flex items-center gap-x-3'>
                                        <CiClock1 className='text-lg'/>
                                        <span>Sep 25, 2022</span>
                                    </div>
                                    <div className='text-[#1a1a1a] font-bold text-xs'>Bridging the Gap Between Runway and Reality</div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    
                </div>


                {/* item 4 */}
                <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                    <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Tags</div>
                    <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>
                    
                    <div className='w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-4 gap-6 mt-6'>
                    {
                        tags.map((item)=>(
                            <div key={item.id} className={`w-full border border-[#E8E8E8] py-2 rounded-md flex items-center lg:text-sm justify-center font-semibold uppercase  ${(item.id===0)?"bg-[#E53E3E] text-white":"bg-white text-[#1a1a1a]"}`}>
                                {item.text}
                            </div>
                        ))
                    }
                    </div>

                </div>


                <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                    <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Instagram Posts</div>
                    <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>

                    <div className='mt-6 w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                    {
                        [0,1,2,3,4,5,6,7].map((item)=>(
                            <div key={item} className='bg-[#D9D9D9] min-h-[100px] rounded-md '/>
                        ))
                    }
                    </div>
                </div>
            </div>
            </div>
        </div>

        <Footer color="#E53E3E"/>
    </div>
  )
}

export default BlogDetails
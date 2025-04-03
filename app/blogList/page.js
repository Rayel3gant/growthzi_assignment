'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Loader from '@/components/Loader'
import Navbar1 from '@/components/Navbar1'
import { blogGridItems } from '@/data/Others'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CiClock1 } from 'react-icons/ci'
import { FaFolder } from 'react-icons/fa6'
import { IoIosArrowRoundForward } from 'react-icons/io'
const categories=[
    "Latest News","Today Best Posts","Design Trend","UI/UX Tips","Brand Design"
]

const tags=[
    "Dream","Rings","Birthday","Gifts","Necklace","Chain","Braclet"
]

const ITEMS_PER_PAGE = 6;


const BlogList = () => {
    const [selected, setSelected] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(blogGridItems.length / ITEMS_PER_PAGE);
    const [loading,setLoading]=useState(false)
    const router=useRouter()

    const currentItems = blogGridItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    const handleChange = (category) => {
        setSelected((prev) =>
        prev.includes(category)
            ? prev.filter((item) => item !== category)
            : [...prev, category]
        );
    };

    const changeSlides=(i)=>{
        setLoading(true)
        window.scrollTo({ top: 500, behavior: "smooth" }); // Scrolls to top smoothly
        setCurrentPage(i)
        setTimeout(()=>{
            setLoading(false)
        },500)
    }
    
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Blog List" pageName="Blog List"/>

        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
            <div className='w-full flex flex-col lg:flex-row gap-y-8 lg:justify-between'>
                {/* blog grid */}
                {
                    (loading) ? (
                        <div className='w-full min-h-[400px] flex items-center justify-center'>
                            <Loader/>
                        </div>
                    ) : (
                        <div className='w-full lg:w-[65%]'>
                            <div className="p-4">
                                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                                    {currentItems.map((item) => (
                                        <div key={item.id} className='bg-white rounded-md border border-[#E8E8E8] p-4 flex flex-col gap-y-6 md:flex-row justify-between'>
                                            <div className='bg-[#D9D9D9] w-full md:w-[45%] rounded-md min-h-[200px] lg:min-h-[250px]'/>

                                            <div className='w-full md:w-1/2 '>
                                                <div className='flex items-center gap-x-5 text-[#74787C]'>
                                                    <div className='flex items-center gap-x-3 text-xs md:text-sm'>
                                                        <CiClock1 className='text-lg'/>
                                                        <div>{item.date}</div>
                                                    </div>

                                                    <div className='flex items-center gap-x-3 text-xs md:text-sm'>
                                                        <FaFolder className='text-lg'/>
                                                        <div>{item.tag}</div>
                                                    </div>
                                                </div>

                                                <div className='text-[#1a1a1a] font-bold mt-4 text-sm md:text-lg'>{item.title}</div>
                                                <div className='text-[#74787C] text-xs md:text-sm mt-4'>{item.desc}</div>

                                                <button onClick={()=>router.push("/blogDetails")} className='flex items-center gap-x-4 cursor-pointer mt-8'>
                                                    <div className='w-[40px] h-[40px] rounded-full bg-white shadow-sm flex items-center justify-center '>
                                                        <IoIosArrowRoundForward className='text-xl' />
                                                    </div>
                                                    <div className='text-xs md:text-sm font-bold text-[#1a1a1a]'>READ MORE</div>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-x-2   mt-6 ">
                                    {Array.from({ length: totalPages }, (_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => changeSlides(i + 1)}
                                            className={`w-[30px] h-[30px] text-xs md:text-sm cursor-pointer lg:w-[45px] lg:h-[45px] flex items-center justify-center border rounded-md ${currentPage === i + 1 ? 'bg-[#E53E3E] text-white' : 'bg-[#F6F6F7] text-[#1a1a1a]'}`}
                                        >
                                            0{i + 1}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }

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
                            <div key={category} className="flex items-center gap-2 mb-1">
                                <input
                                type="checkbox"
                                checked={selected.includes(category)}
                                onChange={() => handleChange(category)}
                                className="w-[20px] h-[20px] bg-white border border-#E3E3E3] rounded-xs"
                                />
                                <label className="text-sm text-[#1a1a1a] ">{category}</label>
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
                            tags.map((item,index)=>(
                                <div key={item} className={`w-full border border-[#E8E8E8] py-2 rounded-md flex items-center lg:text-sm justify-center font-semibold uppercase  ${(index===0)?"bg-[#E53E3E] text-white":"bg-white text-[#1a1a1a]"}`}>
                                    {item}
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

export default BlogList
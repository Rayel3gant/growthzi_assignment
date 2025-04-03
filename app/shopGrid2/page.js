'use client'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Loader from '@/components/Loader'
import Navbar1 from '@/components/Navbar1'
import ShopCard from '@/components/ShopCard'
import React, { useEffect, useState } from 'react'

const ITEMS_PER_PAGE = 12;


const ShopGrid2 = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [loading,setLoading]=useState(false)
    const [shopGridItems,setShopGridItems]=useState([])
    const totalPages = Math.ceil(shopGridItems.length / ITEMS_PER_PAGE);
    const [loading2,setLoading2]=useState(false)
    
    

    const currentItems = shopGridItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
    const changeSlides=(i)=>{
        setLoading(true)
        window.scrollTo({ top: 500, behavior: "smooth" }); // Scrolls to top smoothly
        setCurrentPage(i)
        setTimeout(()=>{
            setLoading(false)
        },500)
    }

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data)=>{
                setShopGridItems(data)
        });
        
    },[])

    useEffect(() => {
        setLoading2(true);
        
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then((data) => {
                setShopGridItems(data);
                setLoading2(false); 
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading2(false); 
            });
        
    }, []);
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Shop Grid" pageName="Shop Grid"/>

        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
        {
            (loading2===true)?(
                <div className='w-full min-h-[400px] flex items-center justify-center'>
                    <Loader/>
                </div>
            ): (
                <div className='w-full flex flex-col xl:flex-row gap-6'>
                {/* item grid  */}
                {
                    (loading)? (
                        <div className='w-full min-h-[400px] flex items-center justify-center'>
                            <Loader/>
                        </div>
                    ) : (
                        <div className='w-full p-4'>                           
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                {currentItems.map((item) => (
                                    <ShopCard key={item.id} data={item}/>
                                ))}
                            </div>
                            <div className="flex gap-x-2   mt-6 ">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => changeSlides(i + 1)}
                                        className={`w-[30px] h-[30px] text-xs md:text-sm lg:w-[45px] lg:h-[45px] flex items-center justify-center border rounded-md ${currentPage === i + 1 ? 'bg-[#E53E3E] text-white' : 'bg-[#F6F6F7] text-[#1a1a1a]'}`}
                                    >
                                        0{i + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )
                }

                </div>
            )
        }
        </div>
        
        <Footer color="#E53E3E"/>

    </div>
  )
}

export default ShopGrid2
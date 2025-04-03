'use client'
import HeroSection from '@/components/HeroSection'
import Navbar1 from '@/components/Navbar1'
import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMenu2Fill } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
// import { shopGridItems } from '@/data/Others';
import ShopCard from '@/components/ShopCard';
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';
const categories = [
    "Accessories (4)",
    "Badge Categories (4)",
    "Bag & Backpacks (1)",
    "Category Grid (12)",
    "Clothing & Apparel (2)",
    "Consumer Electric (3)",
    "Top Electronics (3)",
    "Women's Collection (5)"
];

const itemSize = [
    { id: 0, size: "XS", count: 15 },
    { id: 1, size: "S", count: 15 },
    { id: 2, size: "Small", count: 15 },
    { id: 3, size: "M", count: 15 },
    { id: 4, size: "L", count: 15 },
    { id: 5, size: "XL", count: 15 }
];
const brands =[
    "Juliate","H&M","MAcro","Harmoni","Sowat"
]

const ITEMS_PER_PAGE = 9;

const ShopGrid1  = () => {
    const [selected, setSelected] = useState([]);
    const [price, setPrice] = useState([0, 100])
    const [selectedSize, setSelectedSize] = useState(null);
    const [brand,setBrand]=useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [shopGridItems,setShopGridItems]=useState([])
    const totalPages = Math.ceil(shopGridItems.length / ITEMS_PER_PAGE);
    const [loading,setLoading]=useState(false)
    const [loading2,setLoading2]=useState(false)
    const [sortOption, setSortOption] = useState("default");

    // const currentItems = shopGridItems.slice(
    //     (currentPage - 1) * ITEMS_PER_PAGE,
    //     currentPage * ITEMS_PER_PAGE
    // );

    const handleChange = (category) => {
        setSelected((prev) =>
        prev.includes(category)
            ? prev.filter((item) => item !== category)
            : [...prev, category]
        );
    };

    const handleBrandChange = (brandName) => {
        setBrand((prev) =>
        prev.includes(brandName)
            ? prev.filter((item) => item !== brandName)
            : [...prev, brandName]
        );
    };

    
    const handlePriceChange = (e) => {
        const value = e.target.value.split(",").map(Number);
        setPrice(value);
    };


    const changeSlides=(i)=>{
        setLoading(true)
        window.scrollTo({ top: 500, behavior: "smooth" }); // Scrolls to top smoothly
        setCurrentPage(i)
        setTimeout(()=>{
            setLoading(false)
        },500)
    }

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


    const handleSortChange = (option) => {
        setSortOption(option);
    };

    const sortedItems = [...shopGridItems].sort((a, b) => {
        if (sortOption === "priceLowHigh") return a.price - b.price;
        if (sortOption === "priceHighLow") return b.price - a.price;
        if (sortOption === "nameAZ") return a.title.localeCompare(b.title);
        if (sortOption === "nameZA") return b.title.localeCompare(a.title);
        return 0;
    });

    const currentItems = sortedItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );
  return (
    <div className='w-full'>
        <Navbar1/>
        <HeroSection text="Shop Grid" pageName="About Us"/>

        <div className='w-11/12 xl:w-[1200px] mx-auto my-12'>
            {
                (loading2===true)? (
                    <div className='w-full min-h-[400px] flex items-center justify-center'>
                        <Loader/>
                    </div>
                ) : (
                    <div className='w-full flex flex-col xl:flex-row gap-6'>
                        {/* item grid  */}
                        {
                            (loading)? (
                                <div className='w-full min-h-[400px] flex items-center justify-center'>
                                    <Loader/>
                                </div>
                            ) : (
                                <div className='w-full xl:w-[80%]'>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='w-fit flex items-center gap-x-4'>
                                            <div className='w-fit flex items-center bg-white gap-x-3 border border-[#E8E8E8] p-3  rounded-sm'>
                                                <RiMenu2Fill className='text-[#1a1a1a]'/>
                                                <CgMenuGridO className='text-[#B5B5B5]'/>
                                            </div>
                                            <div className='text-[8px] sm:text-xs text-[#74787C]'>Showing 1–12 of 88 results</div>
                                        </div>

                                        
                                        <select
                                            onChange={(e) => handleSortChange(e.target.value)}
                                            className="cursor-pointer border border-[#E8E8E8] outline-none rounded-md px-2 md:px-4 py-2 text-[#1a1a1a] text-xs md:text-sm"
                                        >
                                            <option value="default">Default Sorting</option>
                                            <option value="priceLowHigh">Price: Low to High</option>
                                            <option value="priceHighLow">Price: High to Low</option>
                                            <option value="nameAZ">Name: A - Z</option>
                                            <option value="nameZA">Name: Z - A</option>
                                        </select>
                                    </div>

                                    <div className="p-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
                                </div>
                            )
                        }

                        {/* filters  */}
                        <div className='w-full xl:w-[20%] xl:max-w-[350px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6'>
                            {/* item 1 */}
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

                            {/* item 2 */}
                            <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                                <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Filter by price</div>
                                <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={price.join(",")}
                                    onChange={handlePriceChange}
                                    className="w-full mt-4 appearance-none bg-[#1A1A1A12] h-2 rounded-lg"
                                    style={{ accentColor: "red" }}
                                />
                                <div className="flex justify-between items-center text-xs mt-2">
                                    <div>Price: $10 — $90</div>
                                    <div> Filter</div>
                                </div>
                                
                            </div>

                            {/* item 3 */}

                            <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                                <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Item Size</div>
                                <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>
                                <div className='flex flex-col gap-y-3 mt-3'>
                                {itemSize.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 mb-1">
                                        <input
                                            type="radio"
                                            name="size"
                                            value={item.size}
                                            checked={selectedSize === item.size}
                                            onChange={() => setSelectedSize(item.size)}
                                            className="w-4 h-4"
                                        />
                                        <div className="text-xs w-11/12 flex items-center justify-between text-[#1a1a1a] ">
                                            <div >{item.size} </div>
                                            <div>({item.count})</div>
                                        </div>

                                        
                                    </div>

                                    
                                ))}
                                </div>
                                
                            </div>

                            {/* item 4 */}
                            <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                                <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Brands</div>
                                <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>

                                <div className='mt-4 flex flex-col gap-y-3'>
                                    {brands.map((item) => (
                                    <div key={item} className="flex items-center gap-2 mb-1">
                                        <input
                                        type="checkbox"
                                        checked={brand.includes(item)}
                                        onChange={() => handleBrandChange(item)}
                                        className="w-[20px] h-[20px] bg-white border border-#E3E3E3] rounded-xs"
                                        />
                                        <div className="text-xs w-11/12 flex items-center justify-between text-[#1a1a1a] ">
                                            <div >{item} </div>
                                            <div>(200)</div>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            

                            {/* item 5 */}
                            <div className='bg-white rounded-md border border-[#1A1A1A12] p-4'>
                                <div className='text-[#1a1a1a] font-bold text-xs md:text-sm'>Latest Products</div>
                                <div className='w-full mt-2 h-[0.5px] bg-[#E8E8E8] '/>
                                
                                <div className='w-full grid xl:grid-cols-1 gap-4 mt-4'>
                                {
                                    [0,1,2].map((item)=>(
                                        <div key={item} className='bg-white flex items-center justify-between'>
                                            <div className='w-1/3 min-h-[80px] bg-[#D9D9D9] '/>

                                            <div className='w-[60%] flex flex-col gap-y-2'>
                                                <div className='flex items-center gap-x-1 text-[#E53E3E] text-xs'>
                                                {
                                                    [0,1,2,3,4].map((item)=>(
                                                        <FaStar key={item} className='' />
                                                    ))
                                                }
                                                </div>
                                                <div className='text-[#1a1a1a] font-bold text-xs'>Fancy Black Sunglass</div>
                                                <div className='text-[#1a1a1a] font-bold text-xs'>$158.00</div>
                                            </div>
                                        </div>
                                    ))
                                }
                                </div>
                                
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

export default ShopGrid1
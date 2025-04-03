"use client"

import { homeCategories } from "@/data/HomePage";
import Image from "next/image";
import { useRef, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'
import { FaStar } from "react-icons/fa6";

const ImageCarousel = ({title,desc,type,responsive}) => {
    const [selectedSlide,setSlide]=useState(0)
    const carouselRef = useRef(null); // Ref for carousel

  // Move to the next slide
  const nextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
      setSlide((prev) => (prev + 1) % homeCategories.length);
    }
  };

  // Move to the previous slide
  const prevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
      setSlide((prev) => (prev - 1 + homeCategories.length) % homeCategories.length);
    }
  };
  return (
    <div className="w-full">
        <div className="flex w-full items-center justify-between">
            <div>
                <div className="text-[#1a1a1a] font-bold text-sm md:text-xl lg:text-4xl">{title}</div>
                <div className="text-[#74787c] text-xs md:text-sm lg:text-lg">{desc}</div>
            </div>

            <div className="flex items-center gap-x-2">
                <button onClick={nextSlide} className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#E53E3E]">
                    <MdArrowForward className="text-white"/>
                </button>

                <button onClick={prevSlide} className="w-[45px] h-[45px] rounded-full flex items-center justify-center bg-[#f1f1f1]">
                    <MdArrowBack className="text-[#74787c]"/>
                </button>
            </div>
        </div>

        <div className="h-[0.5px] w-full bg-[#e9e9e9] mt-2"/>

        <Carousel
            ref={carouselRef} 
            autoPlay
            autoPlaySpeed={10000}
            rewind
            rewindWithAnimation
            customLeftArrow={null}
            customRightArrow={null}
            arrows={false}
            className="mt-8"
            responsive={responsive}
      >
      {
        (type===1) && 
            homeCategories.map((item)=>(
                <div onClick={()=>setSlide(item.id)} key={item.id} className={` ${(selectedSlide===item.id) ? "bg-[#E53E3E]":"bg-[#F6F6F7]"} transition duration-500 py-3 flex flex-col items-center rounded-md w-11/12 mx-auto cursor-pointer   `}>
                    <Image loading="lazy" src="/product.jpg" alt="product" width={200} height={150} className="w-[85%] md:w-11/12 mx-auto h-[400px] lg:h-[300px]"/>
                    <div className={`${(selectedSlide===item.id) ? "text-white":"text-[#1a1a1a]"} text-center py-4 uppercase font-semibold`}>{item.title}</div>
                </div>
            ))
      }

      {
        (type===2) && 
        [0,1,2,3,4,5,6,7].map((item)=>(
            <div key={item} className="w-11/12 mx-auto border border-[#E8E8E8]">
                <div className="w-full">
                    <div className="w-full">
                        <Image loading="lazy" src="/product.jpg" alt="product" width={250} height={120} className="w-full"/>

                    </div>

                    <div className="py-4 pl-4">
                        <div className="text-[#74787c] text-[12px]">Levi’s Cotton</div>
                        <div className="text-[#1a1a1a] test-[14px] font-semibold ">Monica Diara Party Dress</div>
                        <div className="flex items-center gap-x-0">
                            {
                                [0,1,2,3,4].map((item)=>(
                                    <FaStar key={item} className="text-[#E53E3E] text-[10px]"/>
                                ))
                            }
                            <span className="text-[10px] text-[#74787C] ml-1 mt-1">(15 Reviews)</span>
                        </div>
                        <div className="text-[#1a1a1a] test-[12px]">$893.00</div>
                    </div>
                </div>
            </div>
        ))
      }
      
        </Carousel>

    </div>
  )
}

export default ImageCarousel
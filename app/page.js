import ImageCarousel from "@/components/ImageCarousel";
import Navbar1 from "@/components/Navbar1";
import { gridData, newsData, responsive1, responsive2 } from "@/data/HomePage";
import Image from "next/image";
import { CiDiscount1 } from "react-icons/ci";
import { FaStar, FaT } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full  bg-white">
      <Navbar1/>

      {/* hero section  */}
      <div className="w-full h-[300px] md:h-[350px] lg:h-[450px] bg-[#F4F6F2] overflow-hidden relative mt-4 z-0">
        <div className="w-[1092px] h-[1092px] rounded-full bg-[#E53E3E0F] absolute top-[30%] -left-[10%]"/>

        <Image loading="lazy" src="/2023.png" alt="hero" width={1000} height={350} className="absolute top-[0%] left-[25%]" />

        <div className="absolute z-10 top-[10%] left-[5%] lg:top-[20%] lg:left-[60%]   w-fit lg:w-[450px]">
          <div className="text-[#E53E3E] lg:text-[14px]">summer 22 women’s collection</div>
          <div className="lg:text-[40px] font-bold text-[#1a1a1a] mt-2">
            Super COLLECTION FOR WOMEN
          </div>

          <div className="lg:text-[16px] text-[#1a1a1a] mt-4">from <span className="text-[#E53E3E] lg:text-[30px] font-bold">$320.00</span></div>

          <button className="bg-[#E53E3E] px-4 py-2 text-white lg:text-[16px] rounded-md mt-8">
            View Collection
          </button>
        </div>
      </div>

      <div className="w-11/12 xl:w-[1200px] mx-auto mt-12">
        <ImageCarousel title="Best for your categories" desc="29 categories belonging to a total 15,892 products" type={1} responsive={responsive1}/>
      </div>


      <div className="w-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  my-12 gap-y-5 gap-x-2">
        {
          gridData.map((item)=>(
            <div key={item.id} className="w-full h-[200px] md::h-[250px] relative bg-[#F6F6F7]">
              <Image loading="lazy" src="/Vector.png" alt="vector" layout="fill" className="absolute top-0 right-0 left-0 bottom-0"/>

              <div className="absolute z-10 top-[20%] left-[15%]">
                {
                  (item.id===1)? (
                    <div className="bg-[#E53E3E] text-white px-3 py-1 text-xs md:text-sm w-fit ">
                    {item.text1}
                    </div>
                  ) : <div className="text-[#E53E3E] lg:text-[12px]">
                    {item.text1}
                  </div>
                }

                <div className="text-[#1a1a1a] font-bold lg:text-[18px] w-3/4">{item.title}</div>

                {
                  item.text2 && <div className="text-[#74787C] lg:text-[12px]">{item.text2}</div>
                }

                <button className="flex items-center gap-x-2">
                  <div className="w-[30px] h-[30px] flex justify-center items-center bg-[#E53E3E26] rounded-full text-[#E53E3E]">+</div>
                  <div className="text-[#1a1a1a] lg:text-[12px]">{item.buttonText}</div>
                </button>
              </div>
            </div>
          ))
        }
      </div>

      <div className="w-11/12 xl:w-[1200px] mx-auto my-12">
        <ImageCarousel title="GET YOUR FASHION STYLE" desc="29 categories belonging to a total 15,892 products" type={2} responsive={responsive2}/>
      </div>

      {/* grid of collections  */}
      <div className="w-11/12 xl:w-[1200px] mx-auto mt-12 flex flex-col gap-y-6 lg:flex-row lg:gap-x-4 ">
        <div className="lg:w-1/2 w-full bg-[#E8E8E8] py-8 pl-6 ">
          <div className="bg-white text-[#E53E3E] px-3 py-2 text-[12px] w-fit font-semibold">1500+ Products</div>
          <div className="text-[#1A1A1A] text-[20px] font-bold mt-4 uppercase">Women Collections</div>
          <div className="text-[#74787C] text-[14px] mt-2 w-3/4">This is genuinely the first theme i bought for which i did not had to write one line of code.</div>

          <div className="flex flex-col gap-y-1 mt-3">
            {
              ["Blazer","Blouses & Shirts","Dresser","Jeans","Knits","Pants","Skirts","Suits","Sweatshirts & Hoodie","T-Shirts","Tops & Bodysuits"].map((item)=>(
                <div key={item} className="text-[#1A1A1A] text-[15px]">{item}</div>
              ))
            }
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col md:flex-row lg:flex-col gap-y-4 md:gap-x-4 lg:gap-y-4">
          <div className="w-full bg-[#E9E9E9] py-8 pl-6 relative">
            <div className="bg-white text-[#E53E3E] px-3 py-2 text-[12px] w-fit font-semibold">1500+ Products</div>
            <div className="text-[#1A1A1A] text-[14px] lg:text-[20px] font-bold mt-4 uppercase">Men Collections</div>

            <div className="flex flex-col gap-y-1 mt-3">
              {
                ["Blazer","Blouses & Shirts","Dresser","Jeans"].map((item)=>(
                  <div key={item} className="text-[#1A1A1A] text-[12px] lg:text-[15px]">{item}</div>
                ))
              }
            </div>


            <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-full bg-[#E53E3E45] absolute top-[20%] right-[15%]"/>
          </div>

          <div className="w-full bg-[#FFEDE3] py-8 pl-6 relative">
            <div className="bg-white text-[#E53E3E] px-3 py-2 text-[12px] w-fit font-semibold">1500+ Products</div>
            <div className="text-[#1A1A1A] text-[14px] lg:text-[20px] font-bold mt-4 uppercase">Men Collections</div>

            <div className="flex flex-col gap-y-1 mt-3">
              {
                ["Blazer","Blouses & Shirts","Dresser","Jeans"].map((item)=>(
                  <div key={item} className="text-[#1A1A1A] text-[12px] lg:text-[15px]">{item}</div>
                ))
              }
            </div>
            <div className=" w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-full bg-[#D2C1B7] absolute top-[20%] right-[15%]"/>

          </div>
        </div>
      </div>



      <div className="w-full py-8 md:py-12 mt-12  lg:py-16 bg-[#E53E3E] flex flex-col items-center uppercase">
        <div className="text-white text-[10px] lg:text-[12px]">Spring summer 22 women’s collection</div>
        <div className="text-white font-bold text-xl md:text-2xl lg:text-4xl mt-2">-15% Off Discount</div>
        <div className="text-white font-bold text-xl md:text-2xl lg:text-4xl">All Here</div>

        <button className="text-[#E53E3E] bg-white px-4 py-2 w-fit mt-6">
          View Collections
        </button>
      </div>

      {/* brands */}
      <div className="hidden lg:block lg:w-11/12 xl:w-[1200px] mx-auto mt-12">
        <Image loading="lazy" src="/brands.png" alt="brands" height={250} width={1000} className="w-full"/>
      </div>
      

      {/* deals of the day  */}
      <div className="w-11/12 xl:w-[1200px] min-h-[400px]  mx-auto mt-12 flex flex-col lg:flex-row lg:gap-x-4 gap-y-8  bg-[#F6F6F7] lg:px-8 lg:py-12 relative ">
        <Image loading="lazy" src="/Vector.png" alt="vector" width={400} height={300} className="w-[60%]  absolute bottom-0 left-0"/>
        

        <div className="w-11/12 mx-auto lg:w-[40%]">
           <div className="text-[#1a1a1a] text-sm md:text-xl lg:text-3xl font-bold uppercase mt-6">Deal Of the days</div>   
           <div className="text-[#74787C] mt-2 text-[10px] lg:text-[14px]">Elegant pink origami design three type of dimensional view and decoration co Great for adding a decorative...</div>
           <div className="flex items-center gap-x-3 mt-4">
              <div className="bg-[#E53E3E] w-[30px] h-[30px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center ">
                <CiDiscount1 className="text-white text-xs lg:text-xl"/>
              </div>

              <div className="text-[#1a1a1a] text-[15px]  lg:w-[60%]">Limited Time offer. THe Deal will expire one august 18, 2024 </div>

              
           </div>

           <button className="text-[#E53E3E] bg-white px-4 py-2 w-fit mt-6">
              View Collections
            </button>
        </div>

        <div className="w-11/12 mx-auto lg:w-[60%] flex flex-col md:flex-row gap-y-4 items-center gap-x-2 z-10">
          {
            [0,1].map((item)=>(
              <div key={item} className="w-11/12 mx-auto border border-[#E8E8E8]">
                <div className="w-full">
                  <div className="w-full">
                      <Image loading="lazy" src="/product.jpg" alt="product" width={250} height={1000} className="w-full h-[300px]"/>

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
        </div>

      </div>

        
      {/* latest news  */}
      <div className="w-11/12 xl:w-[1200px] mx-auto my-12">
        <div className="text-[#1a1a1a] text-center text-sm md:text-xl lg:text-3xl font-bold uppercase ">Our Latest News Insight</div>
        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 mt-4">
          {
            newsData.map((item)=>(
              <div key={item.id} className="shadow-sm">
                <Image loading="lazy" src="/Vector.png" alt="vector" width={350} height={200} className="w-full h-[200px]" />

                <div className="w-[85%] mx-auto mt-4">
                  <div className="flex items-center gap-x-4 uppercase">
                    <div className="flex items-center gap-x-1">
                      <FaCalendarAlt className="text-[#E53E3E] text-sm"/>
                      <div className="text-[#74787C] text-[10px] lg:text-[12px]">{item.date}</div>
                    </div>

                    <div className="flex items-center gap-x-1">
                      <FaTag className="text-[#E53E3E] text-sm"/>
                      <div className="text-[#74787C] text-[10px] lg:text-[12px]">oil Change</div>
                    </div>
                  </div>

                  <div className="uppercase mt-3 text-[#1a1a1a] font-bold text-sm lg:text-xl">{item.title}</div>
                  <div className="h-[0.5px] mt-6 w-full bg-[#EAEAEA]"/>


                  <div className="flex items-center gap-x-2 text-[#E53E3E] mt-2 mb-4">
                    <div className="">Read More</div>
                    <IoIosArrowRoundForward/>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <Footer color="#E53E3E"/>
    </div>
  );
}

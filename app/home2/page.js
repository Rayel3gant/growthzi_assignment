import CustomGrid from "@/components/CustomGrid";
import CustomGrid2 from "@/components/CustomGrid2";
import Footer from "@/components/Footer";
import Navbar2 from "@/components/Navbar2"
import ProductCard from "@/components/ProductCard";
import { productGrid } from "@/data/HomePage";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { IoArrowForwardSharp } from "react-icons/io5";

const Home2 = () => {
  return (
    <div className="w-full">
        <Navbar2/>

        {/* hero section  */}

        <div className="w-11/12 xl:w-[1200px] mx-auto my-12 ">
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-y-6 gap-x-4">
            <div className="w-full 1 md:w-[300px] xl:w-[250px] border border-[#E5E7EB] rounded-sm ">
              {
                ["Breakfast & Dairy","Fresh Vegetables","Fresh Vegetables","Fresh Vegetables","Fresh Vegetables","Fresh Vegetables","Fresh Vegetables","Fresh Vegetables"].map((item,index)=>(
                  <div className={`flex items-center gap-x-2 ${(index===0)?"text-[#141414]":"text-[#74787C]"} font-semibold py-4 px-5 ${(index!==7) && "border-b-[0.5px] border-[#E5E7EB]"} `}>
                    <div className="bg-[#67B02E1F] w-[25px] h-[25px] rounded-full flex justify-center items-center  text-[#67B02E]">
                      <GoPlus/>
                    </div>
                    {item}
                  </div>
                ))
              }
            </div>

            <div className="w-full hidden lg:block  md:w-full xl:w-[550px] bg-[#D9D9D9] rounded-sm relative min-h-[300px]">
                <div className="absolute top-[20%] left-[10%]">
                  <div className="text-xs md:text-sm text-[#1a1a1a] font-semibold uppercase">Get up to 30% off on your first $150 purchase</div>
                  <div className="text-sm md:text-xl lg:text-5xl text-[#1a1a1a] font-bold mt-2">Organic Grocery</div>
                  <div className="text-xs md:text-sm lg:text-lg text-[#1a1a1a] font-semibold uppercase mt-4">$ 69.00</div>
                  <button className="bg-[#67B02E] px-4 py-2 rounded-full flex items-center gap-x-2 text-white font-semibold mt-6">
                    <div className="text-xs md:text-sm">SHOP NOW</div>
                    <IoArrowForwardSharp/>
                  </button>
                </div>

            </div>

            <div className="w-full md:w-[350px]  xl:w-[400px] bg-[#FCF5E2] rounded-sm relative min-h-[400px]">
              <div className="absolute top-[10%] left-[5%] ">
                <div className="bg-white px-3  py-1 rounded-full text-[#67B02E] text-xs font-semibold w-fit">
                  -45 % Offer
                </div>


                <div className="text-[#1a1a1a] text-xs md:text-sm font-bold w-[75%] mt-2">
                  With us, you will never miss <span className="text-[#67B02E] font-normal">any ingredient</span>
                </div>

                <div className="flex items-center gap-x-3 mt-6">
                  <div className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">
                    <GoPlus/>
                  </div>
                  <div className="text-[#1a1a1a] font-semibold text-xs md:text-sm">Shop Now</div>
                </div>

              </div>

              <Image loading="lazy" src="/Vector2.png" alt="vector" width={250} height={250} className="absolute bottom-0 left-0 right-0"/>
            </div>
          </div>

          <div className="w-full block lg:hidden  bg-[#D9D9D9] rounded-sm relative min-h-[250px] mt-4">
              <div className="absolute top-[20%] left-[10%]">
                <div className="text-xs md:text-sm text-[#1a1a1a] font-semibold uppercase">Get up to 30% off on your first $150 purchase</div>
                <div className="text-sm md:text-xl lg:text-5xl text-[#1a1a1a] font-bold mt-2">Organic Grocery</div>
                <div className="text-xs md:text-sm lg:text-lg text-[#1a1a1a] font-semibold uppercase mt-4">$ 69.00</div>
                <button className="bg-[#67B02E] px-4 py-2 rounded-full flex items-center gap-x-2 text-white font-semibold mt-6">
                  <div className="text-xs md:text-sm">SHOP NOW</div>
                  <IoArrowForwardSharp/>
                </button>
              </div>

          </div>
        </div>

        


        <div className="w-11/12 xl:w-[1200px] mx-auto my-12 bg-[#F6F6F7] p-3 md:p-4: lg:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-y-4 gap-x-2 ">
          {
            productGrid.map((item)=>(
              <div key={item.id} className="bg-white p-4 rounded-md">
                <Image loading="lazy" src="/product.jpg" alt="product" className="w-[85%] h-[250px] md:h-[150px] mx-auto rounded-md" width={150} height={100}/>
                <div className="text-[#1a1a1a] text-xs text-center font-semibold mt-3">{item.title}</div>
              </div>
            ))
          }
        </div>


        <div  className="w-11/12 xl:w-[1200px] mx-auto my-12 flex flex-col md:flex-row md:justify-between gap-y-6">
          <div className="w-full md:w-[48%] bg-[#D9D9D9] py-12 pl-12">
            <div className="bg-[#67B02E] text-white text-xs text-semibold px-3 py-1 w-fit rounded-md">Weekend Discount</div>
            <div className="text-[#1a1a1a] text-lg md:text-xl xl:text-3xl font-bold w-[60%] mt-2">Feed The Best Energy Drink Booster</div>
            <div className="text-[#74787C] text-xs mt-4">Just don’t miss the special offer this week</div>

            <button className="flex items-center gap-x-3 mt-6">
              <div className="bg-[#67B02E1F] w-[25px] h-[25px] rounded-full flex justify-center items-center  text-[#67B02E]">
                <GoPlus/>
              </div>

              <div className="text-[#1a1a1a] font-bold text-sm ">Shop Now</div>
            </button>
          </div>

          <div className="w-full md:w-[48%] bg-[#D9D9D9] py-12 pl-12">
            <div className="bg-[#67B02E] text-white text-xs text-semibold px-3 py-1 w-fit rounded-md">Weekend Discount</div>
            <div className="text-[#1a1a1a] text-lg md:text-xl xl:text-3xl font-bold w-[60%] mt-2">Our Garden Fresh Vegetables</div>
            <div className="text-[#74787C] text-xs mt-4">Just don’t miss the special offer this week</div>

            <button className="flex items-center gap-x-3 mt-6">
              <div className="bg-[#67B02E1F] w-[25px] h-[25px] rounded-full flex justify-center items-center  text-[#67B02E]">
                <GoPlus/>
              </div>

              <div className="text-[#1a1a1a] font-bold text-sm ">Shop Now</div>
            </button>
          </div>
        </div>

        {/* deals of the week  */}
        <div className="w-11/12 xl:w-[1200px] mx-auto my-12 bg-[#F6F6F7] border-2 border-[#DC2626] rounded-md p-4 md:p-6 xl:p-8">
          <div className="text-[#1a1a1a] text-xs md:text-sm lg:text-lg font-semibold">Deal Of The Week</div>
          <CustomGrid type={1}/>
        </div>


        <div className="w-11/12 xl:w-[1200px] mx-auto my-12 bg-[#EE90214D] py-6 relative">
          <div className="text-center text-[#1a1a1a] font-bold text-sm md:text-lg">Super discount for your 100$ purchase. Use this code OFFER100</div>

          <Image loading="lazy" src="/Vector3.png" className="absolute top-0 left-0 bottom-0 right-0" width={1000} height={50}/>
        </div>

        {/* popular products  */}
        <div className="my-12 bg-[#F6F6F7] ">
          <div className="w-11/12 xl:w-[1200px] mx-auto  py-12">
            <div className="w-full flex justify-between items-center">
              <div className="text-[#1a1a1a] text-xs md:text-sm lg:text-lg font-semibold">Popular Products</div>
              <div className="hidden md:flex w-fit gap-x-4 items-center">
              {
                ["Cake & Milk","Coffes & Teas","Pet Foods","Vegetables"].map((item)=>(
                  <div key={item} className="text-[#1a1a1a] text-sm">{item}</div>
                ))
              }
              </div>
            </div>


            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-2 gap-y-6 mt-4">
            {
              [0,1,2,3,4,5,6,7,8,9,10,11].map((item)=>(
                <ProductCard key={item} type={2}/>
              ))
            }
            </div>
          </div>

        </div>

        {/* colorful grid  */}
        <div className="my-12 bg-white py-12">
            <div className="w-11/12 xl:w-[1200px] mx-auto flex flex-wrap justify-between  gap-y-6">
              <div className="w-full md:w-[47.5%] lg:w-[32%] bg-[#FDDA0D] min-h-[200px] relative rounded-md overflow-hidden">
                <div className='absolute top-[15%] left-[5%] w-full z-10'>
                    <div className={`bg-white text-[#FBAB48] w-fit font-bold text-xs md:text-sm px-3 py-2 `}>-45 % Offer</div>

                    <div className={`text-white mt-4 text-sm md:text-lg font-semibold w-3/4`}>Organic Fruits</div>

                    <button className="mt-4 flex items-center gap-x-2 text-white text-sm font-semibold">
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FFFFFF26]">
                        <GoPlus/>
                      </div>
                      <div>Shop Now</div>
                    </button>

                </div>

                <div className="absolute bg-[#FBAB48] h-[300px] w-[300px] rounded-full -left-[20%] -top-[30%] z-0"/>
              </div>

              <div className="w-full md:w-[47.5%] lg:w-[32%] bg-[#12AD2B]  min-h-[200px] relative rounded-md">
                <div className='absolute top-[15%] left-[5%] w-full'>
                    <div className={`bg-white text-[#0DBB59] w-fit font-bold text-xs md:text-sm px-3 py-2 `}>-45 % Offer</div>

                    <div className={`text-white mt-4 text-sm md:text-lg font-semibold w-3/4`}>Hygiene Products</div>

                    <button className="mt-4 flex items-center gap-x-2 text-white text-sm font-semibold">
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FFFFFF26]">
                        <GoPlus/>
                      </div>
                      <div>Shop Now</div>
                    </button>

                </div>
              </div>

              <div className="w-full md:w-[47.5%] lg:w-[32%] bg-[#7E88E7]  min-h-[200px] relative rounded-md">
                <div className='absolute top-[15%] left-[5%] w-full'>
                    <div className={`bg-white text-[#7E88E7] w-fit font-bold text-xs md:text-sm px-3 py-2 `}>-45 % Offer</div>

                    <div className={`text-white mt-4 text-sm md:text-lg font-semibold w-3/4`}>All Creamy Jems</div>

                    <button className="mt-4 flex items-center gap-x-2 text-white text-sm font-semibold">
                      <div className="w-[30px] h-[30px] rounded-full flex items-center justify-center bg-[#FFFFFF26]">
                        <GoPlus/>
                      </div>
                      <div>Shop Now</div>
                    </button>

                </div>
              </div>
            </div>
        </div>


        {/* best deal of the day  */}
        <div className="my-12 bg-[#F6F6F7] ">
            <div className="w-11/12 xl:w-[1200px] mx-auto  py-12">
              <div className="text-[#1a1a1a] text-xs md:text-sm lg:text-lg font-semibold">Best Deal Of The Day</div>
              <CustomGrid2/>
            </div>
        </div>

        {/* // popular products  */}
        <div className="w-11/12 xl:w-[1200px] mx-auto my-12 bg-[#F6F6F7] py-12">
            <div className="w-full flex flex-col md:flex-row lg:justify-between px-4 gap-y-6">
              <div className="w-full md:w-[30%] bg-[#f5b35e] min-h-[350px] relative">
                <div className="absolute top-[10%] left-[5%] ">
                  <div className="bg-white px-3  py-1 rounded-full text-[#67B02E] text-xs font-semibold w-fit">
                    -45 % Offer
                  </div>


                  <div className="text-[#1a1a1a] text-xs md:text-sm font-bold w-[75%] mt-2">
                    With us, you will never miss any ingredient
                  </div>

                  <div className="flex items-center gap-x-3 mt-6">
                    <div className="bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center">
                      <GoPlus/>
                    </div>
                    <div className="text-[#1a1a1a] font-semibold text-xs md:text-sm">Shop Now</div>
                  </div>

                </div>
              </div>

              <div className="w-full  md:w-[65%] ">
                <div className="w-full flex justify-between">
                  <div className="text-[#1a1a1a] text-xs md:text-sm lg:text-lg font-semibold">Popular Products</div>

                  <div className="w-fit hidden md:flex gap-x-2 items-center">
                    <div className="bg-[#67B02E] uppercase text-white font-bold text-xs px-4 py-1 rounded-full">New sale</div>
                    <div className="bg-white uppercase text-[#1a1a1a] font-bold text-xs px-4 py-1 rounded-full">on sale</div>
                    <div className="bg-white uppercase text-[#1a1a1a] font-bold text-xs px-4 py-1 rounded-full">best rated</div>
                  </div>

                </div>

                <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[0, 1, 2,3].map((item) => (
                    <div key={item} className="w-full">
                      <ProductCard />
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        <div className="w-11/12 xl:w-[1200px] mx-auto my-12 bg-[#daa867] py-12 rounded-md">
          <div className=" pl-12">
            <div className="bg-[#67B02E] text-white text-xs text-semibold px-3 py-1 w-fit rounded-md">Weekend Discount</div>
            <div className="text-[#1a1a1a] text-lg md:text-xl xl:text-3xl font-bold w-[60%] mt-2">All You Need Under One Roof</div>
            <div className="text-[#74787C] text-xs mt-4">Just don’t miss the special offer this week</div>

            <button className="flex items-center gap-x-3 mt-6">
              <div className="bg-[#67B02E1F] w-[25px] h-[25px] rounded-full flex justify-center items-center  text-[#67B02E]">
                <GoPlus/>
              </div>

              <div className="text-[#1a1a1a] font-bold text-sm ">Shop Now</div>
            </button>
          </div>
        </div>


        {/* editor picks  */}
        <div className="w-11/12 xl:w-[1200px] mx-auto my-12 bg-[#F6F6F7] border-2 border-[#DC2626] rounded-md p-4 md:p-6 xl:p-8">
          <div className="text-[#1a1a1a] text-xs md:text-sm lg:text-lg font-semibold">Editors Picks</div>
          <CustomGrid type={2}/>
        </div>


        <Footer color="#67B02E"/>

    </div>
  )
}

export default Home2


import React from 'react'
import ProductCard from './ProductCard'
import ProductCard2 from './ProductCard2'

const CustomGrid = ({type}) => {
  return (
    <div className="w-full flex flex-wrap justify-center mt-6 gap-4 lg:flex-nowrap">
    <div className="w-full xl:w-[35%] flex flex-col md:flex-row gap-2 justify-center">
      {[0, 1].map((item) => (
        <ProductCard key={item} type={1} />
      ))}
    </div>

    {type === 1 && (
      <div className="w-full xl:w-[30%] flex flex-col gap-4 lg:gap-y-6">
        {[0, 1].map((item) => (
          <div
            key={item}
            className={`w-full min-h-[200px] rounded-xl relative p-4 ${
              item === 0 ? 'bg-[#DC2626]' : 'bg-[#D9D9D9]'
            }`}
          >
            <div className="absolute top-[15%] left-[5%]">
              <div
                className={`bg-white w-fit font-bold text-xs md:text-sm px-3 py-2 ${
                  item === 0 ? 'text-[#EC0106]' : 'text-[#FBAB48]'
                }`}
              >
                -45 % Offer
              </div>
              <div
                className={`mt-4 text-sm md:text-lg font-semibold w-3/4 ${
                  item === 0 ? 'text-white' : 'text-[#1a1a1a]'
                }`}
              >
                Make your grocery shopping easy with us
              </div>
              <div
                className={`text-xs mt-1 ${
                  item === 0 ? 'text-white' : 'text-[#74787C]'
                }`}
              >
                Feed your family the best
              </div>
            </div>
          </div>
        ))}
      </div>
    )}

    {type === 2 && (
      <div className="w-full xl:w-[30%] flex flex-col md:flex-row lg:flex-col gap-x-4 xl:flex-col gap-4 lg:gap-y-6">
        {[0, 1].map((item) => (
          <ProductCard2 key={item} />
        ))}
      </div>
    )}

    <div className="w-full xl:w-[35%] flex flex-col md:flex-row  gap-2 justify-center">
      {[0, 1].map((item) => (
        <ProductCard key={item} type={1} />
      ))}
    </div>
  </div>
  )
}

export default CustomGrid
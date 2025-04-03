import { IoIosArrowForward } from "react-icons/io";
const HeroSection = ({text,pageName}) => {
  return (
    <div className="w-full h-[200px] md:h-[250px] lg:h-[200px] bg-[#F3F3F3] relative overflow-hidden">

        <div className="text-[#1a1a1a] font-bold text-lg md:text-xl lg:text-4xl absolute top-[50%]  md:top-[40%] left-[10%]">{text}</div>

        <div className="flex items-center gap-x-3 absolute top-[20%] md:top-[40%] right-[10%] text-xs md:text-sm text-[#74787C]"> 
            Home
            <IoIosArrowForward/>
            <div className="text-[#1a1a1a] font-bold">{pageName}</div>
        </div>
        <div className="bg-[#E53E3E0F] w-[1000px] h-[1000px] rounded-full absolute -top-[10%] -left-[15%]"/>

        <div className="bg-transparent w-[1000px] h-[1000px] rounded-full absolute -top-[10%] -left-[5%] border border-[#E53E3E]"/>
    </div>
  )
}

export default HeroSection
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";




const CustomMenu = ({data,color}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`p-2 rounded-lg bg-[${color}] text-white hover:bg-red-700 transition`}
        aria-label="Toggle Menu"
      >
        {isOpen ? (<IoMdClose className="text-xl" />) : (<IoMenu className="text-xl" />)}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg p-2 z-50"
        >
          <ul className="flex flex-col gap-1 ">
            {data.map((item) => (
              <li
                key={item.id}
                className="p-2 hover:bg-gray-100 rounded cursor-pointer text-black font-bold text-xs uppercase "
                onClick={() => {
                  router.push(item.link);
                  setIsOpen(false); // Close menu after selection
                }}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default CustomMenu;

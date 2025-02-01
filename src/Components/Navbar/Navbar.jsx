import { useRef } from "react";
import { assets } from "../../assets/assets";
import { useState } from "react";
import { useEffect } from "react";

export const Navbar = () => {
  const menuIconRef = useRef();
  const [isScroll, setIsScroll] = useState(false);
  const openMenuIcon = () => {
    menuIconRef.current.style.transform = "translateX(-16rem)";
    menuIconRef.current.style.transition = "1000ms ease-in-out";
  };
  const CloseMenuIcon = () => {
    menuIconRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <div
      className={`fixed w-full bg-transparent top-0 left-0 z-50 py-1 px-10  flex items-center justify-between 
     ${
       isScroll
         ? " backdrop-blur-lg border-b border-white/60 bg-[#0000003b]"
         : ""
     }`}>
      <img src={assets.logo_img} alt="logo" className="w-28 ml-4" />
      {/* Large device menu icon links */}
      <ul className="hidden md:flex  text-white items-center bg-[#d9d9d934] px-4 xl:px-6 py-2 rounded-full">
        <li className="mx-2 xl:mx-4  text-md font-medium">
          <a href="#home">Home</a>
        </li>
        <li className="mx-2 xl:mx-4 text-md font-medium">
          <a href="#process">Process</a>
        </li>
        <li className="mx-2 xl:mx-4 text-md font-medium">
          <a href="#product">Product </a>
        </li>
        <li className="mx-2 xl:mx-4  text-md font-medium">
          <a href="#testimonails">Testimonails</a>
        </li>
        {/* <li className="mx-2 text-md font-medium">
          <a href="">Contact</a>
        </li> */}
      </ul>
      {/* */}

      <div className="mt-2 flex items-center gap-6 ">
        <div className="relative">
          <div className=" absolute -right-1 -top-4 w-5 h-5 bg-[#CD4275] text-white rounded-full flex items-center justify-center">
            0
          </div>
          <img src={assets.card} alt="" className="w-8" />
        </div>
        <div className="flex items-center gap-2 bg-transparent sm:bg-lightWhite rounded-full py-1 pl-3 pr-1">
          <button className="text-white hidden sm:block ">
            <a href="#contact">Contact</a>
          </button>
          <div className="bg-pink py-1 px-1 rounded-full">
            {" "}
            <img src={assets.login_img} alt="" className="w-4" />
          </div>
        </div>
        <div className="block md:hidden">
          <button onClick={openMenuIcon}>
            <img src={assets.menu_icon} alt="" className="w-6 " />
          </button>
        </div>
      </div>

      {/* mobile responcive menu icon links */}
      <div
        className=" fixed  w-64 top-0 -right-64 h-screen bg-[#27222262] backdrop-filter backdrop-blur-xl  z-50 "
        ref={menuIconRef}>
        <div className="w-full h-full py-4 px-2 relative">
          <img
            src={assets.remove_icon}
            alt=""
            className="absolute top-4 right-4 cursor-pointer"
            onClick={CloseMenuIcon}
          />
          <ul className="flex flex-col  text-white mt-10 ">
            <li className=" w-full  py-2 px-4 cursor-pointer duration-1000 hover:bg-[#ffffff70] hover:backdrop-filter hover:backdrop-blur-xl hover:text-pink">
              <a href="#home" className="font-bold  tracking-wider text-lg">
                Home
              </a>
            </li>
            <li className="w-full  py-2 px-4 duration-1000 cursor-pointer hover:bg-[#ffffff70] hover:backdrop-filter hover:backdrop-blur-xl hover:text-pink">
              <a href="#process" className="font-bold  tracking-wider text-lg">
                Process
              </a>
            </li>
            <li className="w-full  py-2 px-4 duration-1000 cursor-pointer hover:bg-[#ffffff70] hover:backdrop-filter hover:backdrop-blur-xl hover:text-pink">
              <a href="#product" className="font-bold  tracking-wider text-lg ">
                Product
              </a>
            </li>
            <li className="w-full  py-2 px-4 duration-1000 cursor-pointer hover:bg-[#ffffff70] hover:backdrop-filter hover:backdrop-blur-xl hover:text-pink">
              <a
                href="#testimonails"
                className="font-bold  tracking-wider text-lg ">
                Testimonails
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

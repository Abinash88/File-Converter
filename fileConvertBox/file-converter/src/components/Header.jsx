"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LogoImage from "../../public/logoimage.png";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [ishover, setIsHover] = useState(false);

  const handleNavbar = () => {
    setIsHover(!ishover);
  };
  return (
    <div className="topheader bg-transparent flex w-full h-[70px]">
      <div className="innerHeader w-[80%] m-auto flex justify-between items-center">
        <div className="headerleftside">
          <h5 className="sm:text-[18px] flex items-center p-1 text-[16px] font-bold text-gray-100">
            <Link href={"/"}>
              <Image
                className="w-[50px] logolink h-auto"
                src={LogoImage}
                alt="file converter"
              />{" "}
            </Link>
            <p>File Converter</p>
          </h5>
        </div>
        <nav className={`Navigation ${ishover ? 'right-0' :'left-[100%]'} sm:static fixed sm:w-auto top-0 sm:h-auto w-[300px] h-screen sm:bg-transparent bg-gray-500 text-gray-500 sm:z-10 z-50 `}>
          <ul className="ullist flex sm:flex-row flex-col sm:space-y-0 space-y-2 sm:pt-0 pt-4  sm:space-x-3">
            <h5 className="sm:text-[18px] border-b  border-yellow-400 sm:hidden flex items-center p-1 text-[16px] font-bold text-gray-100">
              <Link href={"/"}>
                <Image
                  className="w-[50px] logolink h-auto"
                  src={LogoImage}
                  alt="file converter"
                />{" "}
              </Link>
              <p className="text-yellow-400">File Converter</p>
            </h5>
            <li className="sm:text-[14px] text-[15px]  sm:text-gray-100 sm:w-auto w-full  py-2 sm:py-0  text-gray-600 font-semibold text-slate-200 ">
              <Link className="px-4 py-1" href={"/"}>
                Home
              </Link>
            </li>
            <li className="sm:text-[14px] text-[15px]  sm:text-gray-100 sm:w-auto w-full  py-2 sm:py-0  text-gray-600 font-semibold text-slate-200 ">
              <Link className="px-4 py-1" href={"/Blog"}>
                Blog
              </Link>
            </li>
            <li className="sm:text-[14px] text-[15px]  sm:text-gray-100 sm:w-auto w-full  py-2 sm:py-0  text-gray-600 font-semibold text-slate-200 ">
              <Link className="px-4 py-1" href={"/#moreConvert"}>
                {" "}
                More  
              </Link>
            </li>
          </ul>
        </nav>
        <div
          onClick={handleNavbar}
          className="hambox absolute right-6 top-5 block sm:hidden  z-50"
        >
          <Bars3BottomLeftIcon className="h-8 cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import Link from "next/link";
import React from "react";


const Header = () => {
  return (
    <div className="topheader bg-transparent flex w-full h-[70px]">
      <div className="innerHeader w-[80%] m-auto flex justify-between items-center">
        <div className="headerleftside">
          <h5 className="sm:text-[18px] headerlogo p-1 text-[16px] font-bold text-gray-100">
            <Link href={"/"}><img src={''} alt="file converter"/></Link>
          </h5>
        </div>
        <nav className="Navigation ">
          <ul className="ullist flex  sm:space-x-3">
            <li className="sm:text-[14px] text-[13px]   font-semibold text-slate-200 ">
              <Link className="px-4 py-1" href={"/Blog"}>Blog</Link>
            </li>
            <li className="sm:text-[14px] text-[13px]   font-semibold text-slate-200 ">
              <Link className="px-4 py-1" href={"/Blog"}> Convert</Link>
            </li>
            <li className="sm:text-[14px] text-[13px]   font-semibold text-slate-200 ">
              <Link className="px-4 py-1" href={"/Blog"}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

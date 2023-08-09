'use client'

import MainFileConverter from "@/components/MainFileConverter";
import MoreConvert from "@/components/MoreConvert";
import Image from "next/image";
import { useState } from "react";

export default function Home() {


  return (
    <div className="h-auto w-full">
    <main  className="flex z-50  flex-col items-center justify-between">
      <div className="herosection h-[80vh]  w-full ">
        <div className="topsection  flex flex-col items-between w-full h-full">
          <div className="">
            <h1 className="text-center mt-5 sm:text-[48px] text-[35px] mb-3 text-gray-300 font-bold herotitle">
            <span className="changecolor"> Convert</span> Your File 
            </h1>
            <p className="text-center sm:text-[17px] text-[14px] sm:mt-6 mt-5 text-gray-300">
              {" "}
              Fast And Easy way for File Conversion
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
              <div className="main_file_converter_box w-[750px] rounded-md  h-[300px]">
                  <MainFileConverter />
              </div>
          </div>
        </div>
      </div>
    </main>
    <div className="h-[100vh]">
      <MoreConvert/>
    </div>
    </div>

  );
}

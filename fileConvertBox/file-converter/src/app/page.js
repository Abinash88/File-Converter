'use client'

import MainFileConverter from "@/components/MainFileConverter";
import MoreConvert from "@/components/MoreConvert";
import Logo from '../../public/heroLogo.png'
import Image from "next/image";
import Styles from './styles.module.css';

export default function Home() {

  return (
    <div className="h-auto w-full">
      <main className={`flex z-50   flex-col items-center justify-between`}>
        <div className={` ${Styles.herosection} h-[80vh] herosection  w-full `}>
          <div className="topsection  flex flex-col items-between w-full h-full">
            <div className="">
              <Image src={Logo} width={'auto'} className="mx-auto h-[75px] sm:h-[90px] w-auto" alt="logo image" />
              <h1 className="text-center  sm:text-[55px] text-[35px] mb- text-gray-300 font-bold herotitle">
                <span className="changecolor"> Convert</span> Your File
              </h1>
              <p className="text-center sm:text-[16px] text-[14px] font-semibold sm:mt-1 mt-2 sm:mb-3  text-gray-300">
                {" "}
                Fast And Easy way for File Conversion
              </p>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="main_file_converter_box w-[700px] rounded-md h-[300px]  sm:h-[230px]">
                <MainFileConverter />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="h-[100vh] pt-8">
        <MoreConvert />
      </div>
      {/* <div className="h-[40vh]">
        <Footer />
      </div> */}
    </div>

  );
}

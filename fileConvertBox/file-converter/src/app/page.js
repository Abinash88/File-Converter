'use client'

import MainFileConverter from "@/components/MainFileConverter";
import MoreConvert from "@/components/MoreConvert";
import Footer from '../app/Footer/page';

export default function Home() {

  return (
    <div className="h-auto w-full">
      <main className="flex z-50  flex-col items-center justify-between">
        <div className="herosection h-[77vh]  w-full ">
          <div className="topsection  flex flex-col items-between w-full h-full">
            <div className="">
              <h1 className="text-center mt-5 sm:text-[55px] text-[35px] mb- text-gray-300 font-bold herotitle">
                <span className="changecolor"> Convert</span> Your File
              </h1>
              <p className="text-center sm:text-[17px] text-[14px] font-semibold sm:mt-1 mt-2 sm:mb-3  text-gray-300">
                {" "}
                Fast And Easy way for File Conversion
              </p>
            </div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="main_file_converter_box w-[650px] rounded-md  h-[230px]">
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

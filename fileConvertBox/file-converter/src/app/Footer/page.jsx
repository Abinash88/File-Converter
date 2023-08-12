import Link from 'next/link'
import React from 'react'
import LogoImage from "../../../public/logoimage.png";
import Image from 'next/image';

const page = () => {
  return (
    <div className='h-full w-full  fotter'>
        <div className="w-[75%] flex  items-start py-10 justify-between mx-auto h-[100%]">
            <div className="flex flex-col w-[33.33%]">
            <h5 className="sm:text-[18px]   flex items-center p-1 text-[16px] font-bold text-gray-100">
              <Link href={"/"}>
                <Image
                  className="w-[50px] logolink bg-gray-500 rounded-full h-auto"
                  src={LogoImage}
                  alt="file converter"
                />{" "}
              </Link>
              <p className="text-gray-600">File Converter</p>
            </h5>
              <div className="">
                <p className='text-gray-600 font-semibold mt-5 px-4 fotterp'>Fast & Easy way to converting the file of any format to different type.</p>
              </div>
            </div>
            <div className="">

            </div>
        </div>
    </div>
  )
}

export default page
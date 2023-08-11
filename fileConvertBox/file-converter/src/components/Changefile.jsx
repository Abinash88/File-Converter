"use client";

import myContext from "@/Reduxfolder/FileTypeContext";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import FileTypeListItem from "./FileTypeListItem";

const Changefile = () => {
  const { GetFilePath, gettype, loading, filestoShow } = useContext(myContext);
  const [Toggle, setToggle] = useState(false);
  const [GetType, setGetType] = useState();


  const SendFileTypeToChange = (filetype) => {
    setToggle(false)
    setGetType(filetype);

    
  }

  const searchInput = (e) => {
    const text = e.target.value;
    console.log(text);  
  }


  const ToggleFileTypeBox = () => {
    setToggle(!Toggle)
  }

  console.log(gettype)
  return (
    <div className="w-full h-full ">
      <div className="filetype flex px-6 items-center justify-between bg-gray-700 mx-auto w-[90%] rounded-md h-[50%]">
        <div className="flex space-x-4">
          <PhotoIcon className="h-7 text-green-400" />
          <p className="text-gray-200 font-semibold text-[15px]">
            {" "}
            {filestoShow?.name}
          </p>
        </div>

        <div className="">
          <div onClick={ToggleFileTypeBox} className="w-[90px] cursor-pointer h-[30px] px-2 space-x-4 border border-green-300 rounded-md flex items-center justify-end">
            <p className="text-gray-200">{GetType?GetType:''}</p>
            <ChevronDownIcon className="h-7 text-green-300 " />
          </div>
          <div  className={`icontype absolute  ${Toggle ? '':'hidden'} w-[300px] h-[300px] top-[-230px] right-[150px] rounded-md  bg-gray-200`}>
              <div className="w-full h-[20%] flex items-center">
                <input onChange={searchInput} type="search" placeholder="search Type here... " className="bg-transparent w-full py-2 active:border-none px-4 searchinput" />
              </div>
              <div  className={`w-full h-[80%] hoverline overflow-auto`}>
                {
                  gettype?.map((item) => {
                    console.log(item);
                    return (
                      <FileTypeListItem item={item} SendFileTypeToChange={SendFileTypeToChange}/>
                    )
                  })
                }
              </div>
          </div>
        </div>
      </div>
      <div className=" w-full  flex justify-center">
        <button className="mt-5 text-gray-600 sm:px-8 px-10 sm:py-3 py-2 rounded-md convertbtn flex space-x-3 items-center ">
          <span> Convert</span>
          <ArrowRightIcon className="h-6 icons" />
        </button>
      </div>
    </div>
  );
};

export default Changefile;

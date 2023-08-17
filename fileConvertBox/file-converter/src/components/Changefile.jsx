"use client";

import myContext from "@/CreateContext/FileTypeContext";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import React, { useContext, useEffect, useState } from "react";
import FileTypeListItem from "./FileTypeListItem";

const Changefile = () => {
  const {
    GetFilePath,
    gettype,
    loading,
    filestoShow,
    FetchDownload,
    Oldfile,
    DownLoadFile,
    ConversionLoading,
    downloadFile
  } = useContext(myContext);
  const [Toggle, setToggle] = useState(false);
  const [GetType, setGetType] = useState();

  const getTheType = (Oldfile) => {
    const file = Oldfile.split(".");
    const type = file[file.length - 1];
    return type;
  };
  const SendFileTypeToChange = (filetype) => {
    // setting the toggle for the filetype chooser box
    setToggle(false);
    // setting type of file for showing the name of file
    setGetType(filetype);
    // calling the fetch download function in the layout component
    FetchDownload(filetype, Oldfile);
  };
  // code for search filetype from the filetype chooser box
  const searchInput = (e) => {
    const text = e.target.value;
    console.log(text);
  };

  const ToggleFileTypeBox = () => {
    setToggle(!Toggle);
  };

  // function for downloading the file
  const downloadingFile = () => {
    // downloadFile is a file name for downloading the file in the backend
    DownLoadFile(downloadFile);
  };

  return (
    <div className="w-full h-full ">
      <div className="filetype flex px-6 items-center sm:flex-row flex-col py-2 justify-between bg-gray-700 mx-auto w-[90%] rounded-md h-[70%] sm:h-[50%]">
        <div className="flex space-x-4">
          <PhotoIcon className="h-7 text-green-400" />
          <p className="text-gray-200 font-semibold text-[14px] sm:text-[15px]">
            {" "}
            {filestoShow?.name}
          </p>
        </div>

        <p className="text-gray-100 bg-green-600 font-semibold px-2 rounded-md">
          {GetType ? `${getTheType(Oldfile)} To ${GetType}` : null}
        </p>

        <div className="">

          {!ConversionLoading ? 
          <div
            onClick={ToggleFileTypeBox}
            className="w-auto cursor-pointer h-[30px] px-2 space-x-4 border border-green-300 rounded-md flex items-center justify-end"
          >
            <p className="text-gray-200">{GetType ? GetType : ""}</p>
            <ChevronDownIcon className="h-7 text-green-300 " />
          </div>
          : <h2 className="text-gray-200 font-semibold text-[17px]">Converting...</h2>  
        }

          <div
            className={`icontype absolute  ${
              Toggle ? "" : "hidden"
            } w-[300px] h-[300px] top-[-230px] right-[90px] sm:right-[150px] rounded-md  bg-gray-200`}
          >
            <div className="w-full h-[20%] flex items-center">
              <input
                onChange={searchInput}
                type="search"
                placeholder="search Type here... "
                className="bg-transparent w-full py-2 active:border-none px-4 searchinput"
              />
            </div>
            <div className={`w-full h-[80%] hoverline overflow-auto`}>
              {gettype?.map((item) => {
                return (
                  <FileTypeListItem
                    item={item}
                    SendFileTypeToChange={SendFileTypeToChange}
                  />
                );
              })}
            </div>
          </div>


        </div>
      </div>
      <div className=" w-full  flex justify-center">
        <button onClick={downloadingFile} className="mt-5 text-gray-600 sm:px-8 px-10 sm:py-3 py-2 rounded-md convertbtn flex space-x-3 items-center ">
          <span> Download</span>
          <ArrowRightIcon className="h-6 icons" />
        </button>
      </div>
    </div>
  );
};

export default Changefile;

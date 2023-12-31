"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import {
  ArrowLongLeftIcon,
  ArrowPathIcon,
  ArrowUpTrayIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import myContext from "@/CreateContext/FileTypeContext";
import Changefile from "./Changefile";

const MainFileConverter = () => {
  const [files, setfiles] = useState(null);
  const [image, setImage] = useState("");
  const fileref = useRef(null);
  const { GetFilePath, gettype, loading, setGettype, Oldfile } = useContext(myContext);

  // post request to send the file or image
  const getTheFile = (e) => {
    const file = e.target?.files[0];
    setfiles(file);
    GetFilePath(file, setfiles);
  };

  const handlefile = () => {
    fileref.current.click();
  };

  const DeleteTheUploads = async() => {
      setGettype(null);
      const queryfile = `?oldfile=${Oldfile}`
      try{
         await fetch(`http://localhost:5000/DeleteUpload${queryfile}`,{
          method:'GET',
        })
      }catch(err) {
        console.log(err.message)
      }
  }

  return (
    <div className="converterBox   w-full flex items-center justify-center flex-col h-full ">
      <div className={`w-full ] ${
            gettype !== null ? "" : "hidden"
          }`}>
        <button
          onClick={DeleteTheUploads}
          className={`text-[15px   mb-3 font-semibold bg-gray-600 ml-6 hover:bg-gray-700 text-white sm:px-3 px-2 sm:py-2 py-1 rounded-md`}
        >
          <ArrowLongLeftIcon className="h-7"/>
        </button>
      </div>
      <div className="uploadfile relative flex-col w-full h-[70%] flex items-center justify-center">
        {gettype === null ? (
          <div className="uploadbox bg-gray-400 cursor-pointer flex-col space-y-2 w-[200px] h-[100px] flex items-center justify-center  rounded-md">
            <h2 className="text-yellow-400 font-semibold text-[19px]">
              {" "}
              Choose File
            </h2>
            <div>
              <form className="absolute flex  items-center w-[100%] left-0  justify-center  fileform h-[100%] top-[0px] ">
                <input
                  ref={fileref}
                  onChange={getTheFile}
                  type="file"
                  name="files"
                  className=" w-full h-full inputfile"
                />
              </form>
              {loading ? (
                <ArrowPathIcon className="h-[30px] text-white loading" />
              ) : (
                <ArrowUpTrayIcon className="h-[35px] uploadarrow" />
              )}
            </div>
          </div>
        ) : (
          <Changefile />
        )}
        {/* <h5 className="text-gray-200 mt-3 font-light ">
          {gettype === null ?"upload file" : null}
        </h5> */}
      </div>
    </div>
  );
};

export default MainFileConverter;

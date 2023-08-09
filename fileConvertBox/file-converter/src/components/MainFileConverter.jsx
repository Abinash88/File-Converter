"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

const MainFileConverter = ({ getfiledata }) => {
  const filebox = useRef(null);
  const [files, setfiles] = useState('');

  


  return (
    <div className="converterBox  w-full flex flex-col h-full ">
      <div className="filetype flex items-center justify-center w-full h-[40%]">
        <select
          name="filetype"
          className="selectoption w-[50%] px-4 rounded-md py-2 bg-transparent border text-gray-100 outline-none  hover:font-semibold"
          id="filetypes"
        >
          <option className="text-gray-600 font-semibold" value="-Select-">
            -Select-
          </option>
          <option className="text-gray-600 font-semibold" value="JPEG">
            JPEG
          </option>
          <option className="text-gray-600 font-semibold" value="PNG">
            PNG
          </option>
          <option className="text-gray-600 font-semibold" value="PDF">
            PDF
          </option>
        </select>
      </div>
      <div className="uploadfile relative flex-col w-full h-[60%] flex items-center justify-center">
        <div
          className="uploadbox cursor-pointer w-[200px] h-[100px] flex items-center justify-center  rounded-md"
        >
          <span>
            <form className="absolute flex items-center w-[50%] justify-center  fileform h-[200px] top-[30px] left-[25%] h-[90px] ">
              <input ref={filebox} type="file" className=" w-[200px] h-[200px] inputfile" />
            </form>
            <ArrowUpTrayIcon className="h-[35px] uploadarrow" />
          </span>
        </div>
        <h5 className="text-gray-200 mt-3 ">upload file</h5>
      </div>
    </div>
  );
};

export default MainFileConverter;

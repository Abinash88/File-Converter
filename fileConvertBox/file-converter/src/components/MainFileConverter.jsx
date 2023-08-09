"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpTrayIcon, DocumentIcon } from "@heroicons/react/24/solid";
import axios from "axios";

const MainFileConverter = () => {
  const [files, setfiles] = useState();
  const [image, setImage] = useState("");
  const [loading, setloading] = useState(false);
  const [fileType, setFileType] = useState('');

  const getTheFile = (e) => {
    const file = e.target?.files[0];
    setfiles(file);
    setImage(file?.name);
  };

  const getFileType = (e) => {
    const type = e.target?.value;
    setFileType(type);
  }

  // sending file to the api backend server
  const SendFile = async () => {
    setloading(true);
    try {
      const formData = new FormData();
      formData.append("files", files);
      formData.append('fileType', fileType)
      const res = await axios.post("http://localhost:5000/file/GetFileData", {
        body: formData,
      });

      const data = res.data;
      if (!data.success) return console.error(data.message);
      setloading(false);
      console.log(data.message);
    } catch (err) {
      console.log(err.message);
      setloading(false);
    }
  };

  return (
    <div className="converterBox  w-full flex flex-col h-full ">
      <div className="filetype flex items-center justify-center w-full h-[25%]">
        <select
          onChange={getFileType}
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
        <div className="uploadbox cursor-pointer w-[200px] h-[100px] flex items-center justify-center  rounded-md">
          <span>
            <form className="absolute flex  items-center w-[25%]  justify-center  fileform h-[80px] top-[0px] left-[38%] h-[90px] ">
              <input
                onChange={getTheFile}
                type="file"
                className=" w-full h-full inputfile"
              />
            </form>
            <ArrowUpTrayIcon className="h-[35px] uploadarrow" />
          </span>
        </div>
        <h5 className="text-gray-200 mt-3 font-light ">
          {image !== "" ? image : "upload file"}
        </h5>
        <button
          className="mt-5 text-gray-600 px-8 py-3 rounded-md convertbtn "
          onClick={SendFile}
        >
          {loading ? "loading..." : "Convert"}
        </button>
      </div>
    </div>
  );
};

export default MainFileConverter;

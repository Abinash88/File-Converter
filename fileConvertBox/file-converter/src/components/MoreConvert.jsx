// import { DocumentChartBarIcon, DocumentCheckIcon, DocumentIcon,DocumentTimeline, DocumentType, DocumentFragment } from "@heroicons/react/24/solid";
import myContext from "@/CreateContext/FileTypeContext";
import {
  DocumentArrowDownIcon,
  DocumentChartBarIcon,
  DocumentCheckIcon,
  DocumentIcon,
  DocumentMinusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import React, { useContext } from "react";

const MoreConvert = () => {

  const {handlefile} = useContext(myContext);

  return (
    <div id="moreConvert" className="w-full  h-full">
      <div className="w-[80%] mx-auto  ">
        <div className="pt-[50px]">
          <h2 className="sm:text-[36px] text-[29px] font-bold text-slate-600 text-center">
            More File Type Converter
          </h2>
          <p className="text-center mt-4 font-semibold text-gray-500 text-[15px] sm:text-[17px]">
            Convert your file to any format.
          </p>
        </div>
        <div className="w-full moreconvertbox h-full mt-[50px]">
          <div
            onClick={() => handlefile("DOC")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold"> PDF TO DOC</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold"> DODC TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold">HTML TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("HTML")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold">PDF TO HTML</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold">EXCEL TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold">WORD TO PDF</p>
          </div>
          <div
            onClick={() => handlefile("WORD")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold"> PDF TO WORD</p>
          </div>
          <div
            onClick={() => handlefile("POWERPOINT")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold"> PDF TO POWERPOINT</p>
          </div>

          <div
            onClick={() => handlefile("EXCEL")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold"> PDF TO EXCEL</p>
          </div>

          <div
            onClick={() => handlefile("DODC")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center text-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12  text-yellow-500" />
            <p className="text-yellow-500 font-semibold"> PDF TO DODC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreConvert;

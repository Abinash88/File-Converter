// import { DocumentChartBarIcon, DocumentCheckIcon, DocumentIcon,DocumentTimeline, DocumentType, DocumentFragment } from "@heroicons/react/24/solid";
import {
  DocumentArrowDownIcon,
  DocumentChartBarIcon,
  DocumentCheckIcon,
  DocumentIcon,
  DocumentMinusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const MoreConvert = ({ handlefile }) => {
  return (
    <div id="moreConvert" className="w-full  h-full">
      <div className="w-[80%] mx-auto  ">
        <div className="pt-[50px]">
          <h2 className="sm:text-[36px] text-[29px] font-bold text-slate-600 text-center">
            More File Converter
          </h2>
          <p className="text-center mt-4 text-gray-500 text-[15px] sm:text-[17px]">
            Convert your file to any format.
          </p>
        </div>
        <div className="w-full moreconvertbox h-full mt-[50px]">
          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentTextIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO DODC</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentChartBarIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO DOC</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentArrowDownIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentCheckIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentMinusIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>
          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentMinusIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>
          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentMinusIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentMinusIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>

          <div
            onClick={() => handlefile("PDF")}
            className="flex flex-col cursor-pointer hover:bg-yellow-200 bg-yellow-100 w-[130px] rounded-md h-[130px] justify-center items-center space-y-2"
          >
            <DocumentMinusIcon className="h-12 text-yellow-500" />
            <p className="text-yellow-500 font-semibold">JPG TO PDF</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreConvert;

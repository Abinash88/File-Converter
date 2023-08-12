'use client'

import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster, toast } from 'react-hot-toast'
import { useEffect, useState } from 'react';
import myContext from '@/CreateContext/FileTypeContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  // loading for the  file uploader
  const [loading, setloading] = useState(false);

  // conversion fetch second code loading usestate \
  const [ConversionLoading, setConversionLoading] = useState(false);

  // getting the file type 
  const [gettype, setGettype] = useState(null);

  // setting the file name to show in the frontend
  const [filestoShow, setfilestoShow] = useState();

  // capturing the old filepath of backend for the seconed time fetching to file conversion
  const [Oldfile, setOldfile] = useState('');

  // setting the download file for downloading the file in the user device
  const [downloadFile, setDownloadFile] = useState('');

  // run another fetch function for conversion of file 
  const GetFilePath = async (files, setfiles) => {
    setfilestoShow(files)
    try {
      // putting  file in the formdata 
      const formData = new FormData();
      formData.append("files", files);
      setloading(true);
      const res = await fetch("http://localhost:5000/GetFileData", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!data.success) return console.error(data.message);
      setfiles(null);
      setloading(false);
      setOldfile(data?.filepath)
      console.log(data);
      setGettype(data?.fileType);
    } catch (err) {
      console.log(err.message);
      setloading(false);
      setfiles(null);
    }
  };

  // fetch for getting conversion the file 
  const FetchDownload = async (filetype, Oldfile) => {
    setConversionLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/FetchDownload`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filetype,
          filepath: Oldfile
        })
      });

      const data = await res.json();
      if (!data.success) {
        console.log(data.message)
        toast.error(data.message);
      };
      setDownloadFile(data?.localfile);
      setConversionLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err.message);
      setConversionLoading(false);
    }
  }


  // fetch for downloading the files
  const DownLoadFile = async (Oldfile) => {
    try {
      const res = await fetch(`http://localhost:5000/Download`, {
        method: 'GET',
        headers:{
          Oldfile,
        }
      })

      const data = await res.json();
      if (!data.success) console.error(data.message);
      console.log(data.message);
    } catch (err) {
      console.log(err.message);
    }
  }

  const handlefile = (type) => {
    console.log(type)
    
  }


  return (
    <html lang="en">
      <body className={` `}>
        <myContext.Provider value={{ GetFilePath, gettype, loading, FetchDownload, filestoShow, Oldfile, DownLoadFile, ConversionLoading, handlefile, downloadFile }}>
          <Toaster />
          <div className="headersection">
            <Header />
          </div>
          {children}
        </myContext.Provider>
      </body>
    </html>
  )
}

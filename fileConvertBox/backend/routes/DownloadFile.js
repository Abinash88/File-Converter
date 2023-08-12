const express =  require('express');
const DownloadFile = express.Router();
const path = require('path');
const fs = require('fs');

DownloadFile.get('/Download', (req, res) => {
    // const downloadpath = req?.query.Oldfile;
    const downloadpath = './public/1691828474515.png';
    console.log(path.join(__dirname, downloadpath));
    res.download(downloadpath, (err) =>  {
        if(err) return res.status(404).json({success:false, message:err.message});
        console.log(downloadpath)
        // fs.unlink(downloadpath, () => {})
    })

})

module.exports = DownloadFile;
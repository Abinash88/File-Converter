const express =  require('express');
const DownloadFile = express.Router();
const path = require('path');
const fs = require('fs');

DownloadFile.get('/Download', (req, res) => {
    const downloadpath = req?.query.Oldfile;
    console.log(downloadpath);
    res.download(downloadpath, (err) =>  {
        if(err) return res.status(404).json({success:false, message:err.message});
        fs.unlink(downloadpath, () => {})
    })

})

module.exports = DownloadFile;
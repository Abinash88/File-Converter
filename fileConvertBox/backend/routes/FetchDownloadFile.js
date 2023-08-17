let request = require('request');
const express = require('express');
const fs = require('fs');
const ConvertAPI = require('convertapi')('MhqoqQu96XFUe3R6');
const FetchDownloadFile = express.Router();


FetchDownloadFile.post('/FetchDownload', (req, res) => {

    const {filepath, filetype} = req.headers;
    console.log(filepath,typeof filetype);
    ConvertAPI.convert(filetype, { File:filepath})
    .then(function(result) {
      // get converted file url
      console.log("Converted file url: " + result.file.url);
      // save to file
      return result.file.save('./public');
    })
    .then(function(file) {
      console.log("File saved: " + file);
      res.status(200).json({ success: true, message:'file convert successfully', localfile:file})
      fs.unlink(file, () => {})
    })
    .catch(function(e) {
      console.error(e.toString(),'error occured');
      res.status(200).json({ success: true, message:'file convert successfully'})
    });

})


module.exports = FetchDownloadFile;
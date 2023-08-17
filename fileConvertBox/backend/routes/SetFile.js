const express = require('express');
const SetFile = express.Router();
const upload = require('../features/multer');
const request = require('request');
const path = require('path');
const FileTypes = require('../features/FileTypes');
const convertapi = require('convertapi')('MhqoqQu96XFUe3R6');



SetFile.post('/GetFileData', upload.single('files'), async (req, res) => {
    if (req.method !== 'POST') return res.json(400).json({ success: false, message: 'POST method only suppourted!' });
    const file = req.file.path
    const type = path.extname(file).split('.').join('');
    let gettype;
    for(let i in FileTypes) {
      gettype = FileTypes[type];
    }
    res.status(200).json({ success: true, message:'file saved successfully', filepath:file, filetype:gettype})
    
});


module.exports = SetFile;
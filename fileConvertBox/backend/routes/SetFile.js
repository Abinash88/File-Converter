const express = require('express');
const SetFile = express.Router();
const upload = require('../features/multer');
const request = require('request');
const apiKey = '33ef1db71f05c00a307ab785de4fcc318ffd1a88';





SetFile.post('/GetFileData', upload.single('files'), async (req, res) => {
    if (req.method !== 'POST') return res.json(400).json({ success: false, message: 'POST method only suppourted!' });
    const file = req.file
    // console.log(file,'file')
    const findtype = file.path.split('.');
    const lasttype = findtype[findtype.length - 1]
    
    // generating the formats of files
    request.get(`https://sandbox.zamzar.com/v1/formats/${lasttype.toLocaleLowerCase()}`, function (err, response, body) {
        if (err) {
            console.error('Unable to get formats', err);
        } else {
            // console.log('SUCCESS! Supported Formats:', JSON.parse(body));
            const types = JSON.parse(body)
            res.status(200).json({ success: true, message: 'file uploaded successfully', fileType: types.targets })

        }
    }).auth(apiKey, 'Zamzar@854no', true);


    
});


module.exports = SetFile;
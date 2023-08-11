const express = require('express');
const GetFile = express.Router();
const upload = require('../features/multer');
let request = require('request'),
    fs = require('fs'),
    apiKey = '33ef1db71f05c00a307ab785de4fcc318ffd1a88';
fileID = 3;





GetFile.get('/GetType', async (req, res) => {
    if (req.method !== 'GET') return res.json(400).json({ success: false, message: 'GET method only suppourted!' });
    
    
    // generating the formats of files
    request.get(`https://sandbox.zamzar.com/v1/formats/${'pdf'}`, function (err, response, body) {
        if (err) {
            console.error('Unable to get formats', err);
        } else {
            // console.log('SUCCESS! Supported Formats:', JSON.parse(body));
            const types = JSON.parse(body)
            // res.status(200).json({ success: true, message: 'file uploaded successfully', fileType: types.targets })

        }
    }).auth(apiKey, 'Zamzar@854no', true);


    
    // const formData = {
    //     target_format: file,
    //     source_file: fs.createReadStream(filepath)
    // };
    

    // // creating the convertion job 
    // request.post({url:'https://sandbox.zamzar.com/v1/jobs/', formData: formData }, function (err, response, body) {
    //     if (err) {
    //         console.error('Unable to start conversion job', err);
    //     } else {
    //         // console.log(formData.source_file)\
    //         console.log('SUCCESS! Conversion job started:', JSON.parse(body));
    //         const poll = JSON.parse(body);
    //         let jobID = poll.id
    //         pollJobStatuss(jobID)
    //     }
    // }).auth(apiKey, 'Zamzar@854no', true);


    
});


module.exports = GetFile;
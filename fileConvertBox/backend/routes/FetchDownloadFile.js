let request = require('request');
const express = require('express');
const fs = require('fs');
const apiKey = '33ef1db71f05c00a307ab785de4fcc318ffd1a88';
const FetchDownloadFile = express.Router();


FetchDownloadFile.post('/FetchDownload', (req, res) => {

    const filetype = req.body.filetype
    const filepath = req.body.filepath

    const localfile = `./download/${Date.now()}.${filetype.toLowerCase()}`

    const formData = {
        target_format: filetype,
        source_file: fs.createReadStream(filepath)
    };


    // creating the convertion job 
    request.post({ url: 'https://sandbox.zamzar.com/v1/jobs/', formData: formData }, function (err, response, body) {
        if (err) {
            console.error('Unable to start conversion job', err);
        } else {
            // console.log(formData.source_file)\
            console.log('SUCCESS! Conversion job started:', JSON.parse(body));
            const poll = JSON.parse(body);
            let jobID = poll.id
            pollJobStatuss(jobID)
        }
    }).auth(apiKey, 'Zamzar@854no', true);


    function pollJobStatuss(jobID) {
        const pollInterval = 5000; // Poll every 5 seconds
        const maxAttempts = 20; // Maximum number of attempts
        let attempts = 0;
        const poll = setInterval(function () {
            attempts++;
            request.get(`https://sandbox.zamzar.com/v1/jobs/${jobID}`, function (err, response, body) {
                if (err) {
                    console.error('Unable to get job', err);
                } else {
                    const jobStatus = JSON.parse(body).status;
                    console.log(JSON.parse(body))
                    console.log(`Job status: ${jobStatus}`);
                    if (jobStatus === 'successful') {
                        clearInterval(poll); // Stop polling if the job is successful
                        const data = JSON.parse(body)
                        const fileID = data.target_files[0].id;
                        console.log(fileID);
                        downloadConvertedFile(fileID);
                    } else if (jobStatus === 'failed' || attempts >= maxAttempts) {
                        clearInterval(poll); // Stop polling on failure or max attempts reached
                    }
                }
            }).auth(apiKey, 'Zamzar@854no', true);
        }, pollInterval);
    }


    const downloadConvertedFile = (fileID) => {

        request.get({ url: `https://sandbox.zamzar.com/v1/files/${fileID}/content`, followRedirect: false }, function (err, response, body) {
            if (err) {
                console.error('Unable to download file:', err);
            } else {
                // We are being redirected
                if (response.headers.location) {
                    // Issue a second request to download the file
                    var fileRequest = request(response.headers.location);
                    fileRequest.on('response', function (res) {
                        res.pipe(fs.createWriteStream(localfile));
                    });
                    fileRequest.on('end', function () {
                        console.log('File download complete');
                    });
                }
            }
        }).auth(apiKey, 'Zamzar@854no', true).pipe(fs.createWriteStream(localfile));

        
    }
    
    res.status(200).json({success: true, message:"successfully created converted file",localfile});

})


module.exports = FetchDownloadFile;
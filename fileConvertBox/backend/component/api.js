let request = require('request'),
    fs = require('fs'),
    apiKey = '33ef1db71f05c00a307ab785de4fcc318ffd1a88';
    fileID = 3;


const apibox = async (filetype, filepath) => {
    const localFilename = filepath;

    // generating the formats of files
    request.get('https://sandbox.zamzar.com/v1/formats/pdf', function (err, response, body) {
        if (err) {
            console.error('Unable to get formats', err);
        } else {
            console.log('SUCCESS! Supported Formats:', JSON.parse(body));

        }
    }).auth(apiKey, '', true);


    const formData = {
        target_format: 'pdf',
        source_file: fs.createReadStream(filepath)
    };

    // creating the convertion job 
    request.post({ url: 'https://sandbox.zamzar.com/v1/jobs/', formData: formData }, function (err, response, body) {
        if (err) {
            console.error('Unable to start conversion job', err);
        } else {
            console.log('SUCCESS! Conversion job started:', JSON.parse(body));
            const poll = JSON.parse(body);
            let jobID = poll.id
            pollJobStatuss(jobID)
        }
    }).auth(apiKey, '', true);


    function pollJobStatuss(jobID) {
        const pollInterval = 5000; // Poll every 5 seconds
        const maxAttempts = 20; // Maximum number of attempts
        let attempts = 0;
        console.log(jobID)
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
                        // downloadConvertedFile(fileID, localFilename);
                    } else if (jobStatus === 'failed' || attempts >= maxAttempts) {
                        clearInterval(poll); // Stop polling on failure or max attempts reached
                    }
                }
            }).auth(apiKey, '', true);
        }, pollInterval);
    }



    // request.get('https://sandbox.zamzar.com/v1/jobs/' + jobID, function (err, response, body) {
    //     if (err) {
    //         console.error('Unable to get job', err);
    //     } else {
    //         console.log('SUCCESS! Got job:', JSON.parse(body));
    //     }
    // }).auth(apiKey, '', true);

    // const downloadConvertedFile = (fileID, localFilename) => {
    request.get({ url: `https://sandbox.zamzar.com/v1/files/${fileID}/content`, followRedirect: false }, function (err, response, body) {
        if (err) {
            console.error('Unable to download file:', err);
        } else {
            // We are being redirected
            if (response.headers.location) {
                // Issue a second request to download the file
                var fileRequest = request(response.headers.location);
                fileRequest.on('response', function (res) {
                    res.pipe(fs.createWriteStream(localFilename));
                });
                fileRequest.on('end', function () {
                    console.log('File download complete');
                });
            }
        }
    }).auth(apiKey, '', true).pipe(fs.createWriteStream(localFilename));
    // }

}

module.exports = apibox;
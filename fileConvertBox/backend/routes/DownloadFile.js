const express =  require('express');
const DownloadFile = express.Router();
const path = require('path');


DownloadFile.get('/Download', (req, res) => {
    if(req.method !== 'GET') return res.status(404).json({success:false, message:'GET method only supported!'});
    const downloadpath = req?.headers?.oldfile;
    console.log(typeof downloadpath);   
    const removeroutes = downloadpath.split('./routes')
    const clearfile = removeroutes.join('');
    const pathfile = path.join(__dirname, '/', clearfile);

    console.log(pathfile)
    res.download(pathfile, (err) =>  {
        if(err) {
            console.log(err.message,'error message') 
             res.status(400).json({success:false, message:'Error downloading'})
        }
    })

})

module.exports = DownloadFile;
const express =  require('express');
const app = express();
const DownloadFile = express.Router();


DownloadFile.get('/Download/:path', (req, res) => {
    if(req.method !== 'GET') return res.status(404).json({success:false, message:'GET method only supported!'});
    const downloadpath = req.params.path;
    console.log(downloadpath)   


})

module.exports = DownloadFile;
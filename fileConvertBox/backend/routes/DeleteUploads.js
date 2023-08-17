const express = require('express');
const DeleteUploads = express.Router();
const fs = require('fs');



DeleteUploads.get('/DeleteUpload',(req, res) => {
    if(req.method !== 'GET') return res.status(404).json({success:false, message:'GET method only supported'})

    const file = req.query.oldfile
    if(file !== '') {
        fs.unlink(file, (err) => {
            if(err) {
                console.log(err, 'error deleting file');
            }
        })
    } 
})


module.exports = DeleteUploads;

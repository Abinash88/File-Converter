const express = require('express');
const router = express.Router();
const upload = require('../features/multer');
const multiparty = require('multiparty');
const cloudnary = require('../features/cloudnary');
var docxConverter = require('docx-pdf');



router.post('/GetFileData',upload.single('files'), async (req, res) => {
    if (req.method !== 'POST') return res.json(400).json({ success: false, message: 'Post method only suppourted!' });
    console.log(req.file.path)
    try {
        // const form = new multiparty.Form();
        // const { fields, file } = await new Promise((resolve, reject) => {
        //     form.parse(req, (err, fields, file) => {
        //         if (err) return reject(err);
        //         return resolve({ fields, file })
        //     })
        // })
        // console.log(file.files, fields.fileType[0])
        let outputfile = Date.now() + 'output.pdf'
        docxConverter(req.file.path, outputfile, (err, result) => {
            if (err) {
                console.log(err.message);
            } else {
                // res.download(outputfile, () => {

                // })
                console.log(result);
            }
        })
    } catch (err) {
        console.log(err.message);
    }


    res.status(200).json({ success: true, message: 'successfully uploaded file.' })
});

const config = {
    api: { bodyparser: false },
}

module.exports = config;

module.exports = router;
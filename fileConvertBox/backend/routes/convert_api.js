const express = require('express');
const router = express.Router();
const upload = require('../features/multer')

router.get('/GetFileData', upload.single('file'),(req, res) => {
    console.log('get in the server api')
    res.send(`<h1>file uploaded successfully!</h1>`)
});

module.exports = router;
const express = require('express');
const router = express.Router();
// const convertapi = require('convertapi')('MhqoqQu96XFUe3R6');
const apibox = require('../component/api');
const upload = require('../features/multer');
// const Api2Convert = require('../component/ApiToConvert');


router.post('/GetFileData',upload.single('files'), async (req, res) => {
    if (req.method !== 'POST') return res.json(400).json({ success: false, message: 'Post method only suppourted!' });

    // await Api2Convert('png', req?.file?.path)
  
    await apibox('png', req?.file?.path);

    res.status(200).json({ success: true, message: 'successfully uploaded file.' })
});


module.exports = router;
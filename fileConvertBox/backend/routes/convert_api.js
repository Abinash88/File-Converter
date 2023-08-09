const express = require('express');
const router = express.Router();
const multiparty = require('multiparty');
const upload = require('../features/multer');



router.post('/GetFileData', upload.single('images'), async (req, res) => {
    if (req.method !== 'POST') return res.json(400).json({ success: false, message: 'Post method only suppourted!' });
    console.log(req.body);
    try {
        const form = new multiparty.Form();
        const data = await new Promise((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) reject(err, 'promise rejected with error');
                return resolve({fields, files});
            })
        })

        console.log(data);
    } catch (err) {
        console.log(err.message);
    }

    res.status(200).json({ success: true, message: 'successfully uploaded file.' })
});

// const config = {
//     api: { bodyparser: false },
// }

module.exports = config;

module.exports = router;
const path = require('path');
const multer = require('multer');


const filesize = multer({
    limits:{filesize:10 * 1024 * 1024 }
})
const storage = multer.diskStorage({
    destination:function(req, file, cb)  {
         cb(null,'./uploads')
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() + '-' + path.extname(file.originalname));
    }
})

const upload = multer({storage:storage});
module.exports = upload;



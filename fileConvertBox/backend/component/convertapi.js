var convertapi = require('convertapi')('MhqoqQu96XFUe3R6');

const convertfile = async(filetype, filepath) => {

    try{
        const convert =await convertapi.convert('jpg', { File: filepath })
        .then((result) => {
            console.log(result.file.url);
            return result.file.save('./uploads')
        }).then((file) => {
            return file
        });

        return convert

    }catch(err) {
        console.log(err);
    }
      
}


module.exports = convertfile;
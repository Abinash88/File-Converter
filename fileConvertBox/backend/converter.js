const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const convertapi = require('./routes/GetFileType');
const path = require('path');
const GetFile = require('./routes/GetFileType');
const SetFile = require('./routes/SetFile');


app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({limit:"10mb", extended:false}))



app.use(GetFile)
app.use(SetFile)


app.listen(port, () => {
    console.log('listening on port ', port);
})
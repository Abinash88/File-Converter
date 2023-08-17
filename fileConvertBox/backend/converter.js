const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const SetFile = require('./routes/SetFile');
const FetchDownloadFile = require('./routes/FetchDownloadFile');
const DownloadFile = require('./routes/DownloadFile');
const DeleteUploads = require('./routes/DeleteUploads');

app.use(express.static('uploads'))
app.use(express.json());
app.use(cors({origin:'http://localhost:3000'}));
app.use(express.urlencoded({extended:false, limit:'10mb'}))

app.use(SetFile)
app.use(FetchDownloadFile)
app.use(DownloadFile)
app.use(DeleteUploads);



app.listen(port, () => {
    console.log('listening on port ', port);
})
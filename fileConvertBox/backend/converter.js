const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const path = require('path');
const SetFile = require('./routes/SetFile');
const FetchDownloadFile = require('./routes/FetchDownloadFile');


app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({limit:"10mb", extended:false}))

app.use(SetFile)
app.use(FetchDownloadFile)



app.listen(port, () => {
    console.log('listening on port ', port);
})
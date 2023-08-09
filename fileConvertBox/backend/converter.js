const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000
const convertapi = require('./routes/convert_api');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use('/', convertapi);

app.listen(port, () => {
    console.log('listening on port ', port);
})
const express = require('express')
const app = express()

const cors = require('cors')
const fileupload = require("express-fileupload");

app.use(cors())
app.use(fileupload());

app.post('/upload_img',(req, res)=> {
    console.log(req.files);
    res.send('Its Work!')
})

console.log('running server111');
app.listen(5000)
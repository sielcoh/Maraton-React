const express = require('express')
const cors = require('cors')
const fileupload = require("express-fileupload");
const removeBg = require('./removeBg')

const app = express()
app.use(cors())
app.use(fileupload());

app.use(express.static('imageNoBg'))
app.use(express.static('uploadImage'))





app.post('/upload_img', (req, res) => {
    let date = new Date();
    let file = req.files.file;
    let fileName = date.getTime() + '_' + req.files.file.name;

    file.mv(__dirname + '/UploadImage/' + fileName, async (err) => {
        if (err) {
            console.log(err);
        } else {
            await removeBg(fileName)
            res.send(fileName)
        }
    })
    
})
console.log('running server111');
app.listen(5000)
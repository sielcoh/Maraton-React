const express = require('express')
const cors = require('cors')
const fileupload = require("express-fileupload");
const removeBg = require('./removeBg')

const app = express()
app.use(cors(
    {
        origin:["https://maraton-react-back.vercel.app"],
        methods: ["POST" , "GET"],
        credentials: true
    }
))
app.use(fileupload());

app.use(express.static('imageNoBg'))
app.use(express.static('uploadImage'))




app.get('/',(req,res)=>{
    res.json('hello')
})
// app.post('/upload_img', (req, res) => {
//     let date = new Date();
//     let file = req.files.file;
//     let color = req.body.color;
//     let fileName = date.getTime() + '_' + req.files.file.name;

//     file.mv(__dirname + '/UploadImage/' + fileName, async (err) => {
//         if (err) {
//         } else {
//             await removeBg(fileName, color)
//             res.send(fileName)
//         }
//     })

// })
app.listen(5000, () => {
    console.log(`server started on port 5000`);
});
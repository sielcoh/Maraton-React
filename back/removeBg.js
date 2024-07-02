const fs = require("fs");
const axios = require('axios')
const FormData = require('form-data')
const path = require('path');

module.exports = removeBg = async(fileName) =>{
    const inputPath = __dirname + '/uploadImage/' + fileName;
    const formData = new FormData();
    formData.append("size", "auto");
    formData.append("image_file", fs.createReadStream(inputPath), path.basename(inputPath));

    await axios({
        method: 'post',
        url: 'https://api.remove.bg/v1.0/removebg',
        data: formData,
        responseType: 'arraybuffer',
        headers: {
            ...formData.getHeaders(),
            'X-Api-Key': '8QyogNi5ukwDwheYmzQLU6BM'
        },
        encoding: null
    })
        .then((res) => {
            if (res.status != 200) return console.log('err');
            fs.writeFileSync(__dirname + '/imageNoBg/no_bg_' + fileName, res.data)
        })
        .catch((err) => {
            return console.log(err);
        })
}
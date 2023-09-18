import express from 'express'
import bodyParser from 'body-parser';
import object from 'qr-image';
import fs from 'fs'
const app = express();
const PORT = 3000;

app.use(express.static("public/")); // Location of where static files are
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Listening on port number: ${PORT}`);
})

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.post("/generate", (req, res)=>{
    let userURL = req.body['UserInput'];
    let obj = {
        'qrCode' : '',
    }

    if (!userURL.toLowerCase().includes('.com')){    
        console.log("Error invalid url string");
        obj.qrCode = 'pictures/error.png';
    }
    else{
        let qr_png = object.image(userURL, {type:'png'});
        qr_png.pipe(fs.createWriteStream('public/pictures/qr.png'));
        obj.qrCode = 'pictures/qr.png';
    }

    res.render("index.ejs", obj);


})
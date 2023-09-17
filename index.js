import express from 'express'
import bodyParser from 'body-parser';

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
        'qrCode' : userURL
    }
    if (!userURL.toLowerCase().includes('.com')){
        userURL="Error";
        obj.qrCode = "QR code could not generate, url must contian \'.com\' in string";   
    }

    console.log(userURL);
    res.render("index.ejs", obj);


})
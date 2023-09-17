import express from 'express'

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Listening on port number: ${PORT}`);
})

app.get("/", (req, res) => {
    res.render("index.ejs")
})

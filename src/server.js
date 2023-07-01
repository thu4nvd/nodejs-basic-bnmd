import express from 'express';
import configViewEngine from './configs/viewEngine.js';
require('dotenv').config()

const app = express();
const port = process.env.port || 8080;
// console.log(process.env) // remove this after you've confirmed it is working
// console.log('>>>check port is currently used : : ', port)

configViewEngine(app);

app.get('/', (req, res) => {
    res.render('test/index.ejs')
})
app.get('/about', (req, res) => {
    res.send(`I'm Thuanvd who wrote this code!`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import initWebRoute from './route/web.js';
import initAPIRoute from './route/api.js';

// import connection from './configs/connectDB.js';

require('dotenv').config()

var morgan = require('morgan');
const app = express();
const port = process.env.port || 8080;


// app.use((req, res, next) => {
//     console.log('>>> run into my middleware')
//     console.log(req)
//     next();
// })

app.use(morgan('combined'))

// console.log(process.env) // remove this after you've confirmed it is working
console.log('>>>check port is currently used : : ', port)

// middle help to convert data to json format
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

// init apiroute
initAPIRoute(app);

// handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


import express from 'express';
import configViewEngine from './configs/viewEngine.js';
import initWebRoute from './route/web.js';
import initAPIRoute from './route/api.js';
// import connection from './configs/connectDB.js';

require('dotenv').config()

const app = express();
const port = process.env.port || 8080;
// console.log(process.env) // remove this after you've confirmed it is working
console.log('>>>check port is currently used : : ', port)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
configViewEngine(app);

// init web route
initWebRoute(app);

// init apiroute
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    // note, there is not param for getHomepage function, in order to inherit the param from web.js
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser)

    router.get('/about', (req, res) => {
        res.send(`I'm Thuanvd who wrote this code!`)
    })

    return app.use('/', router)
}

export default initWebRoute;
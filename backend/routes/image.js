const { Router } = require('express');
const imageController = require('../controllers/imageController');
const imageRouter = Router();

imageRouter.post('/saveimage', imageController.upload.single("testImage"), imageController.saveImage);
imageRouter.get('/getimage/:id', imageController.getImage);

module.exports = imageRouter;
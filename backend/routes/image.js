const { Router } = require('express');
const upload = require('../middlewares/uploadFiles');
// const imageController = require('../controllers/imageController');
const imageRouter = Router();
const fs = require('fs');

imageRouter.post('/single',upload.single('file'), (req, res) => {
    res.json({success: true , url : res.req.file.path});
})

imageRouter.post('/multiple',upload.array('files', 12), (req, res) => {
    res.send('Multiple files uploaded');
})

imageRouter.get('/getImage', (req, res) => {
    fs.readFile('uploads/' + req.query.name, (err, data) => {
        if (err) throw err;
        res.writeHead(200);
        res.end(data);
    })
})

module.exports = imageRouter;
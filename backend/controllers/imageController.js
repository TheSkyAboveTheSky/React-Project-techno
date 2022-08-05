const multer = require("multer");
const fs = require("fs");
const Image = require("../models/Image");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

module.exports.saveImage = async (req, res) => {
    const image = new Image({
        name: req.body.name,
        img: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/jpg",
        },
    });

    try {
        const savedImage = await image.save();
        res.status(200).json("image is saved");
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports.getImage = async (req, res) => {
    try {
        const image = await Image.findById(req.params.id);
        // const base64String = (String.fromCharCode(...new Uint8Array(image.img.data)));
        console.log(image);
        res.status(200).send(image);
    } catch (err) {
        res.status(500).json(err);
    }
}


module.exports.upload = upload;
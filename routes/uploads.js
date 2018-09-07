const express = require('express');
const router = express.Router();
const upload = require('../modules/multer');

// create POST route    
router.post('/', (req, res) => {
    console.log('Submit button pressed ...');
    upload(req, res, (err) => {
        if(err){
            res.render('index', {
                msg: err
            })
        } else {
            if (req.file == undefined){
                res.render('index', {
                    msg: 'Error: no file selected'
                });
            } else {
                // TODO: take req.file and submit to mongoDB 
                console.log(req.file);
                /* 
                {   fieldname: 'memeUpload',
                    originalname: 'thirdworldskepticalkid.jpg',
                    encoding: '7bit',
                    mimetype: 'image/jpeg',
                    destination: './public/uploads/',
                    filename: 'memeUpload-1536311533575.jpg',
                    path: 'public\\uploads\\memeUpload-1536311533575.jpg',
                    size: 74238 }
                */

                res.render('index', {
                    msg: 'File uploaded',
                    file: `uploads/${req.file.filename}`
                });
            }
        }
    })
})

module.exports = router;
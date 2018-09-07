const multer = require('multer');
const path = require ('path');

// set multer storage engine
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, callback){
        // fieldname - timestamp . file extension name
        callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})

// initialize upload variable
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 4000000
    },
    fileFilter: function(req, file, callback){
        checkFileType(file, callback);
    }
}).single('memeUpload');


// Check File Type  
function checkFileType(file, callback){
    // Expresson: allowed ext
    const fileTypes = /jpeg|jpg|png|gif/;
    // Check extension
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // check mime type - multipurpose internet mail extensions 
    // - identifying files on the internet according to their nature and format
    const mimeType = fileTypes.test(file.mimetype);

    if(mimeType && extname){
        return callback(null, true);
    } else {
        callback('Error: upload images only!');
    }
}

module.exports = upload;
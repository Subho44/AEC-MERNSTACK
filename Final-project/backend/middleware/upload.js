const multer = require("multer"); 
const path = require("path");

//process of image upload

const storage = multer.diskStorage({
    destination:(req,file,cb)=> {
        cb(null,"upload/");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+path.extname(file.originalname));
    },
});
const upload = multer({storage});
module.exports = upload;
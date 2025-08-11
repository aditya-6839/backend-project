import multer from "multer";
// Handle file uploads & Save files to disk
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
// Import upload in user.routes
export const upload = multer({ storage, })
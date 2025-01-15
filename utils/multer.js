import multer from "multer";

//  disk setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Math.floor(Math.random() * 100000) + file.filename);
  },
});

//
const createCoustomerMulter = multer({ storage: storage }).single(
  "customerPhoto"
);

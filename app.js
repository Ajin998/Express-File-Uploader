const express = require("express");
const multer = require("multer");
const app = express();
const PORT = process.env.PORT || 3000;
// var upload = multer({ dest: "uploads/" });

//midddleware to handle
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//setting Multer storages
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

//upload image ka part
app.post("/single", upload.single("Profile"), (req, res) => {
  try {
    res.status(200).json({status:"Success",message:"Image Uploaded"});
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Server Listening area
app.listen(PORT, () => {
  console.log("Server up and running on PORT 3000....");
});

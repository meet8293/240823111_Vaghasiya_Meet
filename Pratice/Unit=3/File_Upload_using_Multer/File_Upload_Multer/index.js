import express from "express";
import multer from "multer";
import path from "path";

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.filename + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});

// Initialize upload middleware
const upload = multer({storage});

app.post("/upload", upload.single("file"), (req,res) => {
    if(req.file.mimetype !== "application/javascript") {
        return res.status(400).send("only .js!");
    }
    res.json({
        message: "File uploaded successfully!",
        file: req.file,
    });
    //res.send("File uploaded successfully!");
});

app.post("/uploads", upload.array("files", 5), (req, res) => {
    if(!req.files || req.files.length === 0) {
        return res.status(400).send("No files uploaded");
    }
    res.json({
        message: "File uploaded successfully!",
        file: req.file,
    });
});

app.listen(PORT, () => {
    console.log("server is running : http://localhost:" + PORT);
});
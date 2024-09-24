const express = require("express");
const cors = require("cors");
const csv = require("csv-parser");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () =>
  console.log(`The Server is running at: http://localhost:${PORT}`)
);

// Controller
var results = [];
const getAllData = async (req, res) => {
  fs.createReadStream("./chuyen_khoan.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      return res.status(200).json({
        status: 200,
        data: results.slice(0, 50),
        message: "Data fetched successfully",
      })
    });
};

// Routes
app.get("/", getAllData);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DataModel = require("./models/data");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5001 || process.env.PORT;

app.get("/", async (req, res, next) => {
  try {
    const data = await DataModel.find({});
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/", async (req, res, next) => {
  try {
    const data = await DataModel.create({ content: req.body.content });
    res.status(200).send(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(
    `mongodb://${process.env.MONGO_HOSTNAME}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT : ${PORT}`);
      console.log(`Database connected`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

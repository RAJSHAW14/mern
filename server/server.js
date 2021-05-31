import express from "express";
import fs from 'fs';
const morgan = require("morgan");
import cors from "cors";
import mongoose from "mongoose";

require("dotenv").config();

const app = express();

//db connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology : true,
})
.then(() => console.log('Database connected sucessfully'))
.catch((err) => console.log('Databse not connectes',err));


// router middleware
app.use(cors());
app.use(morgan("dev"));

fs.readdirSync("./routes").map((r) => app.use("/api",require(`./routes/${r}`)));

// app.use("/api",router);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
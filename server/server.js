import express from "express";
import fs from 'fs';

const app = express();

// router middleware

fs.readdirSync("./routes").map((r) => app.use("/api",require(`./routes/${r}`)));

// app.use("/api",router);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
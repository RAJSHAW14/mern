import express from "express";
import router from "./routes/auth"

const app = express();

// router middleware

app.use("/api",router);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));
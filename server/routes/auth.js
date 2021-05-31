import express from "express";
import {register} from "../controller/auth"

const router = express.Router();

router.post("/register", register);

module.exports = router;
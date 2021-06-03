import express from "express";
import {register} from "../controller/auth"
import {login} from "../controller/auth"

const router = express.Router();

router.post("/register", register);
router.post("/login", login)

module.exports = router;
import express from "express";
import { signup } from "../controlers.js/auth.controller.js";

const router = express.Router();

router.post('/signup', signup);

export default router;
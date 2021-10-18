import express from "express";
import { HomeIndex } from "../controllers/homeCon.js";

export const homeRt = express.Router();
    homeRt.get("/", HomeIndex);




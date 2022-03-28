import express from "express";
import { PAGES } from "../controllers/homeCon.js";

export const homeRt = express.Router();
    homeRt.get("/", PAGES.HomeIndex);
    homeRt.get("/math", PAGES.Math);
    homeRt.get("/display", PAGES.Display);
    homeRt.get("/position", PAGES.Position);
    homeRt.get("/flex", PAGES.Flexbox);




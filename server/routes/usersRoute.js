import express from "express";
// import { Express } from "express";
// const express = require("express")

import * as User from "../controller/usersController.js";

const router = express.Router();

router.get("/get", User.findAllLaptop);
router.get("/current-user", User.getCurrentLaptop);
router.post("/signup", User.createLaptop);
router.post("/login", User.seeLaptop);
router.put("/:id",  User.updateLaptopById);
router.delete("/delete/:id",  User.deleteLaptop);

export default router;
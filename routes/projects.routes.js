const express = require('express');
const logisticRouter = express.Router();
const Projects = require("../models/Projects");

//GET Route

logisticRouter.get("/", (req, res)=>{
    const {Name, Date, Description, Techs, url} = req.body;

    Projects.find({})
    .then((result)=>res.status(200).send(result))
    .catch((err)=>res.status(500).send("Something Wrong in get routes!"))
})


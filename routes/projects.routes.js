
const express = require('express');
const projectsRouter = express.Router();
const Projects = require("../models/Projects");

//GET Route

projectsRouter.get('/', (req, res) => {
    console.log(req);
    Projects.find({})
       .then((data) => res.status(200).send(data))
       .catch((err) => res.status(500).send('Something went wrong'));
 });



module.exports = projectsRouter;

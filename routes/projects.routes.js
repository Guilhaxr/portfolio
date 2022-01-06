
const express = require('express');
const projectsRouter = express.Router();
const Projects = require("../models/Projects");
//GET Route

projectsRouter.get('/', (req, res) => {
    Projects.find({})
       .then((data) => res.status(200).send(data))
       .catch((err) => res.status(500).send('Something went wrong'));
 });

//  projectsRouter.post('/', (req, res) => {
//     const {name} = req.body

//     Projects.create({name})
//     .then((data) => {
//         res.status(200).json(data)
//     })
//     .catch((err) => {
//         console.log(err)
//         res.status(500).send("Something went wrong")
//     })

// });

module.exports = projectsRouter;

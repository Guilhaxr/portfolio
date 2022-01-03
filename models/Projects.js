const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    Name : {type: String, required: true },
    Date : {type: String, required: true },
    Description : {type: String},
    Techs : {type: String},
    url : {type: String}
})


const Projects = mongoose.model("Projects", ProjectsSchema );

module.exports = Projects;
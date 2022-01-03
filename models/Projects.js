const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectsSchema = new Schema({
    name : {type: String},
    date : {type: String},
    description : {type: String},
    techs : {type: String},
    url : {type: String}
});


const Projects = mongoose.model("Projects", ProjectsSchema );

module.exports = Projects;
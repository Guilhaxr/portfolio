
const projectsRouter = require('./projects.routes')
const contactRouter = require("./contact.routes")





const Routes = (app) =>{

    app.use('/api/projects', projectsRouter);
    app.use('/contact', contactRouter )
 
   

}

module.exports = Routes;
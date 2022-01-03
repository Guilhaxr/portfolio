
const projectsRouter = require('./projects.routes')
const exampleRouter = require('./example.routes')



const Routes = (app) =>{

    app.use('/api/projects', projectsRouter);
    app.use('/api/example',  exampleRouter)
   

}

module.exports = Routes;
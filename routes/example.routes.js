const exampleRouter = require('express').Router();
const Example = require('../models/Example');

//GET Routes
exampleRouter.get('/', (req,res)=>{
    Example.find({})
    .then((result)=> res.status(200).send(result))
    .catch((err)=>res.status.apply(500).send('Something wrong'))
});

exampleRouter.post('/', (req, res) => {
    const {name} = req.body

    Example.create({name})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send("Something went wrong")
    })
    
});

module.exports = exampleRouter;
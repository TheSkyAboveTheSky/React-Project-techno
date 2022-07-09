const Task = require('../models/tasksModel')
const asynchandler = require('express-async-handler')
const expressAsyncHandler = require('express-async-handler')

const getAllTasks = asynchandler (async(req,res)=>{
    
   Task.find()
   .then((task)=>{
       if(!task){
       console.log('not found')
       res.send('not found')
       }
       else {
           res.status(200).send(task)
       }
   })
   .catch((err)=>{
       console.log(err);
       res.sendStatus(500);
       return;
   })
   }
)
const addNewTask = asynchandler(async(req,res)=>{
    const task =await Task.create({
        name: req.body.name,
        priority : req.body.priority,
        team:   req.body.team,
        description : req.body.description,
        due : req.body.due
    })
    res.status(200).send(`hi ${req.body.name}`)
})

module.exports={
    getAllTasks,
    addNewTask
} 
const Task = require('../models/Task')
const Team = require('../models/Team')
const asynchandler = require('express-async-handler')

const getAllTasks = asynchandler(async (req, res) => {

    Task.find()
        .then((task) => {
            if (!task) {
                console.log('not found')
                res.send('not found')
            }
            else {
                res.status(200).send(task)
            }
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(500);
            return;
        })
}
)
const getAllTeams = asynchandler(async (req, res) => {
    Team.find()
        .then((team) => {
            if (!team) {
                console.log('not found')
                res.send('not found')
            }
            else {
                res.status(200).send(team)
            }
        }).catch((err) => {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        )
})

const addNewTask = asynchandler(async (req, res) => {
    const task = await Task.create({
        name: req.body.name,
        priority: req.body.priority,
        team: req.body.team,
        description: req.body.description,
        due: req.body.due,
        avatar: req.body.avatar
    })
    res.status(200).send(`hi ${req.body.name}`)
})

module.exports = {
    getAllTasks,
    getAllTeams,
    addNewTask
} 
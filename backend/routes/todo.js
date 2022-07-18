const express = require ('express')
const todoRouter = express.Router()
var bodyParser = require('body-parser')
const verifyRoles = require('../middlewares/verifyRoles');
const { getAllTasks , getAllTeams ,addNewTask  } = require('../controllers/todoController')

var urlencodedParser = bodyParser.urlencoded({ extended: false })

todoRouter.get('/tasks',getAllTasks)
todoRouter.get('/teams',getAllTeams)
todoRouter.post('/', urlencodedParser , addNewTask)

module.exports = todoRouter
const express = require ('express')
const router = express.Router()
var bodyParser = require('body-parser')
const { getAllTasks , getAllTeams ,addNewTask  } = require('../controller/todoController')



var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/all',getAllTasks)

router.get('/teams',getAllTeams)

router.post('/', urlencodedParser , addNewTask)

module.exports = router
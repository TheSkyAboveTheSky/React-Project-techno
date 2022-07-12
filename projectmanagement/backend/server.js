const {getTickets} = require('./api/ticket-api')
const express = require("express")
const cors = require("cors")
// const e = require('express')

const app = express()


//Go to the api folder and add your mongodb api script files 
app.use(cors())

//add all your routes here
app.get('/',(req,res) => {
    res.send("Hello World")
    console.log("Good and running")
})


app.get('/api/tickets',(req,res) => {
    console.log("Yeesh")
    getTickets((err,data) => {
        if(err)
        {
            res.send(err)
            console.log(err)
        }
        else
        {
            res.json(data)
        }
    })
})


app.listen(3001,() => {
    console.log("App is listenting at port "+ 3001)
})

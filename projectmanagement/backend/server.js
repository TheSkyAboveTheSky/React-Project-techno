const {getTickets, getTicket, postReply, updateTicket, getReply} = require('./api/ticket-api')


const express = require("express")
const cors = require("cors")
const bodyParser = require('body-parser')
// const e = require('express')

const app = express()


//apply middlewares to the express app
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//add all your routes here
app.get('/',(req,res) => {
    res.send("Hello World")
    console.log("Good and running")
})


//get requests
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

app.get('/api/ticket/:id',(req,res) => {
    const id = req.params.id
    getTicket(id,(err,data) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json(data)
        }
    })
})


app.get('/api/reply/:id',(req,res) => {
    const id = req.params.id
    getReply(id,(err,doc) => {
        if(err)
        {
            console.log("Error fetching reply from database to server")
        }
        else{
            console.log(doc)
            res.json(doc)
        }
    })

})


app.post('/api/postReply',(req,res) => {
    // console.log("Really")
    // console.log(req.body)
    postReply(req.body,(err,data) => {
        if(err)
        {
            console.log("Error posting reply to database from server")
            res.json({})
        }
        else
        {
            console.log(data)
            res.json(data)
        }
    })
})



app.post('/api/update/:id',(req,res) => {
    const id = req.params.id
    updateTicket(id,req.body,(err,doc) => {
        if(err)
        {
            console.log("Error updating doc from express server")
        }
        else
        {
            res.json(doc)
        }
    })
})

app.listen(3001,() => {
    console.log("App is listenting at port "+ 3001)
})

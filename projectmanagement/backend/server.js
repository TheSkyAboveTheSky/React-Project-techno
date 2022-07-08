const express = require("express")
const cors = require("cors")

const app = express()


//Go to the api folder and add your mongodb api script files 
app.use(cors())

//add all your routes here
app.get('/',(req,res) => {
    res.send("Hello World")
})



app.listen(3001,() => {
    console.log("App is listenting at port "+ 3001)
})

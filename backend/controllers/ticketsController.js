const Ticket = require("../models/Ticket")
const Reply = require("../models/Reply")


const getTickets = (req,res) => {
    Ticket.find({},(err,data) => {
        if(err)
        {
            console.log("Error fetching tickets from DB");
        }
        else
        {
            res.json(data)
        }
    })   
}


const getTicket = (req,res) => {
    const id = req.params.id
    Ticket.findById(id,(err,data) => {
        if(err)
        {
            console.log("Error fetching Ticket from DB");            
        }
        else
        {
            res.json(data)
        }
    })
}

const getReply = (req,res) => {
    const id = req.params.id
    Reply.findById(id,(err,doc) => {
        if(err)
        {
            console.log("Error updating doc from database client")

        }
        else
        {
            res.json(doc)
        }
    })
}



const updateTicket = (req,res) => {
    const id = req.params.id
    const data = req.body
    
    Ticket.findByIdAndUpdate(id
        ,data,{
        new:true
    },(err,doc) => {
        if(err)
        {
            console.log("Error updating doc from database client")
        }
        else
        {   
            //Hey
            res.json(doc)
        }
    })
}

const postTicket = (req,res) => {
    const data = req.body
    const ticket = new Ticket(data)
    ticket.save((err,data) => {
        if(err)
        {
            console.log("Error saving ticket to database");
        }
        else
        {
            res.json(data)
        }
    })
}  


const postTickets = (req,res) => {
    dummyTicketsData = [
        {
            details:"Hello, I have tried to use the xyz feature but it is not working",
            title: "Using xyz feature",
            userName:"John Doe",
            date: "2022-2-14",
            department: "human resources",
            numberOfReplies: 0,
            Priority: "easy",
            Product:"XYZ feature",
            agent:"Lynn S.Campos",
            replyIdList: []
        },
        {
            details:"Hello, I have tried to use the xyz feature but it is not working",
            title: "Using xyz feature",
            userName:"John Doe",
            date: "2022-1-12",
            department: "pre-sales",
            numberOfReplies: 0,
            Priority: "Hard",
            Product:"XYZ feature",
            agent:"Lynn S.Campos",
            replyIdList: []
            
        },
        {
            details:"Hello, I have tried to use the sub-header feature but it is not working",
            title: "Using sub header feature",
            userName:"John Doe",
            date: "2021-12-12",
            department: "tech",
            numberOfReplies: 0,
            Priority: "Hard",
            Product:"XYZ feature",
            agent:"Lynn S.Campos",
            replyIdList: []
        }
        ]

        Ticket.create(dummyTicketsData,(err,data) => {
            if(err)
            {
                console.log("Error posting data to DB")
            }
            else
            {
                console.log("Data written success");
                res.json(data)
            }
        })
}



const postReply = (req,res) => {
    const data = req.body
    const reply = new Reply(data)
    console.log("reply data ",data)
    reply.save((err,data) => {
        if(err)
        {
            console.log("Error saving data to database from database client")
        }
        else
        {
            res.json(data)
        }
    })

}

const clearTickets = (req,res) => {
    Ticket.remove({},(err,done) => {
        if(err)
        {
            console.log("Error removing tickets")
        }
        else
        {
            console.log("Tickets removed")
        }
    })
}

const clearReplies = (req,res,next) => {
    Reply.remove({},(err,done) => {
        if(err)
        {
            console.log("Error removing tickets")
        }
        else
        {
            console.log("replies removed")
            next()
        }
    })
}


module.exports = {getTicket,getTickets,postTicket,postTickets, postReply, updateTicket, getReply, clearReplies, clearTickets}
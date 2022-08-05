const express = require("express")

const {getTicket,getTickets,postTickets, postReply, updateTicket, getReply,clearReplies,clearTickets} = require("../controllers/ticketsController")

const router = express.Router()

router.get('/',getTickets)

router.get('/:id',getTicket)

router.post('/',postTickets)

router.get('/reply/:id',getReply)

router.post('/reply',postReply)

router.post('/update/:id',updateTicket)

router.post('/remove',clearReplies,clearTickets)

module.exports = router
const express = require('express');
const messageRouter = express.Router();
const messageController = require('../controllers/messageController');

messageRouter.post('/', messageController.createMessage);
messageRouter.get('/:conversationId', messageController.getMessage);

module.exports = messageRouter;
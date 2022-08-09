const express = require('express');
const conversationRouter = express.Router();
const conversationController = require('../controllers/conversationController');

conversationRouter.post('/', conversationController.createConversation);
conversationRouter.get('/:userID', conversationController.getConversation);
conversationRouter.get('/:firstUserId/:secondUserId', conversationController.getConversationById);
conversationRouter.get('/find/:firstUserId/:secondUserId/', conversationController.getConversationTwoUsers);

module.exports = conversationRouter;
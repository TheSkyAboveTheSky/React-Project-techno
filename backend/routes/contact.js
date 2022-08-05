const express = require('express');
const contactRouter = express.Router();
const contactController = require('../controllers/contactController');

contactRouter.post('/', contactController.createContact);
contactRouter.get('/', contactController.getContacts);
contactRouter.delete('/:id', contactController.deleteContact);

module.exports = contactRouter;
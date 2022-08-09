const Contact = require("../models/Contact");

const createContact = async (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        address: req.body.address,
    });

    try {
        const savedContact = await newContact.save();
        res.status(200).json(savedContact);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const getContacts = async (req, res) => {
    try {
        const contact = await Contact.find();
        res.status(200).json(contact);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

const deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json(contact);
    }
    catch (err) {
        res.status(500).json(err);
    }
}

module.exports = { createContact, getContacts, deleteContact };

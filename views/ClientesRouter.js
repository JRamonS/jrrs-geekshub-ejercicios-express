const express = require('express');

const router = express.Router();

const ClientsController = require("../Controller/ClientsController");


router.get('/', ClientsController.getAllClients);



module.exports = router;
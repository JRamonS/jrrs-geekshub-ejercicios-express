const router = require('express').Router();

const ClientesRouter = require ('./views/ClientesRouter');

router.use('/clientes', ClientesRouter);






module.exports = router;
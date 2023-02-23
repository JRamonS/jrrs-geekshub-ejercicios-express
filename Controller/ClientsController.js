const ClientsController ={};

ClientsController.getAllClients = async (req, res) => {
    
    let clientes = {
        cliente1 : {
            nombre: "Corina"
        },
        cliente2 : {
            nombre: "Marcos"
        },
        cliente3 : {
            nombre: "Adrian"
        }
    }

    res.send(clientes);
}

module.exports = ClientsController;
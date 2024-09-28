import clientServices from "../services/services.js";

class clientController{
    static async listClients(req, res){
        try{
            const id = req.params.id;

            const listClient = clientServices.list();
            
            console.log(`listClient ${listClient}`);

            res.status(200).json(listClient);
        }catch{
            res.status(500).json({ message: `${erro.message} - falha ao listar clientes`});
        }
    }

    static async createClient(req, res){
        try{
            const {name, cpf, dateBirth} = req.body;

            const createClient  = clientServices.create(name, cpf, dateBirth)

            res.status(201).send({message: "Cliente Criado", client: createClient});
        }catch{
            res.status(500).json({ message: `${erro.message} - falha ao criar cliente`});
        }
    }
}

export default clientController
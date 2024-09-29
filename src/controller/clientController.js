import clientServices from "../services/services.js";

class clientController{
    static async listClients(req, res){
        try{
            const listClient = await clientServices.list();

            res.status(200).json(listClient);
        }catch{
            res.status(400).send({message: "Não Temos Clientes Cadastrados"});
        }
    }

    static async listClientsId(req, res){
        try{
            const listClient = await clientServices.listId(req.params.id);

            res.status(200).json(listClient);
        }catch{
            res.status(400).send({message: "Cliente Não Encontrado: ", id: req.params.id});
        }
    }

    static async createClient(req, res){
        try{
            const {name, cpf, dateBirth} = req.body;

            const createdClient = await clientServices.create(name, cpf, dateBirth);

            res.status(201).send({message: "Cliente Criado", client: createdClient});
        }catch(error){
            return res.status(400).send(error.message)
        }
    }

    static async updateClient(req, res){
        try{
            const { name, cpf, dateBirth } = req.body;

            const result = await clientServices.update(req.params.id, name, cpf, dateBirth)

            res.status(201).send({message: "Cliente Atualizado", client: result});
        }catch(error){
            return res.status(400).send(error.message);
        }
    }

    static async deleteClient(req, res){
        try{
            const result = await clientServices.deleteClientId(req.params.id)
    
            res.status(201).send({message: "Cliente Deletado", client: result});
        }catch(error){
            return res.status(400).send(error.message)
        }
    }
}

export default clientController
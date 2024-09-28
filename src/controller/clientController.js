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
            const {id, name, cpf, dateBirth} = req.body;

            const duplicate = await clientServices.verify(cpf, id);
    
            if (duplicate) {
                return res.status(400).send({message: "CPF Existente: ", cpf: cpf});
            }

            const createClient  = await clientServices.create(id, name, cpf, dateBirth)

            res.status(201).send({message: "Cliente Criado", client: createClient});
        }catch{
            return res.status(400).send({message: "Verifique Os Dados"})
        }
    }

    static async updateClient(req, res){
        try{
            const { name, cpf, dateBirth } = req.body;

            const listClient = await clientServices.listId(req.params.id);

            if(!listClient){
                res.status(400).send({message: "Cliente Não Encontrado: ", id: req.params.id});
            }

            const duplicate = await clientServices.verify(cpf, req.params.id);
    
            if (duplicate) {
                return res.status(400).send({message: "CPF Existente: ", cpf: cpf});
            }

            const result = await clientServices.update(req.params.id, name, cpf, dateBirth)

            res.status(201).send({message: "Cliente Atualizado", client: result});
        }catch{
            return res.status(400).send({message: "Verifique Os Dados"})
        }
    }

    static async deleteClient(req, res){
        try{
            const listClient = await clientServices.listId(req.params.id);

            if(!listClient){
                res.status(400).send({message: "Cliente Não Encontrado: ", id: req.params.id});
            }
    
            const result = await clientServices.deleteClientId(req.params.id)
    
            res.status(201).send({message: "Cliente Deletado", client: result});
        }catch{
            return res.status(400).send({message: "Verifique Os Dados"})
        }
    }
}

export default clientController
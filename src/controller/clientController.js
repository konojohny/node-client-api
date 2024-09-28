import clientServices from "../services/services.js";

class clientController{
    static async listClients(req, res){
            const listClient = await clientServices.list();

            res.status(200).json(listClient);
    }

    static async createClient(req, res){
            const {id, name, cpf, dateBirth} = req.body;

            const duplicate = await clientServices.verify(cpf);
    
            if (duplicate) {
                return res.status(400).send({message: "CPF Existente: ", cpf: cpf});
            }

            const createClient  = await clientServices.create(id, name, cpf, dateBirth)

            res.status(201).send({message: "Cliente Criado", client: createClient});
    }
}

export default clientController
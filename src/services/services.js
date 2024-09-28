import Client from "../models/Client.js";

const client = new Client(); 

class clientServices {
    static async list() {
        return await client.search();
    }

    static async listId(id) {
        return await client.searchId(id);
    }

    static async create(id, name, cpf, dateBirth) {

        return await client.create(id, name, cpf, dateBirth);
    }

    static async update(id, name, cpf, dateBirth) {
        return await client.update(id, name, cpf, dateBirth); 
    }

    static async deleteClientId(id){
        return await client.deleteClient(id);
    }

    static async verify(cpf, id){
        return await client.verifyCPF(cpf, id); 
    }
}

export default clientServices;
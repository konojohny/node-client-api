import Client from "../models/Client.js";
import { ClientDto } from "../dtos/ClientDto.js";

const client = new Client(); 

class clientServices {
    static async list() {
        const listAll = await client.search();

        return  listAll.map(client => new ClientDto(client));
    }

    static async listId(id) {
         const listId = await client.searchId(id);

         return new ClientDto(listId);
    }

    static async create(id, name, cpf, dateBirth) {
        const duplicate = await this.verifyCPF(cpf, id);
    
        if (duplicate) {
            throw new Error(`O CPF ${cpf} já existe.`);
        }

        const createdClient = await client.create(id, name, cpf, dateBirth);

        return new ClientDto(createdClient);
    }

    static async update(id, name, cpf, dateBirth) {
        const listClient = await this.listId(id);
        const duplicate = await this.verifyCPF(cpf, id);

        if(!listClient){
            console.log("Entrrou")
            throw new Error(`o ID ${id} não existe.`)
        }

        if (duplicate) {
            throw new Error(`o CPF ${cpf} ja existe.`)
        }

        const updateClient = await client.update(id, name, cpf, dateBirth); 

        return new ClientDto(updateClient);
    }

    static async deleteClientId(id){
        const listClient = await this.listId(id);

        if(!listClient){
            throw new Error(`o ID ${id} não existe.`)
        }

        const deleteClient = await client.deleteClient(id);

        return new ClientDto(deleteClient);
    }

    static async verifyCPF(cpf, id){
        return await client.verifyCPF(cpf, id); 
    }
}

export default clientServices;
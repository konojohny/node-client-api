import Client from "../models/Client.js";

const client = new Client(); 

class clientServices {
    static async list() {
        const listClient = await client.search();
        return listClient;
    }

    static async create(name, cpf, dateBirth) {
        const verify = await client.verifyCPF(cpf); 

        if (verify) {
            console.log(`Erro: o CPF ${cpf} já está cadastrado.`);
            return; 
        }

        await client.create(name, cpf, dateBirth);
    }

    static async update(id, name, cpf, dateBirth) {
        await client.update(id, name, cpf, dateBirth); 
    }
}

export default clientServices;
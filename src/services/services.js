import Client from "../models/Client.js";

const client = new Client(); 

class clientServices {
    static async list() {
        return await client.search();
    }

    static async create(id, name, cpf, dateBirth) {

        return await client.create(id, name, cpf, dateBirth);
    }

    static async update(id, name, cpf, dateBirth) {
        return await client.update(id, name, cpf, dateBirth); 
    }

    static async verify(cpf){
        return await client.verifyCPF(cpf); 
    }
}

export default clientServices;
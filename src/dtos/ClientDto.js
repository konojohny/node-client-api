export class ClientDto{
    constructor(client){
        this.id = client.id;
        this.name = client.name;
        this.dateBirth = client.dateBirth;
    }
}
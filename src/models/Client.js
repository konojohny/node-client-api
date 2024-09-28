import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Clients{
    async search() {
        const result = await prisma.clients.findMany();
    
        const res = result.map(({ id, cpf, ...rest }) => rest);
    
        return res; 
    }

    async searchId(id) {
        const result = await prisma.clients.findUnique({
            where: {
                id: Number(id)
            }
        });
    
        console.log(result);

        const {id: _, cpf: __, ...rest } = result;
    
        return rest; 
    }

    async create(id, name, cpf, dateBirth) {
        const result = await prisma.clients.create({
            data: {
                id: id,
                name: name,
                cpf: cpf,
                dateBirth: dateBirth
            }
        });

        const {id: _, cpf: __, ...rest } = result; 
    
        return rest; 
    }

    async update(id, name, cpf, dateBirth){
        try{
            const result = await prisma.clients.update({
                where: {
                    id: id
                },
                data: {
                    nome: name,
                    cpf: cpf,
                    dataNasci: dateBirth
                }
            })
    
            const res = result.map(({id, cpf, ...rest}) => rest);
    
            return res;
        }catch{
            console.log(`O ID ${id} não existe.`);
        }
    }

    async deleteClient(id){
        const result = await prisma.clients.delete({
            where:{
                id: Number(id)
            }
        })

        return result;
    }

    async verifyCPF(cpf, id) {
        const result = await prisma.clients.findFirst({
            where: {
                cpf: cpf,
                NOT: {
                    id: id
                }
            }
        });

        return result; 
    }    
}

export default Clients;
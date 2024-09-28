import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Clients{
    async search() {
        const result = await prisma.clients.findMany({
        });
    
        const res = result.map(({ id, cpf, ...rest }) => rest);

        console.log(res);
    
        return res; 
    }

    async create(name, cpf, dateBirth){
        const result = await prisma.create({
            data: {
                nome : name,
                cpf : cpf,
                dataNasci : dateBirth
            }
        })

        const res = result.map(({id, cpf, ...rest}) => rest);

        return res;
    }

    async update(id, name, cpf, dateBirth){
        try{
            const result = await prisma.create({
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

    async verifyCPF(cpf){
        const result = prisma.clients.findUnique({
            where: {
                cpf: cpf
            }
        })

        return result;
    }
}

export default Clients;
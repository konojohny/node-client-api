import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class Clients{
    async search() {
        const result = await prisma.clients.findMany();
    
        return result; 
    }

    async searchId(id) {
        const result = await prisma.clients.findUnique({
            where: {
                id: Number(id)
            }
        });
    
        return result; 
    }

    async create(name, cpf, dateBirth) {
        const result = await prisma.clients.create({
            data: {
                name: name,
                cpf: cpf,
                dateBirth: dateBirth
            }
        });

        return result; 
    }

    async update(id, name, cpf, dateBirth){
            const result = await prisma.clients.update({
                where: {
                    id: Number(id)
                },
                data: {
                    name: name,
                    cpf: cpf,
                    dateBirth: dateBirth
                }
            })
    
            return result;
    }

    async deleteClient(id){

        const result = await prisma.clients.delete({
            where:{
                id: Number(id)
            }
        })

        return result;
    }

    async verifyIdCpf(cpf, id) {
        if (id && cpf) {
            return await prisma.clients.findFirst({
                where: {
                    cpf: cpf,
                    NOT: {
                        id: Number(id),
                    },
                },
            });
        } else if (cpf) {
            return await prisma.clients.findFirst({
                where: {
                    cpf: cpf,
                },
            });
        } else if(id){
            return await prisma.clients.findFirst({
                where: {
                    id: Number(id),
                },
            });
        }
    } 
}

export default Clients;
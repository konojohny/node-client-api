import { app } from "../../app.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const PORT = 3000;

prisma.$connect().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Escutando Porta: ${PORT}`);
    })
})
.catch(error => {
    console.error("Não foi possivel conectar ao banco de dados:", error)
});
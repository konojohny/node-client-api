import { app } from "./app.js";
import { connectDB } from "./src/config/dbConnect.js";

const PORT = 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor Escutando Porta: ${PORT}`);
    })
})
.catch(error => {
    console.error("Não foi possivel conectar ao banco de dados:", error)
});
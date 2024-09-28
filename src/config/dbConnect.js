import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgresql',
    host: 'localhost',
    database: 'clients',
    password: 'postgresql123',
    port: 5432,
})

const connectDB = async () => {
    try{
        await pool.connect();
        console.log("Conexão com o banco de dados estabelecida com sucesso")
    }catch(erro){
        console.log("Erro ao conectar ao banco de dados:", erro);
        erro.throw;
    }
}

export {pool, connectDB};
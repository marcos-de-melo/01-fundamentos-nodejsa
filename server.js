import { fastify } from "fastify";
import { DatabaseMYSQL } from "./database-mysql.js";
const server = fastify();
const database = new DatabaseMYSQL();
server.get('/', (req, res)=>{
    return 'Home';
});

// Lista de Usuários
server.get('/users', (req, res)=>{
    const { nome, email, telefone} = req.query;
    return `Lista de Usuarios Pesquisa por nome: ${nome} -email: ${email}`;
});

server.get('/users/:id', (req, res)=>{
    return `Detalhes do usuario e id: ${req.params.id}`;
});

server.get('/users/:userId/pedidos/:pedidoId',(req,res)=>{
    return `Detalhes do pedido nº ${req.params.pedidoId} do usuario de id: ${req.params.userId}`;
})


server.post('/users',async (req, res)=>{
    const { nome, email, telefone } = req.body;
    
    await database.createUser(
        {
            nome,
            email,
            telefone
        }
    )
    return res.status(201).send()
});

server.get('/relatorios/users', (req,res)=>{
    const { pagina, quantidadePorPagina, quantidadeTotal} = req.query;
    return `Listagem de Usuarios - Pagina nº ${pagina},
    Quantidade por pagina: ${quantidadePorPagina},
    Total de usuarios ${quantidadeTotal}
    `
})

server.listen({port: 3000},(err, address)=>{
    console.log(`Servidor rodando em ${address}`);
})

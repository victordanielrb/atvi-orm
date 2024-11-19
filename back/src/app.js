const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.get('/fornecedores', async (req, res) => {
    try {
        const result = await prisma.fornecedor.findMany();
        console.log(result);
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error fetching fornecedores:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get('/produtos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        if (id !== undefined) {
            const result = await prisma.produto.findMany({
                where: {
                    forn_id: parseInt(id)
                }
            });
            console.log(result);
            return res.status(200).json(result);
        }
        else {
            const result = await prisma.produto.findMany();
            console.log(result);
            return res.status(200).json(result);
        }
        
    } catch (e) {
        console.error("Error fetching fornecedor:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.post('/fornecedores', async (req, res) => {
    console.log('req',req.body.name);
    
    const nome = req.body.name;
    try {
        const result = await prisma.fornecedor.create({
            data: {
                forn_nome: nome
            }
        });
        console.log(result);
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error creating fornecedor:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})
app.delete('/produtos/:id', async (req, res) => {
    console.log('params',req.params);
    
    const  id  = req.params.id;
    try {
        
        console.log(result);
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error deleting produto:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.delete('/fornecedores/:id', async (req, res) => {
    console.log('params',req.params);
    
    const  id  = req.params.id;
    try {
        const result = await prisma.fornecedor.delete({
            where: {
                forn_id: parseInt(id)
            }
        });
        console.log(result);
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error deleting fornecedor:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
const port = 3001;
app.listen(port, async () => {
    try {
        await prisma.$connect();
        console.log(`Servidor iniciado na porta ${port}`);
    } catch (e) {
        console.error("Error connecting to the database:", e.message);
    }
});
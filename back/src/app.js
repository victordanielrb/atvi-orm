const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
var cors = require('cors');
const { where } = require('sequelize');
app.use(express.json());
app.use(cors());
app.post('/compra', async (req, res) => {
    const { forn_id, prod_id } = req.body;
    const date = new Date
    const dia = date.getDate()
    const mes = date.getMonth()+1
    const ano = date.getFullYear()
    console.log(forn_id,prod_id);
    
       

    try {
        const result = await prisma.historico.create({
            data: {
                forn_id: parseInt(forn_id),
                prod_id: parseInt(prod_id),
                hist_date: date.toISOString() 
            }
        });
        console.log(result);
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error creating compra:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.get('/compra', async (req, res) => {
    try {
        const result = await prisma.$queryRaw`
            SELECT 
                hist_id, 
                hist_date, 
                fornecedor.forn_nome, 
                produto.prod_nome
            FROM 
                historico
            INNER JOIN 
                fornecedor ON historico.forn_id = fornecedor.forn_id
            INNER JOIN 
                produto ON historico.prod_id = produto.prod_id
            WHERE historico.forn_id IS NOT NULL AND historico.prod_id IS NOT NULL ORDER BY hist_date DESC;
        `;
        console.log('Resultado:', result);
        return res.status(200).json(result);
    } catch (e) {
        console.error('Erro na consulta:', e);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

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
app.post('/produtos', async (req, res) => {
    console.log('req',req.body);
    
    const nome = req.body.name;
    const preco = parseFloat(req.body.preco);
    const forn_id = parseInt(req.body.forn_id);
    try {
        const result = await prisma.produto.create({
            data: {
                prod_nome: nome,
                prod_preco: preco,
                forn_id: forn_id
                
            }
        });
    
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error creating produto:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})
app.delete('/produtos/:id', async (req, res) => {
    console.log('params',req.params.id);
    
    const  id  = parseInt(req.params.id);
    try {
        const result = await prisma.produto.delete({   
            where: {
                prod_id: parseInt(id)
            }});
        console.log('deletado',result);
        return res.status(200).json(result);
    } catch (e) {
        console.error("Error deleting produto:", e.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});
app.delete('/fornecedores/:id', async (req, res) => {
    console.log('params',req.params.id);
    
    const  id  = req.params.id;
    try {
        const result = await prisma.fornecedor.delete({
            where: {
                prod_id: parseInt(id)
            }
        });
        
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
import { useNavigate } from "react-router-dom";
import React from "react";
import api from "../services/api";
import { useLocation } from "react-router-dom";
export default function CadProdutos() {
    const forn_id = useLocation().pathname.split("/")[2];
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        const nome = e.target.nome.value; 
        const preco = e.target.preco.value;
        if (!nome) {
            alert("O campo nome é obrigatório."); 
            return;
        }

        try {
           
            const response = await api.post('http://localhost:3001/produtos', { name:nome ,preco:preco,forn_id:forn_id});
            console.log("Response:", response.data); 
            alert("Fornecedor cadastrado com sucesso!");
            
        } catch (error) {
            console.error("Erro ao enviar:", error);
            alert("Erro ao cadastrar o fornecedor.");
        }
    };

    return (
        <div className="bg-[#252e50] text-white w-[16rem] px-4 p-2 flex flex-col mx-auto rounded poppins cursor-pointer">
            <form method="post" className="text-center flex flex-col justify-center" onSubmit={handleSubmit}> {/* Corrigido */}
                <h1 className="text-center">Cadastro de produtos</h1>
                <label htmlFor="nome" className="m-1">Nome do Produto</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="text-black"
                />
                <label htmlFor="preco" className="m-1">Preço do produto </label>
                <input
                    type="text"
                    id="preco"
                    name="preco"
                    className="text-black"
                />
                <button
                    type="submit"
                    className="py-2 text-none bg-[#1a2037] text-white mx-auto content-center align-middle text-center rounded poppins  text-center my-2"
                    
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

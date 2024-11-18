import React from "react";
import api from "../services/api";

export default function CadFornecedores() {
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o recarregamento da página

        const nome = e.target.nome.value; // Obtém o valor do input "nome"
        if (!nome) {
            alert("O campo nome é obrigatório."); // Corrige o uso do console.prompt
            return;
        }

        try {
            // Envia o valor do nome para a API
            const response = await api.post('http://localhost:3001/fornecedores', { name:nome });
            console.log("Response:", response.data); // Loga a resposta do backend
            alert("Fornecedor cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao enviar:", error);
            alert("Erro ao cadastrar o fornecedor.");
        }
    };

    return (
        <div className="bg-[#252e50] text-white w-[16rem] px-4 p-2 flex flex-col mx-auto rounded poppins cursor-pointer">
            <form method="post" onSubmit={handleSubmit}> {/* Corrigido */}
                <label htmlFor="nome" className="m-1">Cadastrar Fornecedor</label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="text-black"
                />
                <button
                    type="submit"
                    className="py-2 my-2"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
}

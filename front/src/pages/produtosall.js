import React from "react";
import api from "../services/api";
export default function ProdutosAll({ produtos = [] }) {
     function deletarProduto(id) {
        api.delete(`/produtos/${id}`).then((response) => {
            console.log(response.data);
        });
    }
    console.log('produtos', produtos);  
    if (!produtos) {
        return <h1 className="text-4xl text-white">Nenhum produto encontrado</h1>;
    }
    
    return (
        <>
        <div>
            
        </div>
              {produtos.map((produto) => (
                <div
                    key={produto.prod_id}
                    className="flex m-4 rounded h-12 align-middle content-center transition  cursor-default grid grid-cols-6 gap-2 justify-center"
                >
                    <h1 className="text-center text-2xl text-white ">
                        {produto.prod_id}
                    </h1>
                    <h1 className="text-center text-2xl px-4 text-white border-l-2 border-r-2 border-[#1a2037] full col-span-2">
                        {produto.prod_nome}
                    </h1>
                    <h1 className="text-center text-2xl text-white full col-span-2">
                        R$ {produto.prod_preco}
                    </h1>
                    <a className="text-none bg-[#1a2037] text-white content-center align-middle text-center rounded poppins " href={"/produtos/"+produto.prod_id} onClick={() => (deletarProduto(produto.prod_id))} >Deletar</a>
                </div>
            ))}
        </>
    );
   
    
}
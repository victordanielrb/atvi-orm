import React from "react";

export default function Produto({ produtos = [] }) {
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
                    className="flex m-4 rounded h-12 hover:border-green hover:border-2 align-middle content-center transition ease-in hover:transition hover:animate-[wiggle_1s_ease-in-out_infinite] hover:scale-110 hover:bg-[#1a2037] hover:p-0 hover:size-xl cursor-pointer grid grid-cols-5 gap-2 justify-center"
                >
                    <h1 className="text-center text-2xl text-white ">
                        {produto.prod_id}
                    </h1>
                    <h1 className="text-center text-2xl px-4 text-white border-l-2 border-r-2 border-[#1a2037] full col-span-2">
                        {produto.prod_nome}
                    </h1>
                    <h1 className="text-center text-2xl text-white full col-span-2">
                        R$ {produto.prod_preco*10000}
                    </h1>
                </div>
            ))}
        </>
    );
   
    
}
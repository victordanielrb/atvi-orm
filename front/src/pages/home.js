import React from "react";
import Sidebari from "../components/sidebari";
import Fornecedores from "../components/fornecedores";
import CadFornecedores from "../components/cadfornecedores";
export default function Home(){
    return(
        <div className="min-h-[100vh] flex ">
           <Sidebari/>
           

        <div className="flex border-l-4 border-[#252e50]  flex-col h-full w-full text-center justify-center  ">
                <CadFornecedores/>
            <div className="my-16  m-4 bg-[#252e50] rounded  flex flex-col mx-auto ">
                    <div  className="flex m-4 rounded h-12 align-middle content-center cursor-default grid grid-cols-4 gap-4 justify-center ">
                        <h1 className=" text-center text-2xl text-white border-r-2 border-[#1a2037]  align-center content-center "> Id</h1>
                        <h1 className="  text-center  text-2xl text-white full col-span-2 align-center content-center"> Nome do Fornecedor</h1>
                
                    </div>
                    
                <Fornecedores/>
            </div>
        </div>
        </div>
    )
}
import React from "react";
import Sidebari from "../components/sidebari";
import ExibirCompras from "../components/exibirCompras";
export default function Historico(){
    return(
        <div className="min-h-[100vh] flex ">
           <Sidebari/>
           

        <div className="my-16  m-4 bg-[#252e50] rounded  flex flex-col mx-auto ">
        <div  className="group flex m-4 rounded h-12 align-middle content-center text-center  cursor-default grid grid-cols-7 gap-4 justify-center">
                    <h1 className=" text-center text-2xl text-white border-r-2 border-[#1a2037] px-2 ">  ID</h1>
                    <h1 className=" w-full text-center  text-2xl border-r-2 px-2 pr-4 border-[#1a2037] text-white full col-span-2 mx-auto"> Nome do fornecedor</h1>
                    <h1 className=" w-full text-center  text-2xl text-white full col-span-2 mx-auto  border-r-2 px-2 border-[#1a2037]"> Data</h1>

                    <h1 className=" w-full text-center  text-2xl text-white full col-span-2 mx-auto   ">Nome do produto</h1>
                </div>
            <ExibirCompras/>
        </div>
        </div>
    )
}
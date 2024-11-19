import React, { useEffect,useState } from "react";
import Sidebari from "../components/sidebari";
import Fornecedores from "../components/fornecedores";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Produto from "../components/produtos";
import CadProdutos from "../components/cadProdutos";
export default function Products(){
    const params = useParams();
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        async function loadProdutos(){
            try {
                const response = await api.get(`/produtos/${params.id}`)
                console.log(response.data);
                console.log(response);
                const data = response.data;
                setProdutos(data)
            }
            catch (error) {
                console.error("Error fetching produtos:", error);
            }
       
        } loadProdutos()
    },[])
    return(
        <div className="min-h-[100vh] flex ">
           <Sidebari/>
           

        <div className="flex  flex-col h-full w-full  ">
            <h1 className="text-4xl font-bold text-center h-16  text-white m-2">Escolha ou cadastre um produto !</h1>
            <CadProdutos/>
            <div className="my-16  m-4 bg-[#252e50] rounded mx-auto overflow-y-auto  flex flex-col ">
                    <div  className="flex m-4 rounded h-12 align-middle content-center cursor-default grid grid-cols-5 gap-2 gap-white justify-center ">
                    <h1 className=" text-center text-2xl text-white   align-center content-center "> Id</h1>
                    <h1 className="  text-center mx-auto w-full  text-2xl text-white  full col-span-2 align-center content-center"> Produto</h1>
                    <h1 className="  text-center  text-2xl text-white full col-span-1 align-center content-center"> Preço</h1>
                </div>
                <Produto produtos={produtos}/>
            </div>
        </div>
        </div>)}
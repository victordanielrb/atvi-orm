import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";



export default function Fornecedores(){
    const [fornecedores, setFornecedores] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        async function loadFornecedores(){
            const response = await api.get('http://localhost:3001/fornecedores')
            console.log(response.data);
            console.log(response);
            const data = response.data;
            
            setFornecedores(data)
        }
        loadFornecedores()
    }, [])
    async function loadProdutos(id){
        console.log('id',id);
        
        try {
            navigate(`/produtos/${id}`);
            
        } catch (error) {
            console.error("Error fetching produtos:", error);
        }
    }

    return (
      <>
     
      {fornecedores.map(fornecedor =>{
        
        
        return (
          <div key={fornecedor.forn_id} onClick={()=>loadProdutos(parseInt(fornecedor.forn_id))} className="flex m-4 rounded h-12 align-middle content-center transition ease-in  hover:transition hover:animate-[wiggle_1s_ease-in-out_infinite] hover:scale-110 hover:bg-[#1a2037] hover:p-0  hover:size-xl cursor-pointer grid grid-cols-3 gap-4 justify-center ">
            <h1 className=" text-center text-2xl text-white border-r-2 border-[#1a2037] ">  {fornecedor.forn_id}</h1>
            <h1 className="  text-center  text-2xl text-white full col-span-2"> {fornecedor.forn_nome}</h1>
           
          </div>
        )
      })}</>
    )


}
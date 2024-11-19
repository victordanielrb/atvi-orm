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
    async function deletarProduto(id) {
      await api.delete(`/fornecedores/${id}`).then((response) => {
          console.log(response.data);
      });
  }
    return (
      <>
     
      {fornecedores.map(fornecedor =>{
        
        
        return (
          <div className="">
                    <div key={fornecedor.forn_id} onClick={()=>loadProdutos(parseInt(fornecedor.forn_id))} className="group flex m-4 rounded h-12 align-middle content-center text-center transition ease-in align-middle items-center  hover:transition hover:animate-[wiggle_1s_ease-in-out_infinite] hover:scale-110 hover:bg-[#1a2037] hover:p-0  hover:size-xl cursor-pointer grid grid-cols-4 gap-4 justify-center ">
                      <h1 className=" text-center text-2xl text-white border-r-2 border-[#1a2037] ">  {fornecedor.forn_id}</h1>
                      <h1 className=" w-full text-center  text-2xl text-white full col-span-2 mx-auto"> {fornecedor.forn_nome}</h1>
                      <a href="/" onClick={(e) => (e.stopPropagation(),deletarProduto(fornecedor.forn_id))} className="text-none z-10 bg-[#1a2037] w-16 group-hover:bg-[#252e50] h-[2rem] my-auto text-white content-center align-middle text-center rounded poppins "  >Deletar</a>

                      </div>

          </div>
        )
      })}</>
    )


}
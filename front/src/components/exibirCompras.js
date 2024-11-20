import api from "../services/api";
import { useEffect, useState } from "react";
export default function ExibirCompras() {
    const [compras, setCompras] = useState([]);
    useEffect(() => {
        async function loadCompras() {
            try {
                const response = await api.get("http://localhost:3001/compra");
                const data = response.data;
                console.log('data',data);
               
                
                setCompras(data);
            } catch (error) {
                console.error("Error fetching compras:", error);
            }
        }
        loadCompras();
    }, []);
    return(
        <>
        {compras.map(compra => {
            return (
                <div key={compra.comp_id} className="group flex m-4 rounded h-12 align-middle content-center text-center  cursor-default grid grid-cols-7 gap-4 justify-center">
                    <h1 className=" text-center text-2xl text-white border-r-2 border-[#1a2037] px-2 ">  {compra.hist_id}</h1>
                    <h1 className=" w-full text-center  text-2xl border-r-2 px-2 border-[#1a2037] text-white full col-span-2 mx-auto"> {compra.forn_nome}</h1>
                    <h1 className=" w-full text-center  text-2xl text-white full col-span-2 mx-auto  border-r-2 px-2 border-[#1a2037]"> {compra.hist_date.split('T')[0]}</h1>

                    <h1 className=" w-full text-center  text-2xl text-white full col-span-2 mx-auto  "> {compra.prod_nome}</h1>
                </div>
            )
        })}
        </>
    )

}
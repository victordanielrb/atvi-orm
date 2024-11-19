import React, { useState, useEffect, } from "react";
import Link, { useNavigate } from 'react-router-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

const Sidebari = () => {
    const [tela, setTela] = useState('Clientes');
    const [collapsed, setCollapsed] = useState(window.innerWidth < 640);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [toggled, setToggled] = useState(false);

    const handleResize = () => {
        const windowWidth = window.innerWidth;
        setWindowWidth(windowWidth);
        setCollapsed(windowWidth < 640);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const navigate = useNavigate();

 

    if (windowWidth > 400) {
        return (
            <Sidebar className="min-h-[100vh]    flex  my-auto " collapsed={collapsed} width="10rem" collapsedWidth="6rem">
                <div className="  min-h-[100vh] fixed ">
                <div className=" py-2   text-center p-2 " onClick={() => setCollapsed(!collapsed)}>
                        <a className="min-w-full text-center oswald-medium p-2 text-white cursor-pointer h-full font-sans text-3xl align-middle">
                            ORM
                        </a>
                    </div>
                <Menu className=" flex flex-col justify-between text-center   overflow-hidden" menuItemStyles={{
                    button: {
                        border: 'none',
                        color: 'white',
                        [`&:hover`]: {
                            backgroundColor: '#252e50',
                            color: 'white',
                           
                            fontSize: '1.05rem',
                            transition:'0.2s',
                            animation: 'ease-in-out',
                        },
                    }
                }}>
                    
                    <MenuItem onClick={() => (navigate('/'))} className="my-4 poppins">{collapsed ? <img className="m-auto" src="../img/customer.png" /> : 'Fornecedores'}</MenuItem>
                    <MenuItem onClick={() => (navigate('/historico'))} className="my-4 poppins">{collapsed ? <img className="m-auto" src="../img/report.png" /> : 'Historico'}</MenuItem>
                </Menu>
                </div>
            </Sidebar>
        );
    } else {
        return (
            <div style={{ display: 'flex', height: '100%', minHeight: '400px' }} className="fixed z-20 ">
                <Sidebar className="bg-white" onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always">
                    <Menu className="h-full">
                        <MenuItem onClick={() => (navigate('/'))} className="text-black text-xl bold"> Fornecedores</MenuItem>
                        <MenuItem onClick={() => (navigate('/historico'))} className="text-black text-xl bold"> Historico</MenuItem>
                        
                    </Menu>
                </Sidebar>
                <button className="sb-button fixed rounded-md  ; m-2 p-4" onClick={() => setToggled(!toggled)}>
                    <img src="../img/menu.png" alt="menu" />
                </button>
            </div>
        );
    }
};

export default Sidebari;
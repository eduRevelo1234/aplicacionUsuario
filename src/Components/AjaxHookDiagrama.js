import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Dropdown,DropdownItem,DropdownMenu,DropdownToggle} from "reactstrap";
import AjaxHookMensaje from './AjaxHookMensaje';
import { v4 } from "uuid";

export default function AjaxHookDiagrama ({diagrama, setDiagrama,diagramas, setDiagramas, mensajes, setMensajes}){

    const [dropdown, setDropdown] = useState(false);
    const [nombreDiagrama, setNombreDiagrama] = useState(null);

    const openCloseDropdown = () => {
        setDropdown(!dropdown);
    }

    useEffect(() => {
        setDiagramas([]);
        const getDiagramas = async (url) => {
            let res = await fetch(url),
                json = await res.json();
           
            json.map( async (el) => {
                let diagramax = {
                    idDiagrama: el.idDiagrama,
                    nombre: el.nombre,
                    plano: el.plano,
                };
                setDiagramas((diagramas)=> [...diagramas,diagramax]);
            }) ;  
                      
        }
        getDiagramas("https://localhost:44387/api/Diagrama");
    },[diagrama]); 
    
   
    return(
        <>
            {/* <br/> 
            <div>
                <Dropdown isOpen = {dropdown} toggle={openCloseDropdown} size="lg">
                    <DropdownToggle caret>
                        Diagramas
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header> Seleccione un diagrama </DropdownItem>
                        <DropdownItem divider/>
                        {diagramas.length === 0 ? <h3>Cargando</h3> : 
                        diagramas.map((el) => 
                            <DropdownItem key= {v4()} onClick={()=>{
                                setMensajes([]);
                                let diagramaSelect = {
                                    idDiagrama: el.idDiagrama,
                                    nombre: el.nombre,
                                    plano: el.plano,
                                }
                                setDiagrama(diagramaSelect);
                                setNombreDiagrama(diagrama.nombre);
                                
                                console.log(nombreDiagrama);
                            }}>{el.nombre}</DropdownItem>
                            
                        )}
                    </DropdownMenu>
                </Dropdown>
            </div>
            {diagrama.plano && <img src={diagrama.plano} height="200px"/>}
            <div>
                {nombreDiagrama === 'undefined' || !nombreDiagrama || nombreDiagrama === null 
                ?(
                    <h6>Seleccione un diagrama para ver mensajes</h6>
                ):(
                    <AjaxHookMensaje nombreDiagrama={nombreDiagrama} mensajes={mensajes} setMensajes={setMensajes}/>
                )}
            </div> */}
        </>
    );
}
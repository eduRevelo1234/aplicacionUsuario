import React, { useState, useEffect } from 'react';

export default function AjaxHookMensaje ({nombreDiagrama, mensajes, setMensajes}){

    

    useEffect(() => {
        if(nombreDiagrama === 'undefined'){
              console.log(nombreDiagrama);
        }
        else {
            console.log(nombreDiagrama);
            const getMensajes = async (url) => {
                let res = await fetch(url),
                    json = await res.json();
                console.log(res);
                json.map( async (el) => {
                    let mensaje = {
                        idMensaje: el.idMensaje,
                        seqNumber: el.seqNumber,
                        fechaMensaje: el.fechaMensaje,
                        datosMensaje: el.datosMensaje,
                        lqi: el.lqi,
                        idDispositivo: el.idDispositivo,
                        idDiagrma: el.idDiagrma,
                        IdMensaje: el.idMensaje,
                        FechaMensaje: el.fechaMensaje,
                        DatosMensaje: el.datosMensaje,
                        IdDispositivo: el.idDispositivo,
                        SeqNumber: el.seqNumber,
                        Lqi: el.lqi,
                    };
                    
                    setMensajes((mensajes)=> [...mensajes,mensaje]);
                }) ;
            }
            getMensajes("https://localhost:44387/api/Mensaje?nombre=" +nombreDiagrama);            
        }
    }, [nombreDiagrama]); 
    
    return(
        <>
            
        </>
    );
}
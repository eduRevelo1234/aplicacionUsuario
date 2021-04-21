import React from 'react';
import Table from 'react-bootstrap/Table';
import TablaFilaMensaje from "./TablaFilaMensaje";

export default function Mensaje ({mensajes}){

    return(
        <div>  
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th> Numero de secuencia </th>
                        <th> Fecha  </th>
                        <th> Datos </th>
                        <th> LQI </th>
                        
                    </tr>
                </thead>
                <tbody>
                    { mensajes.length > 0 ? (
                        mensajes.map((el)=> <TablaFilaMensaje key= {el.idMensaje} date={el.fechaMensaje} seqNumber={el.seqNumber} lqi={el.lqi} datosMensaje={el.datosMensaje} />)
                    ):(
                        <tr>
                            <td colSpan ="3">Sin datos</td>
                        </tr>
                    )} 
                    
                </tbody>

            </Table>
        </div>
    );
}
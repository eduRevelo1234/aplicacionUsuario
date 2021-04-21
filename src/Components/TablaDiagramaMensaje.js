import React from 'react';
import Table from 'react-bootstrap/Table';
import TablaFilaDiagramaMensaje from "./TablaFilaDiagramaMensaje";
const TablaDiagramaMensaje = ({diagramas,setDiagramaSelected}) => {
    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Nombre Diagrama</th>
                    <th>Plano</th>
                    </tr>
                </thead>
                <tbody>
                    { diagramas.length > 0 ? (
                        diagramas.map((el)=> <TablaFilaDiagramaMensaje key={el.idDiagrma} el={el} setDiagramaSelected={setDiagramaSelected}/>)
                    ):(
                        <tr>
                            <td colSpan ="3">Sin datos</td>
                        </tr>
                    )}       
                </tbody>
            </Table>
        </div>
    )
}

export default TablaDiagramaMensaje;

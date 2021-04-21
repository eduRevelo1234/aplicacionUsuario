import React from 'react'
import Table from 'react-bootstrap/Table'
import TablaFilaDiagrama from './tablaFilaDiagrama';

const TablaDiagrama = ({setIsUpdate, diagramas, setDataToEdit,deleteData}) => {
    
    return (
        
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                    <th>Nombre Diagrama</th>
                    <th>Plano</th>
                    </tr>
                </thead>
                <tbody>
                    { diagramas.length > 0 ? (
                        diagramas.map((el)=> <TablaFilaDiagrama key={el.idDiagrma} el={el} setDataToEdit={setDataToEdit} deleteData = {deleteData}/>)
                    ):(
                        <tr>
                            <td colSpan ="3">Sin datos</td>
                        </tr>
                    )}       
                </tbody>
            </Table>
        
    )
}

export default TablaDiagrama;

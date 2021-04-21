import React from 'react';
import Button from 'react-bootstrap/Button';

const TablaFilaDiagramaMensaje = ({el,setDiagramaSelected}) => {
    return (
        <tr>
            <td>{el.nombre}</td>
            <td>
                <img src={el.plano.replace(/['"]+/g, '')} height="100px"/>
            </td>
            <td>
                <Button onClick={() => setDiagramaSelected(el)} >Seleccionar</Button>
            </td>
        </tr>
    )
}

export default TablaFilaDiagramaMensaje;

import React,{useEffect, useState} from 'react'

const TablaFilaMensaje = ({seqNumber,lqi,datosMensaje,date}) => {
    const [datef, setDatef] = useState(null);
    
    /* var fecha = new Date(timestamp); */
    useEffect(() => {
        var timestamp = parseInt(date);
        var fecha = new Date (timestamp);
        setDatef("" 
                    +fecha.getDate()+
                    "/"+(fecha.getMonth()+1)+
                    "/"+fecha.getFullYear()+
                    " "+fecha.getHours()+
                    ":"+fecha.getMinutes()+
                    ":"+fecha.getSeconds());
        console.log(datef);
        // var fechaT = new Date (date);
        //console.log(fechaT);
        //setFecha(fechaT);
    }, [])

    return (
        <tr>
            <td>{seqNumber}</td>
            <td>{datef}</td>
            <td>{datosMensaje}</td>
            <td>{lqi}</td>
        </tr>
    )
}

export default TablaFilaMensaje;


import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Lottie from "react-lottie";
import buttonLottie from "../Assets/Lottie/buttonLottie.json";


const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
  };
  

const TablaFilaDiagrama = ({el, setDataToEdit,deleteData}) => {

    const [isPaused, setIsPaused] = useState(false);
    const [isStopped, setIsStopped] = useState(true);


    let {plano,nombre,idDigrma} = el;
    
    

    const edit = (el) => {
        
        setDataToEdit(el);
        console.log(el.plano);
    }

    const deleteDiagrama = () => {
        deleteData(el.idDiagrma);
        setIsStopped(false);
    }

    return (
        <tr>
            <td>{el.nombre}</td>
            <td>
                {el.plano ? (<img src={el.plano.replace(/['"]+/g, '')} height="100px"/>):<h1>NULL</h1>}
            </td>
            <td>
                <Button onClick={() => edit(el)} >Editar</Button>
                {isStopped ? (
                        <Button onClick={deleteDiagrama}> Eliminar </Button>
                    ):(
                        <Lottie  onStateChange={deleteDiagrama} options ={{animationData: buttonLottie, defaultOptions}} isPaused={isPaused} isStopped={isStopped}  /> 
                    )}
            </td>
        </tr>
    )
}

export default TablaFilaDiagrama;

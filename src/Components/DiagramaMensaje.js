import React,{useState,useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from "./Message";
import TablaDiagramaMensaje from './TablaDiagramaMensaje';
import leyenda from '../IMG/leyenda.JPG';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DiagramaMensaje = ({diagramaSelected,setDiagramaSelected, mensajes, setMensajes}) => {

    const [diagramas, setDiagramas] = useState([]);
    
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    let api = helpHttp();
    let url = "https://localhost:44387/api/Diagrama";

    let urlM = "https://localhost:44387/api/Mensaje";

    useEffect(() => {
        setLoading(true);
        helpHttp().get(url).then((res) => {
            if(!res.err){    
                setDiagramas(res);
                setError(null);
            }else{
                setDiagramas(null);
                setError(res);
            }
            setLoading(false);
        });
    }, []);
    
    useEffect(() => {
        if(diagramaSelected){
            let endpoint = `${urlM}/${diagramaSelected.idDiagrma}`;
                helpHttp().get(endpoint).then((res) => {
                if(!res.err){
                    setError(null);
                    setMensajes(res);
                }else{
                    setError(res);
                    setMensajes(null);
                }
            });
        }else{
            console.log("No se ha selecinado ningun diagrama");
        }
        console.log(mensajes);
    }, [diagramaSelected]);




    return (
        <div>
            {loading && <Loader></Loader>}
            {error &&  <Message msg={`Error ${error.status}: ${error.status.text}`} bgColor="#dc3545"></Message>}
            {diagramas && <TablaDiagramaMensaje diagramas={diagramas} setDiagramaSelected={setDiagramaSelected} />}
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>Leyenda</Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col> <img src={leyenda} alt="Leyenda" /></Col>
                </Row>
            </Container>
           
        </div>
    )
}

export default DiagramaMensaje;

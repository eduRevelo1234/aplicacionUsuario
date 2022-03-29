import React, { useEffect,useState } from 'react'
import L from "leaflet";
import HeatmapLayer from "react-leaflet-heatmap-layer";
import { Map, ImageOverlay } from "react-leaflet";
import "./App.css";
/* import { dataPoints } from "./Data.js"; */
import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CrudDiagrama from "./Components/crudDiagrama"
import DiagramaMensaje from "./Components/DiagramaMensaje";
import Message from './Components/Message';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome,faAddressCard,faEye} from "@fortawesome/free-solid-svg-icons";
import {useSpring,config, animated} from "react-spring";
import {Spring} from 'react-spring';
import animation from "./Assets/Lottie/animation.json";
import Lottie from "react-lottie";
import Mensaje from "./Components/Mensajes";

var bounds = [
  [400, 0],
  [0, 800],
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  }
};


const App = () => {

  const [diagramaSelected, setDiagramaSelected] = useState(null);
  const [mensajes, setMensajes] = useState([]);
  const [show,setShow] = useState(false);
  const [points, setPoints] = useState([]);
  const [pointsNumber, setPointsNumber] = useState(0);
  let cont=0;
  const dataPoints= [];
  
  useEffect(() => {
    mensajes.map((el)=>{
      cont=cont+1;
    });
    console.log(cont);
    
    mensajes.map((el) => {
    var cadena = el.datosMensaje.split("/");  
    let x = parseInt(cadena[1]);
    let y = parseInt(cadena[2]);
    console.log(cadena[1]);
      if(el.lqi === 1){
        for( let i=0; i < 1; i++ ){
          for( let j=0 ; j < 1; j++){
            let data = {
              coordinates: [
                 x + i,
                 y+j,
              ],
            }
            dataPoints.push(data);
          }
        }  
      } else if(el.lqi === 2){
          for( let i=0; i < 1; i++ ){
            for( let j=0 ; j <15; j++){
              let data = {
                coordinates: [
                  x - i,
                  y - j,
                ],
              }
              dataPoints.push(data);
            }
          }  
      }else{
        for( let i=0; i < 20; i++ ){
          for( let j=0 ; j < 20; j++){
            let data = {
              coordinates: [
                 x + i,
                 y+j,
              ],
            }
            dataPoints.push(data);
          }
        }  
      }

    });
    console.log(dataPoints);
  
  }, [mensajes]);

  const numberPoints = (cont) => {
   
  }

  useEffect(() => {
    
    if(diagramaSelected){
      console.log("Estos son los datos");
      console.log(diagramaSelected.plano);
    }
      
  }, [diagramaSelected]);

  return (
    <div >
    <Router>
      <animated.div
        
        onMouseEnter={(e)=>{setShow(true)}}
        onMouseLeave={(e)=>{setShow(false)}}
        >
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">
              {!show ?(<FontAwesomeIcon icon={faHome}/>):(<h6>Inicio</h6>)}
            </Nav.Link>
            <Nav.Link href="/crudDiagrama">
              {!show ?(<FontAwesomeIcon icon={faAddressCard}/>):(<h6>Crud Diagrama</h6>)}
              
            </Nav.Link>
            <Nav.Link href="/ver">
              {!show ?(<FontAwesomeIcon icon={faEye}/>  ):(<h6>Ver Diagramas</h6>)}
            </Nav.Link>
          </Nav>
        </Navbar>
      </animated.div>
      <Container  >
        <Switch>
          <Route path="/" exact>
            <Container>
              <Row>
                <h1 className="text"> Aplicación para la obtención de la zona de cobertura de la red SigFox en el interior de edificaciones</h1>
              </Row>
              <Row>
                <Col md >
                  <Lottie options ={{animationData: animation, defaultOptions}} widht={500} height={500}/>
                  {/* <Image src={require("./IMG/logoSigFox.JPG")} /> */}
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path="/crudDiagrama">
            <CrudDiagrama/>
          </Route>
          <Route path="/ver">
            <DiagramaMensaje diagramaSelected={diagramaSelected} setDiagramaSelected={setDiagramaSelected} mensajes={mensajes} setMensajes={setMensajes}/>
            <div>

            {!diagramaSelected  ?(<Message msg={`Seleccione un plano`} variant="primary"></Message>) 
                        :(<>
                            <Map
                              className=""
                              crs={L.CRS.Simple}
                              bounds={bounds}
                              maxZoom={0}
                              // scrollWheelZoom={false}
                              onzoomstart={(e) => console.log(e)}
                              attributionControl={false}
                              scrollWheelZoom = {false}
                            >
                              <HeatmapLayer
                                points={dataPoints}
                                longitudeExtractor={(m) => m.coordinates[0]}
                                latitudeExtractor={(m) => m.coordinates[1]}
                                intensityExtractor={(m) => 1}
                                radius={20}
                                weight={1}
                                
                              />
                              <ImageOverlay
                                url={diagramaSelected.plano.replace(/['"]+/g, '')}
                                bounds={[
                                  [400, 0],
                                  [0, 800],
                                ]}
                              />
                            </Map>
                            { mensajes.length > 0 ? (
                                  <Mensaje mensajes={mensajes}/>
                              ):(
                                  <Message msg={`No contiene Mensajes`} variant="primary"></Message>
                              )} 
                          </>
                        ) 
            }
            </div>
          </Route>
        </Switch>
      </Container>
    </Router>    
  </div>
  );
};
export default App;

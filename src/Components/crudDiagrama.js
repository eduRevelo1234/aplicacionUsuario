import React, {useState,useEffect} from 'react'
import { helpHttp } from '../helpers/helpHttp';
import ImageForm from './ImageForm';
import Loader from './Loader';
import Message from "./Message";
import TablaDiagrama from './tablaDiagrama';
import "./crudDiagrama.css";



const CrudDiagrama = () => {

    const [diagramas, setDiagramas] = useState(null);
    const [diagrama, setDiagrama] = useState([]);
    const [dataToEdit, setDataToEdit] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedFile, setSelectedFile] = useState([]);
    const [imageBase64, setImageBase64] = useState("");
    const [nombreDiagrma, setNombreDiagrma] = useState("Ejemplo desde Front");
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateTable , setUpdateTable ] = useState(false);
    const [isNewFile, setIsNewFile] = useState(false);

    let api = helpHttp();
    let url = "https://localhost:44387/api/Diagrama";

    useEffect(() => {
        if(dataToEdit){
            alert("El id del diagrama seleccionado es: "+dataToEdit.idDiagrma);
        }
        
    }, [dataToEdit])
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
        
    }, [updateTable])

    const createData = (form) =>{
        let data = JSON.stringify(form.plano);
        console.log(data);
        let endpoint = `${url}?nombre= ${form.nombre}`;
        let options ={
            body: data.replace(/['"]+/g, ''),
            headers: {'content-type': 'text/json'}
        };
        console.log(options);
        if(options.body === null){
        }else {
            api.post(endpoint,options).then(res=>{
                console.log(res);
                if(!res.err){
                    console.log(res);
                }else{
                    setError(res);
                }
            });
        }
    };


    const updateData = (form) =>{
        let data;
        if(isNewFile){
            data = JSON.stringify(form.plano);
        }
        else {
             data = form.plano
        }
        console.log(data);
        let endpoint = `${url}/${form.idDiagrma}?nombre=${form.nombre}`;
        console.log(endpoint);
        let options ={
            body: data,
            headers: {'content-type': 'text/json'}
        };
       if(options.body === null){
        }else{
            api.put(endpoint,options).then(res=>{
                console.log(res);
                if(!res.err){
                    let newData = diagramas.map((el) => el.id === form.idDiagrma ? form:el);
                    setDiagramas(newData);
                }else{
                    setError(res);
                }
            }); 
        }
        /* let newData = diagramas.map(el => el.id === data.id ? data : el);
        setdiagramas(newData); */
    };
    const deleteData = (id) => {
        let isDelete = window.confirm(
            `¿Estas seguro de eliminar el diagrma con el id'${id}'`
            );
        setTimeout(() => {
            if(isDelete){
                let endpoint = `${url}/${id}`;
                console.log(endpoint);
                let options ={
                    headers: {"content-type":"application/json"}
                };
                api.del(endpoint,options).then(res => {
                    console.log(options);
                    if(!res.err){
                        let newData = diagramas.filter(el => el.id !== id);
                        setDiagramas(newData);
                        if(updateTable){
                            setUpdateTable(false);
                        }else{
                            setUpdateTable(true);
                        }
                    }else{
                        setError(res);
                    }
                });
            }else {
                return;
            } 
        }, 2000);
        
    };

    


    return (
        <div>
            <article className = "grid-1-2">
                <ImageForm 
                    updateTable={updateTable} 
                    setUpdateTable={setUpdateTable} 
                    diagrama={diagrama} 
                    setDiagrama={setDiagrama} 
                    createData={createData} 
                    updateData={updateData} 
                    dataToEdit={dataToEdit} 
                    setDataToEdit={setDataToEdit} 
                    setIsNewFile={setIsNewFile}/>
                {loading && <Loader></Loader>}
                {error &&  <Message msg={`Error ${error.status}: ${error.status.text}`} bgColor="#dc3545"></Message>}
                {diagramas && <TablaDiagrama 
                                diagramas={diagramas}  
                                setDataToEdit={setDataToEdit} 
                                deleteData={deleteData} 
                                setIsUpdate={setIsUpdate}/>}
            </article>
        </div>
    )
}


export default CrudDiagrama;

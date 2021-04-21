import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Lottie from "react-lottie";
import uploading from "../Assets/Lottie/uploading.json";

const initialForm = {
    idDiagrma: null,
    nombre: "",
    plano: "",
};

const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    }
};

const ImageForm =({setUpdateTable,updateTable,diagrama, setDiagrama, createData, updateData, dataToEdit, setDataToEdit, isUpdate, setIsNewFile}) => {

    const [selectedFile, setSelectedFile] = useState([]);
    const [imageBase64, setImageBase64] = useState("");
    const [nombreDiagrma, setNombreDiagrma] = useState("");
    const [form, setForm] = useState(initialForm);
    const [isPaused, setIsPaused] = useState(false);
    const [isStopped, setIsStopped] = useState(true);
    
    const convertBase64=(file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror=(error)=>{
                reject(error);
            };
        });
    }


    useEffect(() => {
        if(dataToEdit){
            console.log(form.idDiagrma);
            setForm(dataToEdit);
            
        }
        else {
            setIsStopped(true);
            setForm(initialForm);
        }
        
    }, [dataToEdit]);

    const fileSelectedHandler = async event => {


        setIsNewFile(true);

        setSelectedFile(event.target.files[0]);
        const file = event.target.files[0];
        const base64 = await convertBase64(file);
        
        

        setImageBase64(base64);
        setSelectedFile(file);
        setDiagrama(base64);
        console.log(diagrama);
        setForm({
            ...form,
            plano: diagrama,
        });
    }
    
    const nameSelectedHandler = async event => {
        
        setNombreDiagrma(event.target.value);

        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        
    }

    const fileUploadHandler = (e) => {
        e.preventDefault();
        
        if(!form.nombre){
            alert("Datos Incompletos");
            return;
        }
       //  console.log(form);
       setIsStopped(false);
       
        if(form.idDiagrma=== null){
            console.log("Create");
            createData(form);
        } else {
            console.log("Update");
            updateData(form);
        }
        handleReset();
        if(updateTable){
            setUpdateTable(false);
        }else{
            setUpdateTable(true);
        }
       
       setTimeout(() => {
        setIsStopped(true);
       }, 2000);
       
    }
    
    const handleReset = () => {
        
        setDiagrama([]);
        setNombreDiagrma("");
        setSelectedFile([]);
        setForm(initialForm);
        setDataToEdit(null);
    }

    
    return (
        <>
            <hr></hr>
            <hr></hr>
            <Form onSubmit = {fileUploadHandler}>
                <Form.Group controlId="formDiagrama" >
                    <Form.Label>Nombre Diagrama</Form.Label>
                    <Form.Control type="text" name="nombre" placeholder="Nombre Diagrama" value={form.nombre} onChange={nameSelectedHandler}/>
                    <Form.Label>Seleccione un diagrama</Form.Label>
                    <Form.File id="diagrama" name="plano"  onChange={fileSelectedHandler} />
                    <Form.Text className="text-muted">
                        Ingresa la imagen del diagrama en formato JPEG.
                    </Form.Text>
                    {diagrama.length > 0 ? (
                        <img src={diagrama} height="200px"/>
                    ):(
                        <Form.Text className="text-muted">
                            Seleccione un diagrama para mostrarlo
                        </Form.Text>
                    )}
                    
                    {isStopped ? (
                        <Button variant="primary" type="submit" >
                            Guardar
                        </Button>
                    ):(
                        <Lottie 
                            options ={{animationData: uploading, defaultOptions}} 
                            isPaused={isPaused} 
                            isStopped={isStopped} 
                            weight={300} 
                            height={300}
                        />
                    )}
                    
                </Form.Group>
            </Form>
            
        </>
    );
}

export default ImageForm;


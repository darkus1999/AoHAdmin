import React, { useState, useEffect } from 'react';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { Add as AddIcon } from '@material-ui/icons';

const columns= [
  { title: 'ID', field: 'id' },
  { title: 'Descripcion', field: 'descripcion' },
  { title: 'Mienbros', field: 'mienbros' },
  { title: 'Avance', field: 'avance', type: 'numeric'},
  { title: 'Status', field: 'status'}
];
const baseUrl="http://localhost:3001/proyectos";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function Oportunidades() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [proyectoSeleccionado, setProyectoSeleccionado]=useState({
    avance: "",
    mienbros: "",
    id: "",
    descripcion: "",
    status: ""
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setProyectoSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl, proyectoSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
    await axios.put(baseUrl+"/"+proyectoSeleccionado.id, proyectoSeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(proyecto=>{
        if(proyecto.id===proyectoSeleccionado.id){
          proyecto.descripcion=proyectoSeleccionado.descripcion;
          proyecto.mienbros=proyectoSeleccionado.mienbros;
          proyecto.avance=proyectoSeleccionado.avance;
          proyecto.status=proyectoSeleccionado.status;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
      //DEJAR EN BLANCO EL ID PARA QUE PUEDA TOMAR EL NUEVO VALOR DEL SIGUIENTE A EDITAR
      proyectoSeleccionado.id="";
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl+"/"+proyectoSeleccionado.id)
    .then(response=>{
      setData(data.filter(proyecto=>proyecto.id!==proyectoSeleccionado.id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarProyecto=(proyecto, caso)=>{
    setProyectoSeleccionado(proyecto);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Proyecto</h3>
      <TextField className={styles.inputMaterial} label="Descripcion" name="descripcion" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Miembros" name="mienbros" onChange={handleChange}/>          
<br />
<TextField className={styles.inputMaterial} label="Avance" name="avance" onChange={handleChange}/>
      <br />
<TextField className={styles.inputMaterial} label="Status" name="status" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Proyecto</h3>
      <TextField className={styles.inputMaterial} label="Descripcion" name="descripcion" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.descripcion}/>
      <br />
      <TextField className={styles.inputMaterial} label="Mienbros" name="mienbros" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.mienbros}/>          
<br />
<TextField className={styles.inputMaterial} label="Avance" name="avance" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.avance}/>
      <br />
<TextField className={styles.inputMaterial} label="Status" name="status" onChange={handleChange} value={proyectoSeleccionado&&proyectoSeleccionado.status}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar al proyecto <b>{proyectoSeleccionado && proyectoSeleccionado.descripcion}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (
    <div className="App">
      <br />
      <Button 
          onClick={()=>abrirCerrarModalInsertar()}
          startIcon={<AddIcon />}
          variant="outlined"
          color="primary">
          Agregar
      </Button>
      <br /><br />
     <MaterialTable
          columns={columns}
          data={data}
          title="Semilla 1"  
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar Proyecto',
              onClick: (event, rowData) => seleccionarProyecto(rowData, "Editar")
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar Proyecto',
              onClick: (event, rowData) => seleccionarProyecto(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
            search: true
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />


        <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyInsertar}
        </Modal>

        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
}

export default Oportunidades;

import React,{useState,Fragment} from 'react';
import {useForm} from "react-hook-form";
import TablaUsuarios from './TablaUsuarios';
import TablaUsuari from './TablaUsuarios';

const Usuario = () => {
    const{register,handleSubmit,formState:{errors}}=useForm();
    const[listaDeUsuarios, setListaDeUSuarios] = useState([])
    const enviar = (usuario) => {
        let usuarioNuevo = {
            nombre: usuario.nombre,
            edad:usuario.edad,
            ocupacion:usuario.ocupacion,
            descripcion: mensajePorEdad(usuario)
        }
        

        alert(usuarioNuevo.descripcion);
        setListaDeUSuarios(listaDeUsuarios => [...listaDeUsuarios, usuarioNuevo]);
        console.log(listaDeUsuarios)
    }

    const mensajePorEdad = (user)=>{

        let {edad, nombre, ocupacion} = user;

        if(edad>=0 && edad<=12){
            return `Al niñ@ ${nombre} de ${edad} años,le recomendamos disfrutar de su niñez,aprender y respetar`;
        }else if(edad<=30){
            return `Al Joven ${nombre} de ${edad} años,le recomendamos tener presente el compromiso, el esfuerzo y el respeto como principales valores para obtener un buen resultado como ${ocupacion}`
        }else if(edad<=50){
            return `Al Adulto ${nombre} de ${edad} años, le recomendamos tener presente la paciencia como ${ocupacion}`
        }else{
            return `Al Mayor ${nombre} de ${edad} años, le recomendamos compartir sus experiencias vividas con los demas, enseñando lo aprendido y disfrutando como nunca de la vida`
        }
    }

    return ( 
        <div className="container mt-5">
            <Fragment>
                <h1>Formulario</h1>
                <form className="row" onSubmit={handleSubmit(enviar)}>
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese Nombre" 
                        className="form-control" 
                        type="text"
                        {...register("nombre",{required:true})}
                        ></input>
                        <br/>
                        {errors?.nombre?.type === "required" && <p className="error">El nombre es obligatorio</p>}
                    </div>
                    <div className="col-md-3">
                        <input 
                        placeholder="Ingrese Edad" 
                        className="form-control" 
                        type="number"
                        {...register("edad",{required:true})}
                        ></input>
                        <br/>
                        {errors.edad && <p className="error">Ingresa una edad valida</p>}
                    </div>
                    <div className="col-md-3">
                        <select className="form-select" {...register("ocupacion")}>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Empleado">Empleado</option>
                            <option value="Jubilado">Jubilado</option>
                        </select>
                    </div>
                    
                    <div className="col-md-3">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>
                </form>
                <TablaUsuarios usuarios={listaDeUsuarios}/>
            </Fragment>
        </div>
     );
}
 
export default Usuario;
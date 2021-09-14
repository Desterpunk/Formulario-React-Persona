import React,{Fragment} from 'react';
const TablaUsuarios = (props) => {
    const usuarios = props.usuarios;
    
    return ( 
        <Fragment>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Ocupacion</th>
                            <th>Descripcion</th>
                            <th>Categoria</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usuarios.map((usuario,index) => (
                                <tr key={index}>
                                    {Object.values(usuario).map((val,i) => (<td key={i}>{val}</td>))}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Fragment>
     );
}
 
export default TablaUsuarios;
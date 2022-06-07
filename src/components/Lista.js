import { useState } from "react";

import Caja from "./caja";

const todos = [
    {
        titulo: 'titulo 1',
        descripcion: "descripcion 1",
    },
    {
        titulo: 'titulo 2',
        descripcion: "descripcion 2",
    }

];




export default function Lista(){

    return (
        <>
            <h1>
                soy la lista del contenido
            </h1>

                {todos.map((item,indice)=>{
                return(
                        <Caja titulo={item.titulo} desc={item.descripcion} key={indice}></Caja>
                )
                })}

        </>
    );
}





import Lista from "./components/Lista";
import Formulario from "./components/Formulario";



export default function App(){

    return (
        <div className="container mt-4">
            <h1>TITLE DE LA APP</h1>
            <p>Soy el parrafo de este componente</p>
            <div className="row">
                <div className="col-6">
                    <Lista></Lista>
                </div>
                <div className="col-6">
                    <Formulario></Formulario>
                </div>
            </div>

        </div>
    );

}




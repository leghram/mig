

export default function Caja({titulo,desc}){

    return (
    <div className="card">
        <div className="card-body">
            <h2 className="card-title text-center">
                {titulo}
                <button className="btn btn-sm btn-success">Terminar</button>
                </h2>
            <p className="card-text text-center">{desc}</p>
            <hr></hr>
            <div className="d-flex justify-content-center">
                <button className="btn btn-sm btn-outline-primary my-1">EDITAR</button>
                <button className="btn btn-outline-danger my-1 btn-sm">ELIMINAR</button>
            </div>

        </div>
    </div>
    );

}




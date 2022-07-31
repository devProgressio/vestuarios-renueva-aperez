import { useEffect, useState } from "react";
import { data } from "../mock/FakeApi";
import ItemList from "../components/ItemList";
import { ProgressSpinner } from 'primereact/progressspinner';

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [mensaje, setMensaje] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('soy el useEffect')
        data
            .then((res) => setListaProductos(res))
            .catch(() => setMensaje('hubo un error, intente mas tarde'))
            .finally(() => setLoading(false));
    }, []);

    const spinner = (
        <span>
            <ProgressSpinner />
            <h3>Cargando...</h3>
        </span>
    );

    return (
        <div className="fluid">
            {/* <h3>{greeting}</h3> */}
            {mensaje && <p>{mensaje}</p>}
            {loading ? spinner : <ItemList listaProductos={listaProductos} />}
        </div>
    )
}

export default ItemListContainer;
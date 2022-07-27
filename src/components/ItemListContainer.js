import { useEffect, useState } from "react";
import { data } from "../mock/FakeApi";
import ItemList from "../components/ItemList";

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [mensaje, setMensaje] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('soy el useEffect')
        data
            .then((res) => setListaProductos(res))
            .catch(() => setMensaje('hubo un error, intente mas tarde'))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <h2>{greeting}</h2>
            {mensaje && <p>{mensaje}</p>}
            {loading ? <p>Cargando...</p> : <ItemList listaProductos={listaProductos} />}
        </div>
    )
}

export default ItemListContainer;
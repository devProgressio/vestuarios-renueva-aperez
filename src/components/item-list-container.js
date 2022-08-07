import { useEffect, useState } from "react";
import { getProducts } from "../mock/fake-api";
import ItemList from "./item-list";
import { ProgressSpinner } from 'primereact/progressspinner';
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [mensaje, setMensaje] = useState(false);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        console.log('soy el useEffect')
        getProducts
            .then((res) => {
                if (category) {
                    setListaProductos(res.filter((product) => product.category === category));
                } else {
                    setListaProductos(res);
                }
            })
            .catch(() => setMensaje('hubo un error, intente mas tarde'))
            .finally(() => setLoading(false));
    }, [category]);

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
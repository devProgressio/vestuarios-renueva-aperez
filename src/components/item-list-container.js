import { useEffect, useState } from "react";
import ItemList from "./item-list";
import { ProgressSpinner } from 'primereact/progressspinner';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { DB } from "../config/firebase";

const ItemListContainer = ({ greeting }) => {
    const [listaProductos, setListaProductos] = useState([]);
    const [mensaje, setMensaje] = useState(false);
    const [loading, setLoading] = useState(true);
    const { category } = useParams();

    useEffect(() => {
        const COLLECTION_PRODUCTS = collection(DB, "products");
        const WHERE_CATEGORY = where("category", "==", category);
        const QUERY_PRODUCTS = category ? query(COLLECTION_PRODUCTS, WHERE_CATEGORY) : COLLECTION_PRODUCTS;

        getDocs(QUERY_PRODUCTS).then((result) => {
            const PRODUCTS = result.docs.map((product) => {
                return {
                    id: product.id,
                    ...product.data()
                }
            });
            setListaProductos(PRODUCTS);

        }).catch((error) => { setMensaje('hubo un error, intente mas tarde') })
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
            {mensaje && <p>{mensaje}</p>}
            {loading ? spinner : <ItemList listaProductos={listaProductos} />}
        </div>
    )
}

export default ItemListContainer;
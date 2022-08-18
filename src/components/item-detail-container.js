import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './item-detail';
import { ProgressSpinner } from 'primereact/progressspinner';
import { DB } from '../config/firebase';
import { collection, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const COLLECTION_PRODUCTS = collection(DB, "products");
        const REF_DOC = doc(COLLECTION_PRODUCTS, id);
        getDoc(REF_DOC).then((result) => {
            setProduct({
                id: result.id,
                ...result.data()
            });
        })
            .catch((error) => {
                console.log('Ocurrió un error al buscar producto.');
            })
            .finally(() => setLoading(false));
    }, [id]);

    const spinner = (
        <span>
            <ProgressSpinner />
            <h3>Cargando...</h3>
        </span>
    );

    return (
        <div>
            {loading ? spinner : <ItemDetail product={product} />}
        </div>
    );
};

export default ItemDetailContainer;
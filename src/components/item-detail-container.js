import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../mock/fake-api';
import ItemDetail from './item-detail';
import { ProgressSpinner } from 'primereact/progressspinner';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getProducts
            .then((res) => setProduct(res.find((item) => item.id === id)))
            .catch((error) => console.log(error))
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
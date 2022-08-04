import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../mock/FakeApi';
import ItemDetail from './ItemDetail';
import { ProgressSpinner } from 'primereact/progressspinner';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        data
            .then((res) => setProducto(res.find((item) => item.id == id)))
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
            {loading ? spinner : <ItemDetail producto={producto} />}
        </div>
    );
};

export default ItemDetailContainer;
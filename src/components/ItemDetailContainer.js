import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { ProgressSpinner } from "primereact/progressspinner";

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    // const id = 1;
    const getOneProduct = (id) => {
        fetch("../JSON/DataList.json")
            .then((response) => response.json())
            .then((data) =>
                setItem(data.filter((item) => item.id === parseInt(id))[0])
            );
    };

    useEffect(() => {
        getOneProduct(id);
    }, [id]);

    const spinner = (
        <span>
            <ProgressSpinner />
            <h3>Cargando...</h3>
        </span>
    );

    return (
        <div>
            {item.length !== 0 ? (
                <ItemDetail item={item} />
            ) : (
                {spinner}
            )}
        </div>
    )
}

export default ItemDetailContainer;
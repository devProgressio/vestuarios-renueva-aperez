import React, { useState } from 'react';
import ItemCount from '../components/ItemCount';
import { Card } from 'primereact/card';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';


const Item = ({ producto }) => {
    const [mensaje, setMensaje] = useState(false);
    const { id, img, name, description, price, stock, hashtags } = producto;

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    const header = (
        <img alt="Card" src={img} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </span>
    );

    return (
        <div className='field col'>
            <Card title={name} style={{ width: '20em' }} footer={footer} header={header}>
                <p className="font-bold">${price}</p>
                {mensaje && <p>{mensaje}</p>}
                <Link to={`/item/${id}`}>
                    <Button label="Ver más" className="p-button-outlined p-button-secondary" />
                </Link>

                <p className="text-xs font-italic">Quedan aproximadamente {stock} en stock</p>
            </Card>
        </div>
    )
}

export default Item
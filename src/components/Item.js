import React, { useState } from 'react';
import ItemCount from './item-count';
import { Card } from 'primereact/card';
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';


const Item = ({ producto }) => {
    const [mensaje, setMensaje] = useState(false);
    const { id, img, name, price, stock } = producto;

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    const header = (
        <Image src={img} alt={img} style={{ width: '100%'}} preview onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <Link to={`/item/${id}`}>
            <Button label="Ver más" className="p-button-outlined p-button-secondary" />
        </Link>
    );

    return (
        <div className='field col p-fluid'>
            <Card title={name} style={{ width: '20em', marginBottom: '2em' }} header={header} footer={footer}>
                <p className="font-bold text-xl">CLP ${price}</p>
                {mensaje && <p className='text-xs font-italic'>{mensaje}</p>}

                <span>
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    <p className="text-xs font-italic">Quedan aproximadamente {stock} en stock</p>
                </span>
            </Card>
        </div>
    )
}

export default Item;
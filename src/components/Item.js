import React, { useContext, useState } from 'react';
import ItemCount from './item-count';
import { Card } from 'primereact/card';
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { CART_CONTEXT } from '../context/cart-context';
import { formatNumber } from '../utils/format';


const Item = ({ product }) => {
    const { id, img, name, price, stock } = product;
    const navegate = useNavigate();

    const { addProduct } = useContext(CART_CONTEXT);
    const [terminar, setTerminar] = useState(false);
    const [mensaje, setMensaje] = useState(false);

/*     const onAdd = (quantity) => {
        console.log('onAdd: ', quantity);
        setMensaje(`Agregaste ${quantity} items en el carrito`)
        addProduct(product, quantity);
        setTerminar(true);
    } */

    const header = (
        <Image src={img} alt={img} style={{ width: '100%' }} preview onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <Button label="Ver producto" icon="pi pi-eye" onClick={() => navegate(`/item/${id}`)}
            className="p-button-outlined text-xs" />
    );

    const botonTerminarCompra = (
        <span>
            <Button label="Ir al Carrito" className="p-button-outlined p-button-rounded p-button-sm"
                onClick={() => navegate(`/cart`)}></Button>
        </span>
    )

    /*     const itemCount = (
            <span>
                <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                <p className="text-xs font-italic">Quedan aproximadamente {stock} en stock</p>
            </span>
        ); */

    return (
        <div className='field col p-fluid'>
            <Card title={name} style={{ width: '20em', maxWidth: '20em', marginBottom: '2em' }} header={header} footer={footer}>
                <p className="font-bold text-xl">$ {formatNumber(price)}</p>
                {mensaje && <p className='text-xs font-italic'>{mensaje}</p>}
                <p className="text-xs font-italic">Quedan aproximadamente {stock} en stock</p>
                {terminar ? botonTerminarCompra : null}
            </Card>
        </div>
    )
}

export default Item;
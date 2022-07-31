import React, { useState } from 'react';
import ItemCount from '../components/ItemCount';
import { Card } from 'primereact/card';


const Item = ({ producto }) => {
    const [mensaje, setMensaje] = useState(false);
    const { img, name, description, price, stock, hashtags } = producto;

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
        /*         <div className="card" style={{ width: '20rem', margin: '.5rem' }}>
                    <img src={img} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                        <p className="card-text">{description}</p>
                        <p className="card-text">${price}</p>
                        <p className="card-text">stock: {stock}</p>
                        {hashtags?.map((frase, index) => <p className="card-text" key={index}>{frase}</p>)}
                    </div>
                    {mensaje && <p>{mensaje}</p>}
                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    <button className='btn btn-primary'>Ver más</button>
                </div> */


        <div className='field col'>
            <Card title={name} subTitle={description} style={{ width: '20em' }} footer={footer} header={header}>
                <p className="card-text">${price}</p>
                <p className="card-text">stock: {stock}</p>
                {hashtags?.map((frase, index) => <p className="card-text" key={index}>{frase}</p>)}
                {mensaje && <p>{mensaje}</p>}
                {/* <button className='btn btn-primary'>Ver más</button> */}
            </Card>
        </div>

    )
}

export default Item
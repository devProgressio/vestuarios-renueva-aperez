import React from 'react';
import { useCartContext } from '../context/cart-context';

const ItemCart = ({ juego }) => {
    const { removeJuego } = useCartContext();
    return (
        <div>
            <img src={juego?.image} alt={juego?.title} />
            <div>
                <p>Título: {juego?.title}</p>
                <p>Cantidad: {juego?.cantidad}</p>
                <p>Precio: {juego?.price}</p>
                <p>Subtotal: ${juego?.cantidad * juego?.price}</p>
                <button onClick={() => removeJuego(juego.id)}> Eliminar </button>
            </div>
        </div>
    )
}

export default ItemCart;
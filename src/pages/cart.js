import React from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../components/item-cart';
import { useCartContext } from '../context/cart-context';

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p> No hay elementos en el carrito</p>
                <Link to='/'> Hacer Compras</Link>
            </>
        );
    }

    return (
        <div>
            {
                cart.map(product => <ItemCart key={product.id} product={product} />)

            }
            <p> Total: ${totalPrice()}</p>
        </div>
    )
}

export default Cart;


/* import { Button } from "primereact/button";
import { useContext } from "react";

const Cart = () => {
    const { cart, clearCart, removeItem, quantityInCart } = useContext(CartContext);

    if (quantityInCart && quantityInCart > 0) {
        return (
            <div className="grid">
                <div className="col">
                    <h1>{quantityInCart}</h1>
                    <h1>{cart?.nombre}</h1>
                    <ul>
                        {cart.map((product) =>
                            <li className="cartItem" key={product.id} >
                                <h3>
                                    {product.title}
                                </h3>
                                <img src={product.imagen} alt={product.imagen} />
                                <Button label="X" className="" event={() => removeItem(product)} />
                            </li>
                        )};
                        <Button label="eliminar carrito" className="btn" event={() => clearCart()} />
                    </ul>

                </div>
            </div>
        );
    } else {
        return (<div className="grid">
            <div className="col text-center">
                <h1>
                    Tu Carro está vacío
                    Tenemos miles de ofertas y oportunidades únicas, ¿te las vas a perder?
                </h1>
            </div>
        </div>);
    }

};

export default Cart; */
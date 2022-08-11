import React, { useContext, useState } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (data, quality) => {
        if (isInCart(data.id)) {
            setCart(cart.map(product => {
                return product.id === data.id ? { ...product, cantidad: product.cantidad + quality } : product;
            }));
        } else {
            setCart([...cart, { ...data, quality }])
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.cantidad * act.price, 0)
    }

    const totalProducts = () => {
        cart.reduce((acumulador, juegoActual) => acumulador + juegoActual.cantidad, 0);
    };

    const clearCart = () => setCart([])

    const isInCart = (id) => { return cart.some(juego => juego.id === id) ? true : false }

    const removeProduct = (id) => setCart(cart.filter(juego => juego.id !== id))

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeProduct,
            addProduct,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;






/* import { createContext, useState } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const addItem = { ...product, quantity: quantity };
        // searchItem(product);
        const isInCart = cart.some((e) => e.id === product.id);
        return isInCart ? cart.splice(searchItem, 1, addItem) : setCart([...cart, addItem]);
    }

    const removeItem = (product) => {
        cart.splice(searchItem(product), 1);
        return setCart([...cart]);
    }

    const searchItem = (product) => cart.findIndex((e) => e.id === product.id);

    const clearCart = () => setCart([]);

    const valueToShare = {
        cart,
        addToCart,
        clearCart,
        removeItem,
        quantityInCart: cart.length
    };

    return (
        <CartContext.Provider value={valueToShare}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider; */
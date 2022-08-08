import { createContext, useState } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const valueToShare = {
        cart,
        /* addToCart, */
        /*         isInCart,
                cleanCart,
                addToCart,
                removeToCart, */
        quantityInCart: cart.length
    };

    /* const addToCart = (item, quality) => {
        console.log({ item, quality });
        if (cart.length === 0) {
            const itemToAdd = {
                ...item,
                quality
            };
            setCart(cart.push(itemToAdd));
        }
    }; */

    return (
        <CartContext.Provider
            value={valueToShare}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
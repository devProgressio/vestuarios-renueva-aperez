import { Toast } from "primereact/toast";
import { createContext, useContext, useRef, useState } from "react";

export const CART_CONTEXT = createContext({});

const CartProvider = ({ children }) => {
    const toastBR = useRef(null);
    const [cart, setCart] = useState([]);

    const addProduct = (data, quantity) => {
        if (isInCart(data.id)) {
            if (checkStock(data, quantity)) {
                setCart(cart.map(product => {
                    return product.id === data.id ? { ...product, quantity: product.quantity + quantity } : product;
                }));
            }
        } else {
            setCart([...cart, { ...data, quantity }])
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0)
    }

    const clearCart = () => setCart([]);

    const isInCart = (id) => { return cart.some(product => product.id === id) ? true : false };

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const cantInCart = cart.reduce((previous, product) => previous + product.quantity, 0);


    

    const checkStock = (data, quantity) => {
        const productInCart = cart.find(product => product.id = data.id);
        const newQuantity = productInCart.quantity + quantity;
        if (newQuantity > productInCart.stock) {
            console.log('Supera el stock');
            toastBR.current.show({ severity: 'error', summary: 'Sobrepasa el stock', detail: 'La cantidad ingresada sobrepasa el stock existente', life: 4000 });
            return false;
        } else {
            return true;
        }

    }

    const valueContext = {
        clearCart,
        isInCart,
        removeProduct,
        addProduct,
        totalPrice,
        quantityInCart: cart.length,
        cantInCart,
        cart
    };
    return (
        <>
            <Toast ref={toastBR} position="bottom-right" />
            <CART_CONTEXT.Provider value={valueContext}>
                {children}
            </CART_CONTEXT.Provider>
        </>
    )
}

export default CartProvider;
export const useCart = () => useContext(CART_CONTEXT);
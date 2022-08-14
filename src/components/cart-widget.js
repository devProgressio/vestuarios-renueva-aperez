import { Badge } from 'primereact/badge';
import { useContext } from 'react';
import { CART_CONTEXT } from '../context/cart-context';

const CartWidget = () => {
    const { quantityInCart } = useContext(CART_CONTEXT);;
    return (
        <>
            <i className="pi pi-shopping-cart mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}>
                <Badge value={quantityInCart ? quantityInCart : 0}></Badge>
            </i>
        </>
    );
}

export default CartWidget;
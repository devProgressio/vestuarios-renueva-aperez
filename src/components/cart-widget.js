import { Badge } from 'primereact/badge';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CART_CONTEXT } from '../context/cart-context';

const CartWidget = () => {
    const { cantInCart } = useContext(CART_CONTEXT);;
    return (
        <>
            <Link to={`/cart`}>
                <i className="pi pi-shopping-cart mr-4 p-text-secondary p-overlay-badge text-teal-200" style={{ fontSize: '2rem' }}>
                    <Badge value={cantInCart ? cantInCart : 0}></Badge>
                </i>
            </Link>
        </>
    );
}

export default CartWidget;
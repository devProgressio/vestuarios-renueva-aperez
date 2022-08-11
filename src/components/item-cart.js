import { useCartContext } from '../context/cart-context';

const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div>
            <img src={product?.img} alt={product?.img} />
            <div>
                <p>Nombre: {product?.name}</p>
                <p>Cantidad: {product?.quality}</p>
                <p>Precio: {product?.price}</p>
                <p>Subtotal: ${product?.quality * product?.price}</p>
                <button onClick={() => removeProduct(product.id)}> Eliminar </button>
            </div>
        </div>
    )
}

export default ItemCart;
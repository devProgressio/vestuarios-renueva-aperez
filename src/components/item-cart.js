import { useContext } from "react";
import { CART_CONTEXT } from "../context/cart-context";

const ItemCart = (item) => {
    const { removeProduct } = useContext(CART_CONTEXT);
    return (
        <div className="grid">
            <div className="col-3">
                <img src={`images/product/${item.img}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} />
            </div>
            <div className="col-2">
                <h2 className="mb-2">{item?.name}</h2>
                <i className="pi pi-tag"></i>
                <span className="mb-2">{item?.category}</span>
            </div>
            <div className="col text-right">
                <h6 className="mb-2">${item?.price}</h6>
                <span className={`product-badge status-${item.stock < 10 ? 'lowstock' : 'instock'}`}>{item.stock < 10 ? 'STOCK BAJO' : 'CON STOCK'}</span>
            </div>
        </div>
    );
}

export default ItemCart;


const ItemCartX = ({ product }) => {
    const { removeProduct } = useContext(CART_CONTEXT);
    return (
        <div className='col'>
            <img src={product?.img} alt={product?.img} />
            <div>
                <p>Nombre: {product?.name}</p>
                <p>Cantidad: {product?.quantity}</p>
                <p>Precio: {product?.price}</p>
                <p>Subtotal: ${product?.quantity * product?.price}</p>
                <button onClick={() => removeProduct(product.id)}> Eliminar </button>
            </div>
        </div>
    )
}
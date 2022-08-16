import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import ItemCart from '../components/item-cart';
import { CART_CONTEXT } from '../context/cart-context';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Steps } from 'primereact/steps';

const Cart = () => {
    const { cart, totalPrice, removeProduct } = useContext(CART_CONTEXT);

    if (cart.length === 0) {
        return (
            <>
                <p> No hay Productos en su carrito</p>
                <Link to={`/product`}>
                    <Button label="Seguir comprando" className="p-button-outlined p-button-rounded p-button-sm"></Button>
                </Link>
            </>
        );
    }

    const items = [
        {
            label: 'Productos',
            command: (event) => {
                //toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
            }
        },
        {
            label: 'Envío',
            command: (event) => {
                //toast.current.show({ severity: 'info', summary: 'Seat Selection', detail: event.item.label });
            }
        },
        {
            label: 'Pago',
            command: (event) => {
                //toast.current.show({ severity: 'info', summary: 'Pay with CC', detail: event.item.label });
            }
        },
        {
            label: 'Confirmación',
            command: (event) => {
                //toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
            }
        }
    ];

    const itemTemplate = (item) => {
        return (
            <div className="grid">
                <div className="col-3">
                    <Image src={item.img} alt={item.img} width="140" preview onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                </div>
                <div className="col-8">
                    <div className="grid">
                        <div className="col-6">
                            <i className="pi pi-tag"></i>
                            <span className="mb-2">{item?.category}</span>
                        </div>
                        <div className="col-6">
                            <p>cantidad: {item?.quantity}</p>
                            <h6 className="mb-2">${item?.price}</h6>
                            <span className={`product-badge status-${item.stock < 10 ? 'lowstock' : 'instock'}`}>{item.stock < 10 ? 'STOCK BAJO' : 'CON STOCK'}</span>
                        </div>
                        <div className="col-12">
                            <Button label="Eliminar" onClick={() => removeProduct(item.id)} className="mb-2" />
                        </div>
                    </div>
                </div>

            </div>


            /*             <div className="grid">
                            <div className="col">
                                <Image src={item.img} alt={item.img} width="120" preview onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'}/>
                            </div>
                            <div className="col">
                                <h2 className="mb-2">{item?.name}</h2>
                                <i className="pi pi-tag"></i>
                                <span className="mb-2">{item?.category}</span>
                            </div>
                            <div className="col text-right">
                                <h6 className="mb-2">${item?.price}</h6>
                                <span className={`product-badge status-${item.stock < 10 ? 'lowstock' : 'instock'}`}>{item.stock < 10 ? 'STOCK BAJO' : 'CON STOCK'}</span>
                            </div>
                            <div className='col text-right ´p-flex'>
                                <Button label="Eliminar" onClick={() => removeProduct(item.id)} className="mb-2"/>
                            </div>
                        </div> */
        );
    }


    return (
        <div className='grid'>
            <div className='col-12'>
                <Steps model={items} />
            </div>
            <div className='col-6'>
                <div className="card">
                    <OrderList value={cart} header="Lista de Productos" listStyle={{ height: 'auto' }} dataKey="id"
                        itemTemplate={itemTemplate}>
                    </OrderList>
                </div>
            </div>


            {/*            {
                cart.map(product => <ItemCart key={product.id} product={product} />)

            }
            <p> Total: ${totalPrice()}</p> */}
            <div className='col'>
                <h1>Total: {totalPrice()}</h1>
            </div>
            <Link to={`/product`}>
                    <Button label="Seguir comprando" className="p-button-outlined p-button-rounded p-button-sm"></Button>
            </Link>
        </div>
    )
}

export default Cart;
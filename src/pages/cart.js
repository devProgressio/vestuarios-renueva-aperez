import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import ItemCart from '../components/item-cart';
import { CART_CONTEXT } from '../context/cart-context';
import { OrderList } from 'primereact/orderlist';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { Steps } from 'primereact/steps';
import { Card } from 'primereact/card';
import { formatNumber } from '../utils/format';
import '../assets/styles.css';

const Cart = () => {
    const navegate = useNavigate();
    const { cart, totalPrice, removeProduct, clearCart } = useContext(CART_CONTEXT);

    if (cart.length === 0) {
        return (
            <>
                <div className='grid justify-content-center'>
                    <div className='col-6 text-center'>
                        <Card style={{ width: 'auto' }} className=''>
                            <i className="pi pi-shopping-cart p-text-secondary text-8xl" />
                            <p className='text-5xl'> No hay Productos en su carrito</p>
                            <Button label="Ver Productos" className="p-button-outlined p-button-rounded p-button-lg" onClick={() => navegate('/product')}></Button>
                        </Card>
                    </div>
                </div>
            </>
        );
    }

    const botonTerminarCompra = (
        <span>
            <Link to={`/checkout`}>
                <Button label="Terminar compra" className="p-button-outlined p-button-rounded p-button-sm"></Button>
            </Link>
        </span>
    );

    const header = (
        <h1 className='p-2 text-teal-200'>
            Resumen de Compra
        </h1>
    );

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

    const stock = (item) => {
        return <span className={`status-${item.stock < 10 ? 'lowstock' : 'instock'}`}>{item.stock < 10 ? 'Producto con stock bajo' : 'Producto con stock'}</span>
    };

    const itemTemplate = (item) => {
        return (
            <div className="grid">
                <div className="col-2">
                    <Image src={item.img} alt={item.img} width="100" preview onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
                </div>

                <div className="col-10 text-left justify-content-center">
                    <div className="grid">
                        <div className="col-4">
                            {/* <p className='mb-4 font-italic'><i className="pi pi-tag mr-2"></i>Categoría</p> */}
                            <span className="mb-2 mr-3 text-lg">{item?.name}</span>
                            <p> Talla {item?.size}</p>
                        </div>
                        <div className="col">
                            <p className='mb-4 font-italic'>Cantidad</p>
                            <span className='mr-3'>{formatNumber(item?.quantity)}</span>
                        </div>
                        <div className="col">
                            <p className='mb-4 font-italic'>Precio Unitario</p>
                            <span className="mb-2 mr-3">${formatNumber(item?.price)}</span>
                        </div>
                        <div className="col-3 pt-6">
                            <span className='text-center'>
                                <Button icon="pi pi-trash" onClick={() => removeProduct(item.id)} className="text-xs mr-2" />
                                <Button label="Ver producto" icon="pi pi-eye" onClick={() => navegate(`/item/${item.id}`)}
                                    className="p-button-outlined text-xs" />
                            </span>
                            <span className='flex pt-4'>
                                { stock(item) }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    return (
        <div className='grid'>
            <div className='col-12'>
                <Steps model={items} />
            </div>
            <div className='col-12 md:col-8'>
                <OrderList value={cart} header="Productos Seleccionados" listStyle={{ maxHeight: '100rem' }} dataKey="id"
                    itemTemplate={itemTemplate} >
                </OrderList>
            </div>

            <div className='col mr-3'>
                <Card header={header}>
                    <h1>Total: {formatNumber(totalPrice())}</h1>
                    <Button onClick={() => clearCart()} label="limpiar Carrito" className="p-button-outlined p-button-rounded p-button-sm mr-4"></Button>
                    <Button label="Seguir comprando" className="p-button-outlined p-button-rounded p-button-sm" onClick={() => navegate('/product')}></Button>
                    {botonTerminarCompra}
                </Card>
            </div>
        </div>
    )
}

export default Cart;
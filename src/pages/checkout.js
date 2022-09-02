import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DB } from '../config/firebase';
import { useCart } from '../context/cart-context';
import { InputMask } from 'primereact/inputmask';
import { Card } from 'primereact/card';

const Checkout = () => {
    const navegate = useNavigate();
    const [comprador, setComprador] = useState({});
    const [orderId, setOrderId] = useState();
    const [loading, setLoading] = useState(false);
    const { cart, cantInCart, clearCart } = useCart();
    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        });
    }

    const finalizarCompra = (e) => {
        e.preventDefault();
        setLoading(true);
        if (cantInCart <= 0) {
            alert('El carro está vacio');
            setLoading(false);
            return;
        }

        if (Object.values(comprador).length !== 3) {
            alert('Todos los campos son Obligatorios');
            setLoading(false);
        } else {
            const salesCollection = collection(DB, "sales");
            addDoc(salesCollection, {
                comprador,
                items: cart,
                total: cantInCart,
                date: serverTimestamp()
            })
                .then((res) => {
                    setOrderId(res.id);
                    clearCart();
                })
                .catch((error) => { console.log(error) })
                .finally(() => setLoading(false));
        }
    }

    return (

        <>
            {!orderId
                ?
                <form onSubmit={finalizarCompra}>
                    <div className="formgrid grid p-fluid">
                        <div className='col-6'>
                            <div class="field col">
                                <label for="name">Nombre</label>
                                <InputText id="name" name="name" onChange={datosComprador} />
                            </div>
                            <div className="field col">
                                <label for="phone">Teléfono</label>
                                {/* <InputText id="phone" name="number" onChange={datosComprador} /> */}
                                <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999" onChange={datosComprador}></InputMask>
                            </div>
                            <div className="field col">
                                <label for="email">Correo</label>
                                <InputText id="email" name="email" onChange={datosComprador} />
                            </div>
                            <div className="field col">
                                <Button type="submit" label="Finalizar Compra" loading={loading} />
                            </div>
                        </div>
                    </div>
                </form>
                :
                /*                 <div>
                                    <h2>Muchas gracias por su compra!</h2>
                                    <h3>Su Identificador de orden es: {orderId}</h3>
                                    <Button label="Volver a comprar" onClick={() => navegate('/product')} />
                                </div> */

                <div className='grid justify-content-center'>
                    <div className='col-6 text-center'>
                        <Card style={{ width: 'auto' }}>
                            <i className="pi pi-heart p-text-secondary text-8xl text-teal-300 scalein animation-duration-3000 animation-iteration-infinite" />
                            <p className='text-3xl font-italic'> Muchas gracias por su compra !</p>
                            <p className='text-3xl font-italic'> Su Identificador de orden es:</p>
                            <p className='font-bold text-5xl shadow-8'>{orderId}</p>
                            <Button label="Descubrir Más Productos" className="p-button-outlined p-button-rounded p-button-lg" onClick={() => navegate('/product')}></Button>
                        </Card>
                    </div>
                </div>

            }</>
    );
};
export default Checkout;
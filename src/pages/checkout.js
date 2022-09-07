import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import '../assets/styles.css';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { DB } from '../config/firebase';
import { useCart } from '../context/cart-context';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';
import { InputMask } from 'primereact/inputmask';

const Checkout = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const navegate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState();
    const { cart, cantInCart, clearCart } = useCart();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            emailRepeat: '',
            phone: '',
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'El nombre es obligatorio.';
            }

            if (!data.email) {
                errors.email = 'El correo es obligatorio.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Dirección de correo electrónico no válida. E.j. example@email.com.';
            }

            if (!data.emailRepeat) {
                errors.emailRepeat = 'Debe confirmar el correo.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.emailRepeat)) {
                errors.emailRepeat = 'Dirección de correo electrónico no válida. E.j. example@email.com.';
            }
            else if (data.emailRepeat !== data.email) {
                errors.emailRepeat = 'El correo ingresado no coincide.';
            }

            if (!data.phone) {
                errors.phone = 'El teléfono es obligatorio.';
            }

            if (!data.accept) {
                errors.accept = 'Debe aceptar los términos y condiciones.';
            }

            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);

            if (cantInCart <= 0) {
                setShowMessage(true);
                return;
            } else {
                setLoading(true);
                const salesCollection = collection(DB, "sales");
                addDoc(salesCollection, {
                    formData,
                    items: cart,
                    total: cantInCart,
                    date: serverTimestamp()
                })
                    .then((res) => {
                        setOrderId(res.id);
                        clearCart();
                    })
                    .catch((error) => { console.log(error) })
                    .finally(() => {
                        setLoading(false);
                        formik.resetForm();
                    });
            }
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const terminoCompra = (
        <div className='grid justify-content-center'>
            <div className='col-6 text-center'>
                <Card style={{ width: 'auto' }}>
                    <i className="pi pi-heart p-text-secondary text-8xl text-teal-300 scalein animation-duration-3000 animation-iteration-infinite" />
                    <p className='text-3xl font-italic'> Muchas gracias por su compra !</p>
                    <p className='text-3xl font-italic'> Su Identificador de orden es:</p>
                    <p className='font-bold text-5xl shadow-8'>{orderId}</p>
                    <Button label="Descubrir Más Productos" className="p-button-outlined p-button-rounded p-button-lg" onClick={() => navegate('/product')}
                        disabled=""></Button>
                </Card>
            </div>
        </div>
    );

    const dialogFooter = <div className="flex justify-content-center"><Button label="OK" className="p-button-text" autoFocus onClick={() => setShowMessage(false)} /></div>;

    const formulario = (
        <div className="form-demo">
            <Dialog visible={showMessage} onHide={() => setShowMessage(false)} position="top" footer={dialogFooter} showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
                <div className="flex align-items-center flex-column pt-6 px-3">
                    <i className="pi pi-ban" style={{ fontSize: '5rem', color: 'var(--red-500)' }}></i>
                    <h2>El Carrito Esta Vacio!</h2>
                    <p style={{ lineHeight: 1.5, textIndent: '1rem' }}>
                        Su carro no tiene productos, debe agregar productos a su carrito para realizar una compra.
                    </p>
                </div>
            </Dialog>

            <div className="flex justify-content-center">
                <div className="card">
                    <h2 className="text-center">Datos Personales</h2>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Nombre*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Correo*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="emailRepeat" name="emailRepeat" value={formik.values.emailRepeat} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('emailRepeat') })} />
                                <label htmlFor="emailRepeat" className={classNames({ 'p-error': isFormFieldValid('emailRepeat') })}>Confirmar Correo*</label>
                            </span>
                            {getFormErrorMessage('emailRepeat')}
                        </div>
                        <div className="field">
                            <span className="p-float-label">
                                <InputMask id="phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} mask="(+999) 99999999" placeholder="(+999) 99999999" className={classNames({ 'p-invalid': isFormFieldValid('phone') })} autoFocus></InputMask>
                                <label htmlFor="phone" className={classNames({ 'p-error': isFormFieldValid('phone') })}>Teléfono*</label>
                            </span>
                            {getFormErrorMessage('phone')}
                        </div>
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>Estoy de acuerdo con los términos y condiciones*</label>
                        </div>

                        <Button type="submit" label="Comprar" className="mt-2" loading={loading} />
                    </form>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {!orderId ? formulario : terminoCompra}
        </>
    );
}

export default Checkout;
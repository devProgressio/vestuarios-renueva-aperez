import { useState } from 'react';
import { Button } from 'primereact/button';
import { Knob } from 'primereact/knob';

const ItemCount = ({ initial, stock, onAdd, size }) => {
    const [contador, setContador] = useState(initial);
    const [loading, setLoading] = useState(false);

    const onLoadingClick = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }


    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    };

    return (
        <>
            <div className="grid">
                <div className="col pt-4">
                    <Knob value={contador} min={initial} max={stock} size={70} readOnly />
                </div>
                <div className='col-10 mt-5'>
                    <Button disabled={contador <= 1} icon="pi pi-minus" onClick={restar} className="p-button-outlined text-xs mr-2" />
                    <Button disabled={contador >= stock} icon="pi pi-plus" onClick={sumar} className="p-button-outlined text-xs mr-3" />
                    <Button onClick={() => { onAdd(contador, size); onLoadingClick(); }} icon="pi pi-check" loading={loading}
                        label="Agregar al carrito" className='p-button-rounded p-button-outlined p-button-secondary'
                        style={{ width: '16.5em' }} />
                </div>
                <div className="col">

                </div>
            </div>
        </>
    );
}

export default ItemCount;
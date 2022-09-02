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

    const knobContador = (
        <Knob value={contador} min={initial} max={stock} size={100} readOnly />
    );

    return (
        <>
            <div className="field grid p-fluid">
                <div className="col text-left">
                    {knobContador}
                    <Button disabled={contador <= 1} icon="pi pi-minus" onClick={restar} className="p-button-outlined text-xs mr-2" />
                    <Button disabled={contador >= stock} icon="pi pi-plus" onClick={sumar} className="p-button-outlined text-xs" />
                </div>
            </div>
            <div className="field grid">
                <div className="col">
                    <Button onClick={() => { onAdd(contador, size); onLoadingClick(); }} icon="pi pi-check" loading={loading}
                        label="Agregar al carrito" className='p-button-rounded p-button-outlined p-button-secondary' />
                </div>
            </div>
        </>
    );
}

export default ItemCount;
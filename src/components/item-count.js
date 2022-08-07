import { useState } from 'react';
import { Button } from 'primereact/button';
import { Knob } from 'primereact/knob';

const ItemCount = ({ initial, stock, onAdd }) => {
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
        <Knob value={contador} min={initial} max={stock} size={80} readOnly="true" onChange={(e) => setContador(e)} />
    );

    return (
        <>
            <div className="field grid p-fluid">
                <div className="col col-fixed" style={{ width: 100 }}>
                    {knobContador}
                </div>
                <div className="col">
                    <Button disabled={contador <= 1} icon="pi pi-minus" onClick={restar} />
                    &nbsp;
                    <Button disabled={contador >= stock} icon="pi pi-plus" onClick={sumar} />
                </div>
            </div>
            <div className="field grid">
                <div className="col">
                    <Button onClick={() => {onAdd(contador); onLoadingClick();}} icon="pi pi-check" loading={loading} label="Agregar al carrito" className='p-button-rounded'/>
                </div>
            </div>
        </>
    );
}

export default ItemCount;
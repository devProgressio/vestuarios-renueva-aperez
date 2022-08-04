import { useState } from 'react';
import { Button } from 'primereact/button';
import { Knob } from 'primereact/knob';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [contador, setContador] = useState(initial);
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
        <Knob value={contador} min={initial} max={stock} size={90} readOnly="true" onChange={(e) => setContador(e)} />
    );

    return (
        <>
            <div>
                {knobContador}
                <Button icon="pi pi-minus" onClick={restar}/>
                &nbsp;
                <Button icon="pi pi-plus" onClick={sumar}/>
                &nbsp;
                &nbsp;
                <Button onClick={() => onAdd(contador)}>Agregar al carrito</Button>
            </div>
        </>
    );
}

export default ItemCount;
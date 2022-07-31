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
        <Knob value={contador} min={initial} max={stock} size={90} onChange={(e) => setContador(e)} />
    );

    return (
        <>
            <div>
                {knobContador}
                <Button onClick={sumar}>SUMAR</Button>
                &nbsp;
                <Button onClick={restar}>RESTAR</Button>
            </div>
            <br></br>
            <Button onClick={() => onAdd(contador)}>AGREGAR</Button>
        </>
    );
}

export default ItemCount;
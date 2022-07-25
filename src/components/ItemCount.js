import { useState } from 'react';
import { Button } from 'primereact/button';

const ItemCount = ({ initial, stock, onAdd }) => {

    const [contador, setContador] = useState(1);
    console.log('Me renderice');
    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <h2>{contador}</h2>
                <br></br>
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
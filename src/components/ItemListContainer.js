import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import ItemCount from './ItemCount';
import { useEffect, useState } from 'react';


const ItemListContainer = (props) => {
    console.log('Me renderice ItemListContainer');

    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} Item en el carrito`);
        setMensaje(`Agregaste ${cantidad} Item en el carrito`);
    }

    const [mensaje, setMensaje] = useState('');

    const productos = [
        {id: 1, name: 'Camisa1'},
        {id: 2, name: 'Camisa2'},
        {id: 3, name: 'Camisa3'},
        {id: 4, name: 'Camisa4'},
    ];

    const data = new Promise((resolve, reject) => {
        //acciones
        let condition = true;
        setTimeout(() => {
            if(condition) {
                resolve(productos);
            }else {
                reject('Salió mal');
            }
        }, 3000)
    });

    console.log(data);

    useEffect(() => {
        data
        .then((res) => {
            console.log('res', res);
        })
        .catch(()=> {
            setMensaje('Hubo un error');
        });
    }, []);

    return (
        <div>
            {mensaje && <p>{mensaje}</p>}  
            <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
            <Card title={props.title} subTitle={props.subTitle} style={{ width: '25em' }} footer={footer} header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>{props.detail}</p>
            </Card>
        </div>
    )
}

export default ItemListContainer;
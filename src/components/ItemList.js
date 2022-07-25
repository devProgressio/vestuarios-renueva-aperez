import { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ItemList = ({listaProductos}) => {
    return (
        <div>
            {listaProductos.map((producto)=> {
                {/* <Item></Item> */}
            })}
{/*             <Card title={props.title} subTitle={props.subTitle} style={{ width: '25em' }} footer={footer} header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>{props.detail}</p>
            </Card> */}
        </div>
    );
}

export default ItemList;
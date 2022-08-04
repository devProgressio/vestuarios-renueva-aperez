import ItemCount from "./item-count";
import { Panel } from 'primereact/panel';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';
import { Chip } from 'primereact/chip';
import { useState } from "react";

const ItemDetail = ({ producto }) => {
    const { name, description, price, img, hashtags, stock } = producto;
    const [val, setVal] = useState(null);
    const [mensaje, setMensaje] = useState(false);
    console.log("ITEM", producto);

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    const rating = (
        <div className="field grid">
            <div className="flex-none" style={{ width: 150 }}>
                <Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />
            </div>
            <div className="flex-none" style={{ width: 120 }}>
                <label for="firstname3">0 Valoraciones</label>
            </div>
            <div className="col">
                <label for="firstname3">0 Vendidos</label>
            </div>
        </div>
    );

    return (
        <Panel header="Detalle del Producto">
            <div className="grid">
                <div className="col-4">
                    <Image src={img} alt={img} width="500" preview />
                    <div>
                        {hashtags?.map((frase, index) => <Chip label={frase} className="mr-2 mb-2" key={index} htmlFor={`check${index}`}/>)}
                    </div>
                </div>
                <div className="col-8">
                    <div className="grid">
                        <div className="col-12">
                            <h1>{name}</h1>
                            {rating}
                            <hr className="opacity-40"/>
                            <div className="font-light"> {description}</div>
                            <br />
                            <div className="font-bold text-xl">CLP ${price}</div>
                        </div>
                        <div className="col-12">
                            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                            <div className="text-xs font-italic">Quedan aproximadamente {stock} en stock</div>

                            {mensaje && <p>{mensaje}</p>}
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
}

export default ItemDetail;
import ItemCount from "./ItemCount";
import { Panel } from 'primereact/panel';
import { Image } from 'primereact/image';

const ItemDetail = ({ producto }) => {

    const { id, name, description, price, img, hashtags, stock } = producto;

    console.log("ITEM", producto);
    return (
        /*             <Panel header="Detalle del Producto">
                        <h1>{name}</h1>
                        <p className="font-light"> {description}</p>
                        <p>Precio: {price}</p>
                        <img src={img} alt={img}></img>
                        {hashtags?.map((frase, index) => <p className="text-xs text-cyan-500 font-italic" key={index}>{frase}</p>)}
                        <ItemCount stock={stock} initial={1} />
                        <p className="text-xs font-italic">Quedan aproximadamente {stock} en stock</p>
                    </Panel> */
        <Panel header="Detalle del Producto">
            <div class="grid">
                <div class="col-4">
                    <Image src={img} alt={img} width="500" preview />
                    {hashtags?.map((frase, index) => <p className="text-xs text-cyan-500 font-italic" key={index}>{frase}</p>)}
                </div>
                <div class="col-8">
                    <div class="grid">
                        <div class="col-12">
                            <h1>{name}</h1>
                            <p className="font-light"> {description}</p>
                            <p className="font-bold text-xl">Precio: {price}</p>
                        </div>
                        <div class="col-12">
                            <ItemCount stock={stock} initial={1} />
                            <p className="text-xs font-italic">Quedan aproximadamente {stock} en stock</p>
                        </div>
                    </div>
                </div>
            </div>
        </Panel>
    );
}

export default ItemDetail;
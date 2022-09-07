import ItemCount from "./item-count";
import { Panel } from 'primereact/panel';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';
import { Chip } from 'primereact/chip';
import { useContext, useRef, useState } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { CART_CONTEXT } from "../context/cart-context";
import { formatNumber } from "../utils/format";
import { Dropdown } from 'primereact/dropdown';
import { SIZES } from "../utils/constants";

const ItemDetail = ({ product }) => {

    const { addProduct } = useContext(CART_CONTEXT);
    const { name, description, price, img, hashtags, stock } = product;
    const [val, setVal] = useState(null);
    const [terminar, setTerminar] = useState(false);
    const [size, setSize] = useState('XS');
    const toastBR = useRef(null);

    const onAdd = (quantity, size) => {
        console.log('onAdd: ', quantity);
        addProduct(product, quantity, size);
        setTerminar(true);
    }

    const rating = (
        <div className="field grid">
            <div className="flex-none pl-2" style={{ width: 150 }}>
                <Rating value={val} cancel={false} onChange={(e) => setVal(e.value)} />
            </div>
            <div className="flex-none" style={{ width: 120 }}>
                <label>0 Valoraciones</label>
            </div>
            <div className="col">
                <label>0 Vendidos</label>
            </div>
        </div>
    );

    const botonTerminarCompra = (
        <span>
            <Link to={`/checkout`}>
                <Button label="Terminar compra" className="p-button-outlined p-button-rounded p-button-sm"></Button>
            </Link>
        </span>
    )

    return (
        <div className="grid">
            <div className="col">
                <Toast ref={toastBR} position="bottom-right" />
                <Panel header="Detalle del Producto">
                    <div className="grid">
                        <div className="col-4">
                            <Image src={img} alt={img} width="500" preview />
                            <div>
                                {hashtags?.map((phrase, index) => <Chip label={phrase} className="mr-2 mb-2" key={index} htmlFor={`check${index}`} />)}
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="grid">
                                <div className="col-12">
                                    <span className="text-5xl font-bold text-teal-200">{name}</span>
                                    <hr className="opacity-40 mb-4" />
                                    {rating}
                                    <div className="font-light"> {description}</div>
                                    <hr className="opacity-40 mb-4" />
                                    <div className="font-bold text-5xl text-teal-200">$ {formatNumber(price)}</div>
                                    <span className="text-xs opacity-70">Hasta agotar stock</span>
                                </div>
                                <div className="col-12">
                                    <span className="col">
                                        <Dropdown value={size} options={SIZES} onChange={(e) => setSize(e.value)} placeholder="Talla" optionLabel="code" optionValue="code"
                                            style={{ width: '30em' }} inputId="size" />
                                    </span>
                                    <span className="mr-2">
                                        <ItemCount stock={stock} initial={1} onAdd={onAdd} size={size} />
                                    </span>

                                    <div className="text-xs font-italic opacity-70 mb-6">Quedan aproximadamente {stock} en stock</div>
                                </div>
                                <div className="col">
                                    <Link to={`/cart`}>
                                        <Button label="Ir al Carrito" className="p-button-outlined p-button-rounded p-button-sm mr-2"></Button>
                                    </Link>
                                    {terminar ? botonTerminarCompra : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
            </div>
        </div>
    );
}

export default ItemDetail;
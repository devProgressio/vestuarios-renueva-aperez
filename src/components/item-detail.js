import ItemCount from "./item-count";
import { Panel } from 'primereact/panel';
import { Image } from 'primereact/image';
import { Rating } from 'primereact/rating';
import { Chip } from 'primereact/chip';
import { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { useCartContext } from "../context/cart-context";

const ItemDetail = ({ product }) => {

    const {addProduct} = useCartContext();

    const { name, description, price, img, hashtags, stock } = product;
    const [val, setVal] = useState(null);
    // const [message, setMessage] = useState(false);

    const toastBR = useRef(null);

/*     const showBottomRight = (mens) => {
        toastBR.current.show({severity:'success', summary: 'Se agregó producto al carro', detail:`${mens}`, life: 3000});
    } */

    const onAdd = (quality) => {
        console.log('onAdd: ', quality);
        //setMessage(`Se agregó la cantidad de ${quality} del producto ${name} a su carro de compras`);
        addProduct(product, quality);
    }

    const rating = (
        <div className="field grid">
            <div className="flex-none" style={{ width: 150 }}>
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
                                    <h1>{name}</h1>
                                    {rating}
                                    <hr className="opacity-40" />
                                    <div className="font-light"> {description}</div>
                                    <br />
                                    <div className="font-bold text-xl">CLP ${price}</div>
                                </div>
                                <div className="col-12">
                                    <ItemCount stock={stock} initial={1} onAdd={onAdd} />
                                    <div className="text-xs font-italic">Quedan aproximadamente {stock} en stock</div>
                                    {/* {message && <p>{message}</p>} */}
                                    <br></br>
                                    <Link to={`/cart`}>
                                        <Button label="Ir al Carrito" className="p-button-outlined p-button-rounded p-button-sm"></Button>
                                    </Link>
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
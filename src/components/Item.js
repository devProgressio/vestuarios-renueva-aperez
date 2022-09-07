import { Card } from 'primereact/card';
import { useNavigate } from "react-router-dom";
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { formatNumber } from '../utils/format';

const Item = ({ product }) => {
    const { id, img, name, price, stock } = product;
    const navegate = useNavigate();

    const header = (
        <Image src={img} alt={img} style={{ width: '100%' }} preview onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <Button label="Ver producto" icon="pi pi-eye" onClick={() => navegate(`/item/${id}`)}
            className="p-button-outlined text-xs" />
    );

    return (
        <div className='field col p-fluid'>
            <Card title={name} style={{ width: '20em', maxWidth: '20em', marginBottom: '2em' }} header={header} footer={footer}>
                <p className="font-bold text-xl">$ {formatNumber(price)}</p>
                <p className="text-xs font-italic">Quedan aproximadamente {stock} en stock</p>
            </Card>
        </div>
    )
}

export default Item;
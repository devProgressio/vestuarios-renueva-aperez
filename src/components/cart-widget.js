import { Badge } from 'primereact/badge';

const CartWidget = () => {

    return (
        <>
        {/* <Button type="button" icon="pi pi-shopping-cart" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" /> */}
        {/* <Button type="button" label="Tú Carro :D!" icon="pi pi-shopping-cart" className="p-button-warning"><Badge value="8" severity="danger" ></Badge></Button> */}
        <i className="pi pi-shopping-cart mr-4 p-text-secondary p-overlay-badge" style={{ fontSize: '2rem' }}><Badge value="2" ></Badge></i>
        </>
    ); 
}

export default CartWidget;
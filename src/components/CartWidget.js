import { Button } from 'primereact/button';

const CartWidget = () => {

    return (
        <Button type="button" icon="pi pi-shopping-cart" className="p-button-warning" badge="8" badgeClassName="p-badge-danger" />
    ); 
}

export default CartWidget;
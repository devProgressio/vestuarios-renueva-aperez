import { Menubar } from 'primereact/menubar';
import CartWidget from './cart-widget';
import images from '../assets/images';

const MenuNavBar = (props) => {
    console.log('Me renderice NAVBAR');
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home',
            url: '/'
        },
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-shopping-bag',
            items: [
                {   label: 'Categorías', icon: 'pi pi-fw pi-tags',
                    url: '/product',
                    items: [
                        { label: 'Mujer', url: '/product/mujer', },
                        { label: 'Hombre', url: '/product/hombre', },
                        { label: 'Sin Producto Ejemplo', url: '/product/none-example', },
                        ]
                }
            ]
        },
        {
            label: 'Cart',
            icon: 'pi pi-fw pi-pencil',
            url: '/cart'
        },
        {
            label: 'Contacto',
            icon: 'pi pi-fw pi-user',
            url: '/contact'
        }
    ];
    
    const start = <img src={images.logo1} alt={images.logo1} height="50" className="mr-2"></img>;
    const end = <CartWidget />;

    return (
        <div>
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}

export default MenuNavBar;
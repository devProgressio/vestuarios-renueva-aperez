import { Menubar } from 'primereact/menubar';
import CartWidget from './cart-widget';
import images from '../assets/images';
import { useNavigate } from 'react-router-dom';

const MenuNavBar = (props) => {
    console.log('Me rendericé NAVBAR');
    const navigate = useNavigate();
    const items = [
        {
            label: 'Inicio',
            icon: 'pi pi-fw pi-home',
            command: (event) => {
                navigate('/');
            }
        },
        {
            label: 'Productos',
            icon: 'pi pi-fw pi-shopping-bag',
            items: [
                {   label: 'Categorías', icon: 'pi pi-fw pi-tags',
                    command: (event) => {
                        navigate('/product');
                    },
                    items: [
                        { label: 'Mujer', command: (event) => {
                            navigate('/product/mujer');
                        } },
                        { label: 'Hombre', command: (event) => {
                            navigate('/product/hombre');
                        } },
                        { label: 'Sin Producto Ejemplo', command: (event) => {
                            navigate('/product/none-example');
                        } },
                        ]
                }
            ]
        },
        {
            label: 'Contacto',
            icon: 'pi pi-fw pi-user',
            command: (event) => {
                navigate('/contact');
            }
        }
    ];
    
    const start = <img src={images.logo1} alt={images.logo1} height="70" className="mr-2"></img>;
    const end = <CartWidget />;

    return (
        <div>
            <Menubar model={items} start={start} end={end}  className="border-noround surface-0 bg-teal-50"/>
            <br />
        </div>
    );
}

export default MenuNavBar;
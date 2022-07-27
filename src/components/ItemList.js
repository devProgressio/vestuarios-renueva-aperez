import Item from '../components/Item';

const ItemList = ({ listaProductos }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
            {listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)}
        </div>
    );
}

export default ItemList;
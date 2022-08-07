import Item from './item';

const ItemList = ({ listaProductos }) => {
    
    if (listaProductos && listaProductos.length > 0) {
        /* style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}
        justify-content-center flex flex-wrap align-content-center */
        return (
            <div className='grid formgrid'>
                {listaProductos.map((producto) => <Item key={producto.id} producto={producto} />)}
            </div>
        );
    } else {
        return (
            <div>
                <h1>NO EXISTE LISTA DE PRODUCTOS</h1>
            </div>
        ); 
    }
    

}

export default ItemList;
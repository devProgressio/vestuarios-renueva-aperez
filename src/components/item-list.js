import Item from './item';

const ItemList = ({ listaProductos }) => {

    if (listaProductos && listaProductos.length > 0) {
        return (
            <div className='grid formgrid pl-5'>
                {listaProductos.map((product) => <Item key={product.id} product={product} />)}
            </div>
        );
    } else {
        return (
            <div className='text-center'>
                <h1>NO EXISTE LISTA DE PRODUCTOS</h1>
            </div>
        );
    }


}

export default ItemList;
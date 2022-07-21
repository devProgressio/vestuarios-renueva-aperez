import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const ItemListContainer = (props) => {

    const header = (
        <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
    );
    const footer = (
        <span>
            <Button label="Save" icon="pi pi-check" />
            <Button label="Cancel" icon="pi pi-times" className="p-button-secondary ml-2" />
        </span>
    );

    return (
        <div>
            <Card title={props.title} subTitle={props.subTitle} style={{ width: '25em' }} footer={footer} header={header}>
                <p className="m-0" style={{lineHeight: '1.5'}}>{props.detail}</p>
            </Card>
        </div>
    )
}

export default ItemListContainer;
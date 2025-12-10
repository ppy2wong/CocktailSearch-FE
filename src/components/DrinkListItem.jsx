import ListGroup from 'react-bootstrap/ListGroup';

export default function DrinkListItem( { handleSelectDrink, drink, isActive }) {
    return (
        <>
            <ListGroup.Item onClick={handleSelectDrink} active={isActive}>{drink.strDrink}</ListGroup.Item> 
        </>
    );

}
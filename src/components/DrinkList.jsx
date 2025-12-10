import DrinkRecipe from './DrinkRecipe';
import DrinkListItem from './DrinkListItem';
import { useDrinkSearchContext } from '../contexts/DrinkSearchContext.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
export default function DrinkList( { drinks }) {

      const { recipe, selectedDrinkId, handleSelectDrink } = useDrinkSearchContext();


    return (
        (drinks !== null && drinks.length > 0 && 
            <Container fluid>
                <Row>
                    <Col lg={3}>
                        <ListGroup>
                        {drinks.map( 
                            (num, idx, drinkArray) => 
                                <DrinkListItem 
                                    key={drinkArray[idx].idDrink} 
                                    handleSelectDrink={() => handleSelectDrink(drinkArray[idx].idDrink)} 
                                    drink={drinkArray[idx]} 
                                    isActive={selectedDrinkId === drinkArray[idx].idDrink}/>
                            
                        ) 
                        }
                        </ListGroup>
                    </Col>
                    <Col lg={9}>                       
                        <DrinkRecipe recipe={recipe} />
                    </Col>
                </Row>
            </Container>
        )
    );

}
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

export default function DrinkRecipe( { recipe }) {

    return (
        (recipe != null && 
            (<Card className="recipe">
                <Card.Header>
                    {recipe.strDrink}
                </Card.Header>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{recipe.strMeasure1} {recipe.strIngredient1}</ListGroup.Item>
                    <ListGroup.Item>{recipe.strMeasure2} {recipe.strIngredient2}</ListGroup.Item>
                    <ListGroup.Item>{recipe.strMeasure3} {recipe.strIngredient3}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    {recipe.strInstructions}
                </Card.Body>
            </Card>)
        ) ||
        (recipe == null && (
            <Card>
                <Card.Header>
                    Choose a cocktail
                </Card.Header>
                <Card.Body>
                    Choose any cocktail to checkout the recipe.
                </Card.Body>
            </Card>
        ))
    );

}
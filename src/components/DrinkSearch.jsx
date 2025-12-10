import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { useDrinkSearchContext } from '../contexts/DrinkSearchContext.jsx';

export default function DrinkSearch() {

      const { handleSelectSearchBy, handleChangeSearchString, handleSearchButtonClick } = useDrinkSearchContext();

      const submitForm = (e) => {
        e.preventDefault();
        console.log(e)

        handleSearchButtonClick();
      }

    
    return (
        <Container fluid>
            <Form className="form-container" onSubmit={submitForm}>
                <Stack direction="horizontal" gap={3}>
                    <Form.Group className="search-by" controlId="searchBy">
                        <Form.Select onChange={ (e) => handleSelectSearchBy(e.target.value) } aria-label="Default select example">
                            <option>Pick search criteria</option>
                            <option value="1">By cocktail name</option>
                            <option value="2">By ingredient</option>
                        </Form.Select> 
                    </Form.Group>

                    <Form.Group className="search-string" controlId="searchString" md="auto">
                        <Form.Control lg="5" onChange={ (e) => handleChangeSearchString(e.target.value) } type="text" placeholder="Enter cocktail type" />
                    </Form.Group>

                    <Button className="find-cocktails" variant="primary" type="submit">
                        Find cocktails
                    </Button>
                </Stack>

            </Form>
        </Container>
    );
}
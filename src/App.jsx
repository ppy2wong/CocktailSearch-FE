import './App.css'
import DrinkSearch from './components/DrinkSearch.jsx'
import  DrinkList  from './components/DrinkList.jsx';
import { useDrinkSearchContext } from './contexts/DrinkSearchContext.jsx';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';


function App() {
  const {drinks } = useDrinkSearchContext();



  return (
      
      <Container className="fugly">
        <Stack gap={3}>
          <h1 className="hero">Cocktail Finder!</h1>
          <DrinkSearch></DrinkSearch>
          <DrinkList drinks={drinks} />
        </Stack>
      </Container>
  )
}

export default App

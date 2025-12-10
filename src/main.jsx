import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DrinkSearchProvider,} from './contexts/DrinkSearchContext.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
        <DrinkSearchProvider>
          <App />
          </DrinkSearchProvider>
  </StrictMode>,
)

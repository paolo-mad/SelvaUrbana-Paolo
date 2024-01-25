import Create from './pages/CreatePage'
import Details from './pages/DetailsPage'
import Products from './pages/ProductsPage'
import Update from './pages/UpdatePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

 
function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path='/' element={ <Products/>} />
          <Route exact path='/create' element={ <Create/>}/>
          <Route exact path='/details/:id' element={ <Details/> }/>
          <Route  exact path='/edit/:id' element={ <Update/> }/>
        </Routes>
      </>    
    </Router>
  )
}

export default App

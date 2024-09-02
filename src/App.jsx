import {BrowserRouter as Router, Routes, Route} from 'react-route-dom'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import Sobre from './routes/Sobre'
import Contato from './routes/Contato'
import Footer from './components/Footer'
import Nav from './components/Nav'
function App() {
 

  return (
    <>
    <Nav/>
    <routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/Produtos' element={<Produtos/>}/>
      <Route path='/Contato' element={<Contato/>}/>
      <Route path='/Sobre' element={<Sobre/>}/>
      
    </routes>




    <Footer/>
      
    </>
  )
}

export default App

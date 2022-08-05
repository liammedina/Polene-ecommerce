import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/Index';
import Cart from './components/Cart/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Boutique from './components/pages/Boutique';
import Contacto from './components/pages/Contacto';


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<ItemListContainer /> } />
        <Route path='/category/:name' element={<ItemListContainer /> } />
        <Route path='/cart' element={<Cart /> } />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/Boutique' element={<Boutique />} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;

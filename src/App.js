import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ProductsItem } from './components/ProductsItem';
import { Basket } from './pages/Basket';
import { Categories } from './pages/Categories';
import { Home } from './pages/Home';
import { OnlineShop } from './pages/OnlineShop';
import { OnlineShopItem } from './pages/OnlineShopItem';

function App() {
  return (
    <div className='container-fluid p-0 '>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/products' element={<Categories />} />
          <Route path='/products/:id' element={<ProductsItem />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/online-shop' element={<OnlineShop />} />
          <Route path='/online-shop/:id' element={<OnlineShopItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;

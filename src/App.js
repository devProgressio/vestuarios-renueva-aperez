import "primereact/resources/themes/lara-light-teal/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavBar from './components/navbar';
import ItemListContainer from "./components/item-list-container";
import ItemDetailContainer from "./components/item-detail-container";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Cart from "./pages/cart";
import CartProvider from "./context/cart-context";
import Checkout from "./pages/checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        {/* basename='/v-renueva' */}
        <MenuNavBar />
        <Routes>
          <Route path='/product/:category' element={<ItemListContainer greeting='MESSAGE' />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />

          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ItemListContainer />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

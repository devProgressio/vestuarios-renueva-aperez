import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavBar from './components/navbar';
import ItemListContainer from "./components/item-list-container";
import ItemDetailContainer from "./components/item-detail-container";
import Cart from "./components/cart";
import Contact from "./pages/conctact";
import Home from "./pages/home";


function App() {
  return (
    <BrowserRouter>
      <MenuNavBar />
      <br />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='MENSAJE' />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />

        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

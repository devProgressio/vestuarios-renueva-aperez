import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Contact from "./components/Conctact";
import Home from "./components/Home";


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

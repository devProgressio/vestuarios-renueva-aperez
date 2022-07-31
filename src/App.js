import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuNavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <MenuNavBar />
      <br />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting='MENSAJE' />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="*" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

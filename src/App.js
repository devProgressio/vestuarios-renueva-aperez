import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import './App.css';
import MenuNavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
    <MenuNavBar />
    <br></br>
    <ItemListContainer />
    </>
  );
}

export default App;

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import './App.css';
import MenuNavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";

function App() {

  const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserun t quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!';
  return (
    <>
    <MenuNavBar />
    <br></br>
    <ItemListContainer title="Título del card" subTitle="Subtitulo de la card" detail={lorem}/>
    </>
  );
}

export default App;

import "./assets/css/App.css";
//IMPORTAR COMPONENTES
import Libros from "./componentes/Book";
export default function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="imagen"></div>
      </div>
      <Libros />

      <div className="footer">
        <h1>Repartido 2, para Bootcamp Matea 2022, Rony Silva</h1>
      </div>
    </div>
  );
}

import Book from "./MiComponente";
import "../assets/css/App.css";
import React, { useState } from "react";
import { libreria } from "./libros";

const Libros = () => {
  const [libros, setLibros] = useState(libreria);
  //FUNCION PARA MOSTRAR TODO EL CONTENIDO DE LIBRERIA
  const mostrarTodo = () => {
    setLibros(libreria);
  };

  /*DENTRO DE MI DIV CON CLASE BUTTONS, TENGO CADA BOTON CON EVENTO onClick, EN EL CUAL CONTIENE UNA FUNCION DE
  FILTRADO Y MUESTRO EL NUEVO VALOR DE MI ARRAY (setLibros(bookFilter)).

  POR DEBAJO EN MI DIV 'Tabla' CONTENGO EL MAPEO DE MI ARRAY DENTRO DE UN FORMATO DE TABLA, PARA QUE AL RENDERIZAR
  QUEDE TODO EN ESE FORMATO
*/
  return (
    <>
      <div className="buttons">
        <button
          onClick={() => {
            const bookFilter = libreria.filter((info) => {
              return info.genero === "infantil";
            });
            setLibros(bookFilter);
          }}
        >
          {" "}
          Infantil
        </button>
        <button
          onClick={() => {
            const bookFilter = libreria.filter((info) => {
              return info.genero === "drama";
            });
            setLibros(bookFilter);
          }}
        >
          Drama
        </button>
        <button
          onClick={() => {
            const bookFilter = libreria.filter((info) => {
              return info.genero === "fantasia";
            });
            setLibros(bookFilter);
          }}
        >
          {" "}
          Fantasia
        </button>

        <button onClick={mostrarTodo}> Todos</button>
      </div>

      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Autor</th>
              <th>Numero de Paginas</th>
              <th>Genero</th>
            </tr>
          </thead>

          <tbody>
            {libros.map((libro) => {
              return (
                <Book
                  key={libro.id}
                  titulo={libro.titulo}
                  autor={libro.autor}
                  numPaginas={libro.numPaginas}
                  genero={libro.genero}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Libros;

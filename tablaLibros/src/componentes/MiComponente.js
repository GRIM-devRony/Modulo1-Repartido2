import React from "react";
//COMPONENTE QUE LE PASO LAS PROPS
const Book = (props) => {
  return (
    <tr>
      <td>{props.titulo}</td>
      <td>{props.autor}</td>
      <td>{props.numPaginas}</td>
      <td>{props.genero}</td>
    </tr>
  );
};

export default Book;

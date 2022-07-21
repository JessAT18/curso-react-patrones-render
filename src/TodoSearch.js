import React from "react";
import './TodoSearch.css';

function TodoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };
  return(
    <input 
      className="TodoSearch"
      placeholder="Salvar el semestre en 3 dias y contando..."
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
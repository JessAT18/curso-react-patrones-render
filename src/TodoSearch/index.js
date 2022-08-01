import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    //console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  return(
    <input 
      className="TodoSearch"
      placeholder="Salvar el semestre en 3 dias y contando..."
      value = {searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
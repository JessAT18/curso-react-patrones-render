import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {
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
      disabled={loading}
    />
  );
}

export { TodoSearch };
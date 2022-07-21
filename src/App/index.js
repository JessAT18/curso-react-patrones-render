import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
// ];

// Custom React Hooks
function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItem(parsedItem);
  
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });
  
  const saveItem = (newItem) => {
    try {      
      const stringyfiedItems = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringyfiedItems);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };
}

function App() {
  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    //Funcion para eliminar desde la posicion indicada la cantidad de elementos que se desean eliminar.
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  // console.log('Render antes del use effect');

  // React.useEffect(() => {
  //   //Justo antes de hacer el render se ejecutan los efectos
  //   console.log('Use effect');
  // }, 
  // [totalTodos]  //Si borramos un todo o creamos uno nuevo, deberia ejecutarse el useEffect
  // ); //[] Definir cuando ejecutar este use effect, si le mandamos un arreglo vacio se ejecutará solo una vez

  // console.log('Luego del use effect');

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos = {totalTodos}
      completedTodos = {completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

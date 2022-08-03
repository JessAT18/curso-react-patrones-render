import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

function App(props) {
  return (
    <h1>{props.saludo}, {props.nombre}!</h1>
  );
}

// function withWhatever(WrappedComponent) {
//   return function ComponenteDeVerdad(props) {
//     return (
//       <React.Fragment>
//         <WrappedComponent {...props} />
//         <p>No entiendo nada :(</p>
//       </React.Fragment>
//     );
//   }
// }

function withSaludo(WrappedComponent) { //function withSaludo(WrappedComponent) 
  return function WrappedComponentWithSaludo(saludo) {//function WrappedComponentWithSaludo(saludo)
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo} />
          <p>No entiendo nada :( 💀</p>
        </React.Fragment>
      );
    }
  }
}

// const AppWithWhatever = withWhatever(App);
const AppWithSaludo = withSaludo(App)("Buenas");
//const AppWithSaludo = withSaludo("Buenas")(App);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App saludo="Buenas" nombre="Jess"/>
  // <AppWithWhatever saludo="Hey" nombre="Jess"/>
  <AppWithSaludo nombre="Jess"/>
);
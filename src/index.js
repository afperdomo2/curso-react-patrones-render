import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App';
//import './index.css';

function App(props) {
  return (
    <h1>
      ¡{props.saludo}, {props.nombre}!
    </h1>
  );
}

function withSaludo(WrappedComponent) {
  return function WrapperComponentWithSaludo(saludo) {
    return function ComponenteDeVerdad(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo} />
          <p>Estamos acompañando al WrappedComponent</p>
        </>
      );
    };
  };
}

const AppWithSaludo = withSaludo(App)("Hooooola");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppWithSaludo nombre="Pepito Pérez" />);

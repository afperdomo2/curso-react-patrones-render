import React from "react";
import { TodoProvider } from "./Context/todo";
import { AppUI } from "./appUI";

function App() {
  const [state, setState] = React.useState("Estado compartido");

  return (
    <>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </>
  );
}

function TodoHeader({ children }) {
  return <header>{children}</header>;
}

function TodoList({ children }) {
  return <section>{children}</section>;
}

function TodoCounter() {
  return <h1>0 de 2 completadas</h1>;
}

function TodoSearch() {
  return <input placeholder="Cebolla" />;
}

function TodoItem({ state }) {
  return (
    <>
      <input type="checkbox" />
      <span>Todo Item - {state}</span>
    </>
  );
}

// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;

import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-items-store";

function App() {
  return (
    <>
      <TodoItemsContextProvider>
        <div className="container">
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <div className="items-container container">
            <TodoItems />
          </div>
        </div>
      </TodoItemsContextProvider>
    </>
  );
}

export default App;

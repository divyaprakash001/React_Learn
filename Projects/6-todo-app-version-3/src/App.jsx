import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };

  const handleDeleteButton = (todoItemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <>
      <div className="container">
        <AppName />
        <AddTodo handleNewItem={onNewItem} />
        <WelcomeMessage todoItems={todoItems} />
        <div className="items-container container">
          <TodoItems
            todoItems={todoItems}
            handleDeleteButton={handleDeleteButton}
          />
        </div>
      </div>
    </>
  );
}

export default App;

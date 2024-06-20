import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;
  return (
    <>
      {todoItems.length === 0 && (
        <p className="text-center h1">Welcome to Todo App</p>
      )}
    </>
  );
}

export default WelcomeMessage;

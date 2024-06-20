import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

import TodoItem from "./TodoItem";

function TodoItems() {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item["name"]}
          todoDate={item["dueDate"]}
          todoName={item["name"]}
        />
      ))}
    </>
  );
}

export default TodoItems;

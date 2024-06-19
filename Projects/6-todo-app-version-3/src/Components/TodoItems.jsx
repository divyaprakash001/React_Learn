import TodoItem from "./TodoItem";

function TodoItems({ todoItems, handleDeleteButton }) {
  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item["name"]}
          todoDate={item["dueDate"]}
          todoName={item["name"]}
          handleDeleteButton={handleDeleteButton}
        />
      ))}
    </>
  );
}

export default TodoItems;

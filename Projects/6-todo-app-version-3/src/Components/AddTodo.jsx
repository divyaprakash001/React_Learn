import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdAdd } from "react-icons/md";

function AddTodo({ handleNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    // console.log(`todoname :: ${todoName} and due date :: ${dueDate}`);
    handleNewItem(todoName, dueDate);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <>
      <div className="container mb-3">
        <form className="row dp-row" onSubmit={handleAddButton}>
          <div className="col-6">
            <input
              ref={todoNameElement}
              className={`${styles["todoInput"]}`}
              type="text"
              placeholder="Enter Your Task"
            />
          </div>
          <div className="col-4">
            <input
              ref={dueDateElement}
              className={`${styles["todoInput"]}`}
              type="date"
            />
          </div>
          <div className="col-2">
            <button className="btn btn-success dp-button" type="submit">
              <MdAdd />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddTodo;

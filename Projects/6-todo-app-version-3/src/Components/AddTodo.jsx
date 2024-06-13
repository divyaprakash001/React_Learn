import { useState } from "react";
import styles from "./AddTodo.module.css";
function AddTodo({ handleNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoName = (event) => {
    setTodoName(event.target.value)
  }

  const handleDueDate = (event) => {
    setDueDate(event.target.value)
  }

  const handleAddButton = () => {
    handleNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    <>
      <div className="container mb-3">
        <div className="row dp-row">
          <div className="col-6">
            <input className={`${styles["todoInput"]}`} type="text" value={todoName}  placeholder="Enter Your Task" onChange={handleTodoName} />
          </div>
          <div className="col-4">
            <input  className={`${styles["todoInput"]}`} type="date" value={dueDate} onChange={handleDueDate} />
          </div>
          <div className="col-2">
            <button className="btn btn-success dp-button" type="button" onClick={() => { handleAddButton(todoName, dueDate) }}>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTodo;
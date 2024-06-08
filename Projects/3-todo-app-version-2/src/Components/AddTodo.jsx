import styles from "./AddTodo.module.css";
function AddTodo() {
  return (
    <>
      <div className="container mb-3">
        <div className="row dp-row">
          <div className="col-6"><input className={`${styles["todoInput"]}`} type="text" placeholder="Enter Your Task" /></div>
          <div className="col-4"><input className={`${styles["todoInput"]}`} type="date" /></div>
          <div className="col-2"><button className="btn btn-success dp-button" type="button">Add</button></div>
        </div>
      </div>
    </>
  )
}

export default AddTodo;
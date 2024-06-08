function TodoItem({ todoName, todoDate }) {

  return (
    // <div className="container">
      <div className="row dp-row">
        <div className="col-6"><h3>{todoName}</h3></div>
        <div className="col-4"><h3>{todoDate}</h3></div>
        <div className="col-2">
          <button className="btn btn-danger dp-button" type="button">Delete</button>
        </div>
      </div>
    // </div>
  )
}

export default TodoItem;
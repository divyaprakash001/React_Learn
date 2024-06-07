function AddTodo() {
  return (
    <>
      <div className="container text-center">
        <div className="row dp-row">
          <div className="col-6"><input type="text" placeholder="Enter Your Task" /></div>
          <div className="col-4"><input type="date" /></div>
          <div className="col-2"><button className="btn btn-success dp-button" type="button">Add</button></div>
        </div>
      </div>
    </>
  )
}

export default AddTodo;
function Container(props){

  return (
    <>
      <div className="container text-center bg-dark text-white p-3">
        {props.children}
      </div>
    </>
  )
}

export default Container;
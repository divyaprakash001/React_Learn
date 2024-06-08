const Item = ({foodItem}) => {  //getting arguments in props
  
  return (
    <>
      <li  className="list-group-item">
        {foodItem}
      </li>
    </>
  )

}

export default Item;
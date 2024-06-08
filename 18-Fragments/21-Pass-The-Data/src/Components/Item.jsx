function Item({ foodItem }) {
  return (
    <>
      <li key={foodItem} className='list-group-item bg-warning fw-bold'>{foodItem}</li>
    </>
  )
}

export default Item;
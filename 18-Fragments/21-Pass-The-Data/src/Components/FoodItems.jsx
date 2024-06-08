import Item from "./Item";

function FoodItems({ items }) {
  return (
    <>
      <div className="container">
        <ul className='list-group text-center'>
          {items.map(item => (
           <Item key={item} foodItem={item} />
          ))}

        </ul>
      </div>
    </>
  )
}

export default FoodItems;
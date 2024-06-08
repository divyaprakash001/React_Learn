import Item from "./Item";

function FoodItems( {items} ) {

  // let foodItems = ['Dal','Salad','Green vegs','Roti','Ghee','Chana']
  return (
    <>
      <ul className="list-group text-center">
        {items.map(item => (
          <Item key={item} foodItem = {item} />  // passes arguments 
        ))}
      </ul>
    </>
  )
}

export default FoodItems;
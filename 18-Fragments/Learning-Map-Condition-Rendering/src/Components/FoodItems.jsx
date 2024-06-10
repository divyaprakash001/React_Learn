import Item from "./Item";

function FoodItems({ items }) {

  const handleBuyButton = (event,item) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.className);
    console.log(`${item} is being bought.`)
  }

  // let foodItems = ['Dal','Salad','Green vegs','Roti','Ghee','Chana']
  return (
    <>
      <ul className="list-group">
        {items.map(item => (
          <Item key={item} foodItem={item} handleBuyButton={handleBuyButton(event,item)} />  // passes arguments 
        ))}
      </ul>
    </>
  )
}

export default FoodItems;
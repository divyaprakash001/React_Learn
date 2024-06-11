import { useState } from "react";
import Item from "./Item";

function FoodItems({ items }) {

  let [activeItems, setActiveItems] = useState([]);

  const handleBuyButton = (item,event) => {
    console.log(event);
    let newItems = [...activeItems, item]
    setActiveItems(newItems)
    console.log(`${item} is being bought.`)

  }

  // let foodItems = ['Dal','Salad','Green vegs','Roti','Ghee','Chana']
  return (
    <>
      <ul className="list-group">
        {items.map(item => (
          <Item key={item}
            foodItem={item}
            bought={activeItems.includes(item)}
            handleBuyButton={(event) => { handleBuyButton(item,event) }} />  // passes arguments 
        ))}
      </ul>
    </>
  )
}

export default FoodItems;
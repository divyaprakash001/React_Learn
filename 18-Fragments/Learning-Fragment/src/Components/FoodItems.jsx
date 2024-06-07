function FoodItems(){
  // let foodItems = [];
  let foodItems = ['dal', 'green vegs', 'roti', 'salad', 'milk', 'ghee'];
  return (
    <>
      <ul className='list-group'>
          {foodItems.map(item => <li key={item} className='list-group-item'>{item}</li>)}
        </ul>
    </>
  )
}

export default FoodItems;
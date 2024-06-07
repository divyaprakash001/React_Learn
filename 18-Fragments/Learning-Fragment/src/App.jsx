import './App.css'
import FoodItems from './Components/FoodItems';
import FoodTitle from './Components/FoodTitle';

function App() {
  // let foodItems = [];
  let foodItems = ['dal', 'green vegs', 'roti', 'salad', 'milk', 'ghee'];

  // if(foodItems.length == 0){
  //   return <h3>I am still hungry.</h3>
  // }  // if-else

  // using ternary operator
  // let emptyMessage = foodItems.length == 0 ? <h3>I am still hungry.</h3> : null;

  return (
    <>
      <div className="container">
      <FoodTitle />
        {/* {foodItems.length == 0 ? <h3>I am still hungry.</h3> : null} */}
        {/* {emptyMessage} */}
        {/* logical operator */}
        {foodItems.length == 0 && <h3>I am still hungry.</h3>}
        <FoodItems />
      </div>
    </>
  )
}

export default App

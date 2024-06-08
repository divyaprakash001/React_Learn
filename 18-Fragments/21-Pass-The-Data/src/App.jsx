import './App.css'
import FoodTitle from './Components/FoodTitle';
import ErrorMessage from './Components/ErrorMessage';
import FoodItems from './Components/FoodItems';

function App() {
  let foodItems = ['Dal', 'Green Vegs', 'Salad', 'Ghee', 'Chapati', 'Dry Fruits', 'Seasonal Fruits']
  // let foodItems = []
  return (
    <>

      <div className="container">
        <FoodTitle />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </div>



    </>
  )
}

export default App

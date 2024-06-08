import './App.css'
import ErrorMessage from './Components/ErrorMessage'
import FoodItems from './Components/FoodItems'
import FoodTitle from './Components/FoodTitle'

function App() {

  let foodItems = ['Dal', 'Salad', 'Green vegs', 'Roti', 'Ghee', 'Chana'];
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

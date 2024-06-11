import { useState } from 'react';
import './App.css'
import Container from './Components/Container';
import ErrorMessage from './Components/ErrorMessage'
import FoodInput from './Components/FoodInput';
import FoodItems from './Components/FoodItems'
import FoodTitle from './Components/FoodTitle'

function App() {

  // let foodItems = ['Dal', 'Salad', 'Green vegs', 'Roti', 'Ghee', 'Chana'];
  // let foodItems = []

  // let textStateArr = useState("Food Items entered by user.");  // useState returns an array with two value
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // let [textToShow, setTextState] = useState();
  // let [foodItems, setFoodItems] = useState(['Dal', 'Salad', 'Green vegs']);
  let [foodItems, setFoodItems] = useState([]);



  const handleKeyDown = (event) => {
    // console.dir(event)
    if (event.key == "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      console.log(newFoodItem);
      // setTextState(newFoodItem);
    }


    // console.log(textToShow.length);
  }



  return (
    <>
      <Container >
        <FoodTitle />
        <FoodInput handleKeyDown={handleKeyDown} />
        <ErrorMessage items={foodItems} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>
    </>
  )
}

export default App

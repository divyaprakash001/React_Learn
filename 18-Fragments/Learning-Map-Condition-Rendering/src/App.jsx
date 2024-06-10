import './App.css'
import Container from './Components/Container';
import ErrorMessage from './Components/ErrorMessage'
import FoodInput from './Components/FoodInput';
import FoodItems from './Components/FoodItems'
import FoodTitle from './Components/FoodTitle'

function App() {

  let foodItems = ['Dal', 'Salad', 'Green vegs', 'Roti', 'Ghee', 'Chana'];
  // let foodItems = []

  let textToShow = "Food Items entered by user."

  const handleInput = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  }

  return (
    <>
      {/* <div className="container"> */}
      <Container >
        <FoodTitle />
        <ErrorMessage items={foodItems} />
        <FoodInput handleInput={handleInput} />
        <p>{textToShow}</p>
        <FoodItems items={foodItems} />
      </Container>
      {/* </div> */}
      {/* <Container >
        <p >The above list is neccessary for your health.</p>
      </Container> */}


    </>
  )
}

export default App

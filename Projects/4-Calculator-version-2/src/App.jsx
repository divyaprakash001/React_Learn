
import { useState } from 'react';
import './App.css'
import ButtonItems from './Components/ButtonItems'
import Display from './Components/Display'

function App() {

  const [calVal, setCalVal] = useState("")

  const onButtonClick = (button) => {
    console.log(button);
    // console.log(event.target.innerText);
    if (button === 'C') {
      // console.log("c");
      setCalVal("")
    } else if (button === '=') {
      // console.log("equal");
      const result = eval(calVal)
      setCalVal(result)
    } else {
      console.log("other");
      const newDisplayValue = calVal + button;
      setCalVal(newDisplayValue)
    }
  }


  return (
    <>
      <div className="calculator">
        <Display displayValue={calVal} />
        <ButtonItems onButtonClick={onButtonClick} />
      </div>
    </>
  )
}

export default App

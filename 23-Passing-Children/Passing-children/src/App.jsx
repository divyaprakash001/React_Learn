import './App.css'
import Container from './Components/Container'

function App() {
  let word = "hello";
  return (
    <>
      <Container >
        <h1>This is heading</h1>
        <p>This is paragraph</p>
        <p>{word}</p>
      </Container>

    </>
  )
}

export default App

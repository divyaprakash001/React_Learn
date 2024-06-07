import './App.css'

function App() {
  let foodItems = ['dal', 'green vegs', 'roti', 'salad', 'milk','ghee'];

  return (
    <>
      <div className="container">
        <h1>Heading Foot</h1>
        <ul className='list-group'>
          {foodItems.map(item => <li key={item} className='list-group-item'>{item}</li>)}
        </ul>
      </div>
    </>
  )
}

export default App

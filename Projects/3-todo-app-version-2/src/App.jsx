import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";


function App() {


  const todoItems = [
    {
      name: 'Milk',
      dueDate: '12-06-2024'
    },
    {
      name: 'Study',
      dueDate: '08-06-2024'
    },
    {
      name: 'Revise',
      dueDate: '09-06-2024'
    },
    {
      name: 'Eat',
      dueDate: '09-06-2024'
    },
    {
      name: 'Code',
      dueDate: '09-06-2024'
    },
    {
      name: 'Coffee',
      dueDate: '09-06-2024'
    },
    {
      name: 'Sleep',
      dueDate: '10-06-2024'
    },
  ]

  return (
    <>
      <div className='container'>
        <AppName />
        <AddTodo />
        <div className="items-container container">
          <TodoItems todoItems={todoItems} />
        </div>
      </div>
    </>
  )
}

export default App

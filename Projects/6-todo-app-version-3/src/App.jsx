import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";


function App() {


  const initialTodoItems = [
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
  ]

  const [todoItems, setTodoItems] = useState(initialTodoItems)

  const onNewItem = (itemName, itemDueDate) => {
    console.log(`New Item ${itemName} and New item due date ${itemDueDate}`);
    let newTodoItems = [...initialTodoItems, {
      name: itemName,
      dueDate: itemDueDate
    }]

    setTodoItems(newTodoItems)

  }

  return (
    <>
      <div className='container'>
        <AppName />
        <AddTodo handleNewItem={onNewItem} />
        <div className="items-container container">
          <TodoItems todoItems={todoItems} />
        </div>
      </div>
    </>
  )
}

export default App

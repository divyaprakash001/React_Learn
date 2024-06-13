import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";


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

  // const initialTodoItems = []

  const [todoItems, setTodoItems] = useState(initialTodoItems)

  const onNewItem = (itemName, itemDueDate) => {
    // console.log(`New Item ${itemName} and New item due date ${itemDueDate}`);
    let newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    },]
    // console.log(newTodoItems);
    setTodoItems(newTodoItems)
  }

  const handleDeleteButton = (todoItemName) => {
    console.log(`${todoItemName} deleted`);
    let newTodoItems = todoItems.filter(item => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }

  return (
    <>
      <div className='container'>
        <AppName />
        <AddTodo handleNewItem={onNewItem} />
        <WelcomeMessage todoItems={todoItems} />
        <div className="items-container container">
          <TodoItems todoItems={todoItems} handleDeleteButton={handleDeleteButton} />
        </div>
      </div>
    </>
  )
}

export default App

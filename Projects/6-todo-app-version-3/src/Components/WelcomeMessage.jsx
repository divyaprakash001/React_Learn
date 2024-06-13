function WelcomeMessage({ todoItems }) {
  return (
    <>
      {todoItems.length === 0 && <p className="text-center h1">Welcome to Todo App</p>}
    </>
  )
}

export default WelcomeMessage;
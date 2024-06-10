function FoodInput({handleInput}){

  

return (
  <>
    <input className="container p-1 mb-2" type="text" placeholder="Enter your food item" onChange={handleInput} />
  </>
)
}

export default FoodInput;
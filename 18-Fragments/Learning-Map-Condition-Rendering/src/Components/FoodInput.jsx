function FoodInput({handleKeyDown}){

return (
  <>
    <input className="container p-1 mb-2" type="text" placeholder="Enter your food item" onKeyDown={handleKeyDown} />
  </>
)
}

export default FoodInput;
function Random(){
  let randNum = Math.floor(Math.random() * 100) + 1;
  return (
    (
      <>
        <h1 style={{'background-color':'aqua', 'color':'black'}}>The random number is :: {randNum}</h1>
      </>
    )
  )
}

export default Random;
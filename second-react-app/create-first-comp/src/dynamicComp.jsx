function Hello(){

  // let myName = "Divya Prakash";

  let fullName = () =>{
    return "Divya Prakash"
  }

  return (
    <>
      {/* <h1>Hello, {myName}! This is future speaking. I am your master {myName}</h1> */}
      <h1>Hello, {fullName()}! This is future speaking. I am your master {fullName()}</h1>
    </>
  )
}

export default Hello;
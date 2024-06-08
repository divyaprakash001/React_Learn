const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length == 0 && <h3 className='text-center'>I am still hungry</h3>}
      {/* {items.length == 0 ?  <h3 className='text-center'>I am still hungry</h3> : null} */}
    </>
  )
}

export default ErrorMessage;
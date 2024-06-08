function ErrorMessage({ items }) {
  return (
    <>
      {items.length == 0 && <h3 className='text-center bg-danger'>I am still hungry.</h3>}
    </>
  )
}

export default ErrorMessage;
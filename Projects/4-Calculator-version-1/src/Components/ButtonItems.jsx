import styles from "./ButtonItems.module.css"


function ButtonItems() {
  let buttons = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];
  return (
    <>
      <div className={`${styles.buttonsContainer}`}>
        {buttons.map(item => (
          <button key={item} className={`${styles.buttons}`}>{item}</button>
        ))}
      </div>
    </>
  )
}

export default ButtonItems;
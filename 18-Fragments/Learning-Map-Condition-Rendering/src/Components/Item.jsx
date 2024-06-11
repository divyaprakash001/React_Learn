import styles from "./Item.module.css";



const Item = ({ foodItem,bought, handleBuyButton }) => {  //getting arguments in props

  return (
    <>
      <li className={`list-group-item ${styles["dp-item"]} ${bought && 'active'}`}>
        <span className={styles["dp-span"]}>{foodItem}</span>
        <button className={`${styles.button} btn btn-warning btn-sm`} onClick={handleBuyButton} >Buy</button>
      </li>
    </>
  )

}

export default Item;
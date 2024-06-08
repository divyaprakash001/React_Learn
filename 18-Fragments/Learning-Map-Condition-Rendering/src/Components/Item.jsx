import styles from "./Item.module.css";

const Item = ({ foodItem }) => {  //getting arguments in props
  console.log(styles);
  return (
    <>
      <li className={`list-group-item ${styles["dp-item"]}`}>
        <span className={styles["dp-span"]}>{foodItem}</span>
      </li>
    </>
  )

}

export default Item;
import styles from "./Container.module.css";
// function Container(props) {
function Container({children}) {
  return (
    <div className={`container ${styles.containerst}`}>
      {children}
    </div>
  )
}

export default Container;
import styles from "./Problem.module.css";
const Problem = (props) => {
  return <div className={styles.problemBox}>{props.item.text}</div>;
};
export default Problem;

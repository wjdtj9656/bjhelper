import styles from "./Problem.module.css";
const Problem = (props) => {
  return <div className={styles.problemBox}>{props.item.context}</div>;
};
export default Problem;

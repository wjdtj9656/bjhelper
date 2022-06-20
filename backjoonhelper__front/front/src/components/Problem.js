import ProblemApi from "../api/ProblemApi";
import styles from "./Problem.module.css";
const Problem = (props) => {
  const deleteProblem = () => {
    ProblemApi.delete(`/problem/${props.item.id}`).then(() => {
      props.showItems();
    });
    console.log(props.item);
  };
  return (
    <div className={styles.problemBox}>
      {props.item.context}
      <button onClick={deleteProblem}>삭제</button>
    </div>
  );
};
export default Problem;

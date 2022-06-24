import ProblemApi from "../api/ProblemApi";
import styles from "./Problem.module.css";
const Problem = (props) => {
  const deleteProblem = () => {
    ProblemApi.delete(`/problem/${props.item.id}`).then(() => {
      props.showItems();
    });
    console.log(props.item);
  };
  const url = props.item.url;
  return (
    <div className={styles.problemBox}>
      <button
        onClick={() => {
          window.open(url, "_blank");
        }}
        className={styles.problemBtnLeft}
      >
        바로가기
      </button>
      <div className={styles.content}>{props.item.context}</div>
      <button onClick={deleteProblem} className={styles.problemBtnRight}>
        X
      </button>
    </div>
  );
};
export default Problem;

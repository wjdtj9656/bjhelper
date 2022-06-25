import ProblemApi from "../api/ProblemApi";
import styles from "./Problem.module.css";
import Swal from "sweetalert2";
const Problem = (props) => {
  const deleteProblem = () => {
    ProblemApi.delete(`/problem/${props.item.id}`).then(() => {
      Swal.fire("삭제 성공");
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

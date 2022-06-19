import styles from "./AddProblem.module.css";
import problemApi from "../api/ProblemApi";
import { useState } from "react";
const AddProblem = (props) => {
  const [problem, setProblem] = useState({ user_id: "wjdtj9656", context: null });
  const registerProblem = (e) => {
    e.preventDefault();
    console.log("post~");
    problemApi
      .post("/problem/", problem)
      .then((e) => {
        console.log(e);
      })
      .then(() => {
        props.showItems();
      })
      .catch((e) => {
        console.log(e);
      });
    props.showItems();
  };
  const inputContent = (e) => {
    setProblem({ user_id: problem.user_id, context: e.target.value });
    console.log(e.target.value);
  };
  return (
    <form className={styles.input__form} onSubmit={registerProblem}>
      <div>
        <input placeholder="URL" className={styles.input__box} />
      </div>
      <div>
        <input placeholder="Content" className={styles.input__box} onChange={inputContent} />
      </div>
      <div className={styles.input__btns}>
        <button className={styles.input__btn}>등록</button>
        <button className={styles.input__btn}>취소</button>
      </div>
    </form>
  );
};
export default AddProblem;

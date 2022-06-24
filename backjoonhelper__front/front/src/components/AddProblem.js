import styles from "./AddProblem.module.css";
import problemApi from "../api/ProblemApi";
import { useState } from "react";
// import { useRecoilState } from "recoil";
// import { userIdState } from "../atom/Atom";
const AddProblem = (props) => {
  // const [uid, setUid] = useRecoilState(userIdState);
  const [problem, setProblem] = useState({});
  const uid = localStorage.getItem("uid");
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
  };
  const inputContent = (e) => {
    setProblem({ ...problem, user_id: `${uid}`, context: e.target.value });
    console.log(problem);
  };
  const inputURL = (e) => {
    setProblem({ ...problem, url: e.target.value });
    console.log(problem);
  };
  return (
    <form className={styles.input__form} onSubmit={registerProblem}>
      <div>
        <input placeholder="URL" className={styles.input__box} onChange={inputURL} />
      </div>
      <div>
        <input placeholder="Content" className={styles.input__box} onChange={inputContent} />
      </div>
      <div className={styles.input__btns}>
        <button className={styles.input__btn}>등록</button>
        <button className={styles.input__btn} type="button" onClick={props.isShown}>
          취소
        </button>
      </div>
    </form>
  );
};
export default AddProblem;

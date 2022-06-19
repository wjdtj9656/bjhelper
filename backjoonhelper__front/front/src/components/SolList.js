import { useEffect, useState } from "react";
import ProblemApi from "../api/ProblemApi";
import AddProblem from "./AddProblem";
import Modal from "./Modal";
import Problem from "./Problem";
import styles from "./SolList.module.css";
const SolList = () => {
  const [item, setItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    ProblemApi.get("/problem/wjdtj9656").then((temp) => {
      setItem(temp);
      console.log(temp);
    });
  }, []);
  const addBtnClick = () => {
    setShowModal(!showModal);
  };
  const showItems = () => {
    ProblemApi.get("/problem/wjdtj9656").then((temp) => {
      setItem(temp);
      console.log(temp);
      console.log("show!!!!");
    });
  };
  return (
    <div>
      {showModal && (
        <Modal isShown={addBtnClick}>
          <AddProblem showItems={showItems} />
        </Modal>
      )}
      <button className={styles.addBtn} onClick={addBtnClick}>
        Add Problem
      </button>
      <div className={styles.problemList}>
        {item.data &&
          item.data.map((item) => {
            return <Problem item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};
export default SolList;

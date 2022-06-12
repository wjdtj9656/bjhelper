import { useState } from "react";
import AddProblem from "./AddProblem";
import Modal from "./Modal";
import Problem from "./Problem";
import styles from "./SolList.module.css";
const SolList = () => {
  const [item, setItem] = useState({ id: null, text: "haha" });
  const [showModal, setShowModal] = useState(false);
  const addBtnClick = () => {
    setShowModal(!showModal);
  };
  return (
    <div>
      {showModal && (
        <Modal isShown={addBtnClick}>
          <AddProblem />
        </Modal>
      )}
      <button className={styles.addBtn} onClick={addBtnClick}>
        Add Problem
      </button>
      <div className={styles.problemList}>
        <Problem item={item} />
        <Problem item={item} />
      </div>
    </div>
  );
};
export default SolList;

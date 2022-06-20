import { useEffect, useState } from "react";
import ProblemApi from "../api/ProblemApi";
import AddProblem from "./AddProblem";
import Modal from "./Modal";
import Problem from "./Problem";
import styles from "./SolList.module.css";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { userIdState } from "../atom/Atom";
const SolList = () => {
  const [item, setItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const uid = useRecoilState(userIdState);
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    ProblemApi.get(`/problem/${uid}`).then((temp) => {
      console.log("haha");
      setItem(temp);
    });
  }, []);
  const addBtnClick = (e) => {
    setShowModal(!showModal);
  };
  const showItems = () => {
    ProblemApi.get(`/problem/${uid}`).then((temp) => {
      setItem(temp);
    });
  };
  return (
    <div>
      {showModal && (
        <Modal isShown={addBtnClick}>
          <AddProblem showItems={showItems} isShown={addBtnClick} />
        </Modal>
      )}
      <button className={styles.addBtn} onClick={addBtnClick}>
        Add Problem
      </button>
      <div className={styles.problemList}>
        {item.data &&
          item.data.map((item) => {
            return <Problem item={item} key={item.id} showItems={showItems} />;
          })}
      </div>
    </div>
  );
};
export default SolList;

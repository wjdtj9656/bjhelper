import { useEffect, useState } from "react";
import ProblemApi from "../api/ProblemApi";
import AddProblem from "./AddProblem";
import Modal from "./Modal";
import Nav from "./Nav";
import Problem from "./Problem";
import styles from "./SolList.module.css";
// import { useRecoilState, useRecoilValue } from "recoil";
// import { userIdState } from "../atom/Atom";
const SolList = () => {
  const [item, setItem] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // const uid = useRecoilState(userIdState);
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const uid = localStorage.getItem("uid");
  useEffect(() => {
    // console.log(localStorage.getItem("ACCESS_TOKEN"));
    // console.log(uid);
    ProblemApi.get(`/problem/${uid}`, { headers: { Authorization: "Bearer " + ACCESS_TOKEN } })
      .then((temp) => {
        console.log("haha");
        setItem(temp);
      })
      .catch((err) => {
        console.log(localStorage.getItem("ACCESS_TOKEN"));
        console.log(uid);
        console.log(err);
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
    <div className={styles.solMain}>
      <Nav />
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

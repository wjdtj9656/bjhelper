import { useState } from "react";
import Problem from "./Problem";
import styles from "./SolList.module.css";
const SolList = () => {
  const [item, setItem] = useState({ id: null, text: "haha" });
  return (
    <div class={styles.problemList}>
      <Problem item={item} />
      <Problem item={item} />
    </div>
  );
};
export default SolList;

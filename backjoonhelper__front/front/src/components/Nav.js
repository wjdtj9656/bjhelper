import styles from "./Nav.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Nav = () => {
  const navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("uid");
    navigate("/");
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftNav}>
          <div>Home</div>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.navcon} onClick={logout}>
            {ACCESS_TOKEN && "로그아웃"}
          </div>
          <div className={styles.navcon}>회원가입</div>
        </div>
      </div>
    </>
  );
};
export default Nav;

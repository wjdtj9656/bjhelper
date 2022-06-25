import styles from "./Nav.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Nav = () => {
  const navigate = useNavigate();
  const ACCESS_TOKEN = localStorage.getItem("ACCESS_TOKEN");
  const goList = () => {
    navigate("/list");
  };
  const logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("uid");
    Swal.fire("로그아웃 되었습니다.");
    navigate("/");
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftNav}>
          <div className={styles.navcon} onClick={goList}>
            Home
          </div>
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

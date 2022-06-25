import { useState } from "react";
import styles from "./Signup.module.css";
import userAPI from "../../api/UserApi";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Signup = () => {
  const [user, setUser] = useState({ id: null, email: null, username: null, password: null });
  const navigate = useNavigate();
  const inputID = (e) => {
    setUser({ ...user, id: e.target.value });
  };
  const inputEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const inputName = (e) => {
    setUser({ ...user, username: e.target.value });
  };
  const inputPassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };
  const onSignup = (e) => {
    e.preventDefault();
    userAPI
      .post("/auth/", user)
      .then((res1) => {})
      .then(() => {
        Swal.fire("회원가입 성공");
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("회원가입 실패");
        console.log(err);
      });
  };
  return (
    <div>
      <form className={styles.login__form} onSubmit={onSignup}>
        <div>
          <input id="id" placeholder="ID" className={styles.input__box} onChange={inputID} />
        </div>
        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className={styles.input__box}
            onChange={inputEmail}
          />
        </div>
        <div>
          <input
            id="password"
            type="password"
            placeholder="Password"
            className={styles.input__box}
            onChange={inputPassword}
          />
        </div>
        <div>
          <input
            id="username"
            type="username"
            placeholder="Username"
            className={styles.input__box}
            onChange={inputName}
          />
        </div>
        <div className={styles.login__btns}>
          <button className={styles.login__btn}>회원가입!</button>
          <button
            className={styles.login__btn}
            type="button"
            onClick={() => {
              Swal.fire("로그인 페이지로 이동합니다.");
              navigate("/");
            }}
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;

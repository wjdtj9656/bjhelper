import styles from "./Login.module.css";
import userAPI from "../api/UserApi";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [user, setUser] = useState({ id: null, password: null });
  const navigate = useNavigate();
  const inputID = (e) => {
    setUser({ id: e.target.value, password: user.password });
  };
  const inputPassword = (e) => {
    setUser({ id: user.id, password: e.target.value });
  };
  const onLogin = (e) => {
    console.log(user);
    e.preventDefault();
    userAPI
      .post("/auth/login", user)
      .then((res1) => {
        localStorage.setItem("ACCESS_TOKEN", res1.data.token);
        navigate(`/list`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form className={styles.login__form} onSubmit={onLogin}>
        <div>
          <input id="id" placeholder="ID" className={styles.input__box} onChange={inputID} />
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
        <div className={styles.login__btns}>
          <button className={styles.login__btn}>Login</button>
          <button className={styles.login__btn}>회원가입</button>
        </div>
      </form>
    </div>
  );
};
export default Login;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/login.module.css";
import logo from "../img/logoCircle.svg";
import axiosInstance from "../../api/axiosInstance";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      alert("로그인에 성공했습니다!");

      navigate("/"); // 로그인 성공 시 메인 페이지로 이동
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <>
      <div className={styles.my}>
        <h3 className={styles.category}>MY</h3>
        <h4 className={styles.categoryDetail}>로그인</h4>
        <div className={styles.signUpContent}>
          <img src={logo} alt="Logo" />
          <form onSubmit={handleSubmit}>
            <div className={styles.inputDiv}>
              <span>이메일</span>
              <input
                type="text"
                placeholder="자신의 이메일을 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputDiv}>
              <span>비밀번호</span>
              <input
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={styles.buttonDiv}>
              <button type="submit" className={styles.btn}>
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

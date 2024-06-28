import React from "react";
import { Link } from "react-router-dom";
import styles from "../css/login.module.css";
import logo from "../img/logoCircle.svg";

export default function login() {
  const inputs = [
    { label: "이름", placeholder: "ex> 이름을 입력하세요" },
    { label: "별명", placeholder: "ex> 자취왕" },
    { label: "이메일", placeholder: "ex> Example@hufs.ac.kr" },
    { label: "비밀번호", placeholder: "비밀번호를 입력하세요" },
    { label: "비밀번호 확인", placeholder: "비밀번호를 한번 더 입력해주세요" },
  ];

  return (
    <>
      <div className={styles.my}>
        <h3 className={styles.category}>MY</h3>
        <h4 className={styles.categoryDetail}>회원가입</h4>
        <div className={styles.signUpContent}>
          <img src={logo} alt="Logo" />
          {inputs.map((input, index) => (
            <div key={index} className={styles.inputDiv}>
              <span>{input.label}</span>
              <input type="text" placeholder={input.placeholder} />
            </div>
          ))}
          <div className={styles.buttonDiv}>
            <Link className={styles.btn} to="/">
              <div>회원가입</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

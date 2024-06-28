import styles from "../css/makeForm.module.css";
import { Link } from "react-router-dom";
export default function MakeForm() {
  const inputs = [
    {
      label: "구매하고자하는 식료품명을 작성해주세요!",
      placeholder: "ex>양파 (이런식으로 식료품명만 작성해주세요)",
    },
    {
      label: "구매사이트는 어디인가요?",
      placeholder: "ex> 구매 링크를 복사 + 붙여넣기 해주세요",
    },
    {
      label: "몇명이 함께 구매하고자 하나요?",
      placeholder: "ex> 5 (숫자만 입력해주세요)",
    },
    {
      label: "언제까지 구매하고자 하나요?",
      placeholder: "ex> 2024.06.28 (날짜 형식을 맞춰주세요!)",
    },
    { label: "총 구매가격은 얼마인가요?", placeholder: "ex> 50000원" },
    {
      label: "공구를 진행할 계좌번호를 입력해주세요!",
      placeholder: "ex> 계좌번호 입력",
    },
  ];
  return (
    <>
      <div className={styles.formContainer}>
        <h3>공동구매</h3>

        <div>
          {inputs.map((input, index) => (
            <div key={index} className={styles.inputDiv}>
              <span>{input.label}</span>
              <input type="text" placeholder={input.placeholder} />
            </div>
          ))}
          <div className={styles.buttonDiv}>
            <Link className={styles.btn} to="/">
              <div>제출하기</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

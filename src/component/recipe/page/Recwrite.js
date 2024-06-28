import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BackButton from "../rec_ui/rec_back";
import styles from "../../css/recwrite.module.css";

export default function Recwrite() {
  const navigate = useNavigate();
  const inputs = [
    { label: "레시피명을 작성해주세요!", placeholder: "ex> 닭가슴살 샐러드" },
    { label: "재료는 무엇인가요?", placeholder: "ex> 닭가슴살, 양상추(,를 기준으로작성해주세요)" },
    { label: "레시피를 작성해주세요?", placeholder: "ex> 5(숫자만 입력해주세요)" },
    { label: "사진이 있다면 사진을 추가해주세요!", placeholder: "사진업로드하기" },
  ];
  return (
    <>
      <div>
      <BackButton />
      <h3 className={styles.category}>레시피 추천</h3>
        
         {inputs.map((input, index) => (
            <div key={index} className={styles.inputDiv}>
              <span>{input.label}</span>
              <input type="text" placeholder={input.placeholder} />
            </div>
          ))}    
      </div>
    </>
  );
}

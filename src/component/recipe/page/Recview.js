import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import WriteButton from "../rec_ui/rec_writebutton";
import BackButton from "../rec_ui/rec_back";
import styles from "../../css/recview.module.css";
import recipImg from "../../img/recipeImg.png";

export default function Recview() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h3>레시피 추천</h3>
        <BackButton />
          <div className={styles.menuDiv}>
            <div className={styles.contentname}>
             <span>닭가슴살 볶음밥</span>
            </div>
            <div className={styles.content}>
            <img src={recipImg}></img>
          </div>
         </div>
         <div className={styles.contenting}>
             <span>재료: 숙주, 닭가슴살, 밥</span>
            </div>
            <div className={styles.contentrec}>
             <span>레시피: 

              1. 닭가슴살을 볶는다.
             </span>
            </div>
      </div>
    </>
  );
}

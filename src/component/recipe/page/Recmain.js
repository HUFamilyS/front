import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../rec_ui/rec_button";
import styles from "../../css/Recmain.module.css";
import recipImg from "../../img/recipeImg.png";

export default function Recmain() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.my}>
        <h3 className={styles.category}>레시피 추천</h3>
        <div className={styles.menuDiv}>
          <div className={styles.content}>
            <img src={recipImg}></img>
            <span>불닭마요덮밥</span>
          </div>
        </div>
      </div>
    </>
  );
}

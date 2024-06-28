import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import styles from "../../css/backbutton.module.css";
import { useNavigate } from "react-router-dom";
import recipImg from "../../img/recipeImg.png";

function BackButton() {
    const navigate = useNavigate();
    return (
        <>
      <div className={styles.my}>
        <Link to="/recipe"><div className={styles.menuDiv}>
          <div className={styles.content}>
            <span>돌아가기</span>
          </div>
        </div>
        </Link>
      </div>
    </>
    );
}

export default BackButton;
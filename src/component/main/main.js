import React, { useState } from "react";
import styles from "../css/main.module.css";

import { useNavigate } from "react-router-dom";
import Button from "../recipe/rec_ui/rec_button";
import recipImg from "../img/recipeImg.png";
import { Link } from "react-router-dom";
import styles2 from "../css/purchase.module.css";

export default function Main() {
  const navigate = useNavigate();
  const supplementItems = [
    { id: 1, name: "프로틴" },
    { id: 2, name: "크레아틴" },
    { id: 3, name: "BCAA" },
  ];

  const goToPage = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <>
      <div className={styles.mainDiv}></div>


      <div>
      <div className={styles2.box}>
        <div className={styles2.message}>
          <div className={styles.banerTitle}>
          오늘의 HOT 레시피
          <img src={recipImg}></img>
          </div>
          
        </div>
        <Link to="/recipe"><span>구경하기</span></Link>
      </div>
      <div className={styles.mainTitle}> 
          <h3 className={styles.category}>공동구매</h3>
        
        <Link to="/recipe"><span>전체 보기</span> </Link>
        </div>

        <div className={styles2.supplement}>
          <div className={`${styles2.section}`}>
            {supplementItems.map((item) => (
              <div
                className={styles2.category}
                key={item.id}
                onClick={() => goToPage(item.id)}
              >
                <div className={styles2.item}></div>
                <div className={styles2.itemName}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>


        <div className={styles.mainTitle}> 
          <h3 className={styles.category}>레시피 추천</h3>
        
        <Link to="/recipe"><span>전체 보기</span> </Link>
        </div>
        



        <div><Button /></div>
        <div><Button /></div>
       </div>
    </>
   
  );
}

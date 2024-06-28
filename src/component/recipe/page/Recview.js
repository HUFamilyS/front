import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../rec_ui/rec_button";
import styles from "../../css/recview.module.css";

export default function Recview() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h3>레시피 추천</h3>
        <Button
          title='돌아가기'
          onClick={() => {
          navigate('/recipe');
          }}
                />
        <Button
          title='레시피 작성하기'
          onClick={() => {
          navigate('/write');
          }}
        />     
      </div>
    </>
  );
}

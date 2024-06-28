import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../rec_ui/rec_button";
import styles from "../../css/recmain.module.css";

export default function Recmain() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h3>레시피 추천</h3>
        <Button
          title='닭가슴살 샐러드'
          onClick={() => {
          navigate('/view');
          }}
                />
        <Button
          title='닭가슴살 스테이크'
          onClick={() => {
          navigate('/view');
          }}
                />
        <Button
          title='닭가슴살 볶음밥'
          onClick={() => {
          navigate('/view');
          }}
                />        
      </div>
    </>
  );
}

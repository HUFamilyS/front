import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../rec_ui/rec_button";

export default function Recmain() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h3>레시피 추천</h3>
        <Button
          title='닭가슴살 샐러드'
          onClick={() => {
          navigate('/Recview');
          }}
                />
        <Button
          title='닭가슴살 스테이크'
          onClick={() => {
          navigate('/Recview');
          }}
                />
        <Button
          title='닭가슴살 볶음밥'
          onClick={() => {
          navigate('/Recview');
          }}
                />        
      </div>
    </>
  );
}

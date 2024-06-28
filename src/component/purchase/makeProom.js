import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/makeProom.module.css";

export default function MakeProom() {
  const [rooms, setRooms] = useState([]); // 진행 중인 방 상태
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/purchase/form");
    setRooms([
      ...rooms,
      { id: rooms.length + 1, name: `Room ${rooms.length + 1}` },
    ]);
  };

  return (
    <div className={styles.roomContainer}>
      <h3 className={styles.category}>공동구매</h3>
      <div className={styles.roomlist}>
        {rooms.map((room) => (
          <div key={room.id} className={styles.room}>
            <div>{room.name}구매하기</div>
            <div>공동구매자 모집 현황 1/n</div>
            <div>마감기한 2024.06.28</div>
          </div>
        ))}
        <div className="discount">-{}원 할인!</div>
      </div>

      <button onClick={handleButtonClick}>+공구방만들기</button>
    </div>
  );
}

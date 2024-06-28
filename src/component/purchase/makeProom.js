import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/makeProom.module.css";

export default function MakeProom() {
  const [rooms, setRooms] = useState([]); // 진행 중인 방 상태
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/purchase/form");
    // 임의로 진행 중인 방을 추가하는 예제
    setRooms([
      ...rooms,
      { id: rooms.length + 1, name: `Room ${rooms.length + 1}` },
    ]);
  };

  return (
    <>
      <div className={styles.roomContainer}>
        <h3>공동구매</h3>
        <button onClick={handleButtonClick}>+공구방만들기</button>
        <div className={styles.rooms}>
          {rooms.map((room) => (
            <div key={room.id} className={styles.room}>
              {room.name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

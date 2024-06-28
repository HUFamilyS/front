import { useNavigate } from "react-router-dom";
import styles from "../css/purchase.module.css";

export default function Purchase() {
  const foodItems = [
    { id: 1, name: "야채/채소" },
    { id: 2, name: "쌀/잡곡/즉석밥" },
    { id: 3, name: "닭가슴살" },
    { id: 4, name: "과일" },
    { id: 5, name: "우유/계란" },
    { id: 6, name: "생선" },
  ];
  const supplementItems = [
    { id: 7, name: "프로틴" },
    { id: 8, name: "크레아틴" },
    { id: 9, name: "BCAA" },
  ];
  const vitaminItems = [
    { id: 10, name: "" },
    { id: 11, name: "" },
    { id: 12, name: "" },
  ];
  const navigate = useNavigate();

  const goToPage = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div className={styles.purchaseContainer}>
      <div className={styles.name}>
        <h3>공동구매</h3>
        <div className={styles.box}>
          <div>오늘도 OOO명이나 구매 완료했어요!</div>
          <div>필요한 물품이 있는지 찾아보세요</div>
        </div>
      </div>
      <div className={styles.itemContainer}>
        <div className={styles.food}>
          <h3>음식</h3>
          <div className={`${styles.section}`}>
            {foodItems.map((item) => (
              <div
                className={styles.category}
                key={item.id}
                onClick={() => goToPage(item.id)}
              >
                <div className={styles.item}></div>
                <div className={styles.itemName}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.supplement}>
          <h3>보충제</h3>
          <div className={`${styles.section}`}>
            {supplementItems.map((item) => (
              <div
                className={styles.category}
                key={item.id}
                onClick={() => goToPage(item.id)}
              >
                <div className={styles.item}></div>
                <div className={styles.itemName}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.vitamin}>
          <h3>영양제</h3>
          <div className={`${styles.section} `}>
            {vitaminItems.map((item) => (
              <div
                className={styles.category}
                key={item.id}
                onClick={() => goToPage(item.id)}
              >
                <div className={styles.item}></div>
                <div className={styles.itemName}>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

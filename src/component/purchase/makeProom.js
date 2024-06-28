import styles from "../css/makeProom.module.css";
export default function MakeProom() {
  return (
    <>
      <div className={styles.roomContainer}>
        <h3>공동구매</h3>
        <button>+공구방만들기</button>
      </div>
    </>
  );
}

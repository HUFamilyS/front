import styles from "../css/detailpurchase.module.css";
export default function Detailpurchase() {
  return (
    <>
      <div className={styles.detailContainer}>
        <h3>공동구매</h3>
        <div className={styles.box}>
          <h4>구매하기</h4>
          <a
            href="https://www.naver.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 구매 링크 바로가기
          </a>
          <div className={styles.people}>공동구매자 모집 현황 3/5</div>
          <div className={styles.deadline}>
            <div>마감기한</div>
            <div> 2024.06.28</div>
          </div>
          <div className={styles.amount}>
            <div>1/n 금액 4320</div>
          </div>
          <div className={styles.bankaccount}>
            <div>대표 계좌</div>
            <div className={styles.date}>농협 352-1578-4929-63</div>
          </div>
          <div className={styles.sale}>-5650원 할인!</div>
          <button>공동구매하기</button>
        </div>
      </div>
    </>
  );
}

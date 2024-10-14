import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./Loan.module.css";

function Loan() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebar}> 
        <Sidebar />
      </div>
    </div>
  )
}

export default Loan

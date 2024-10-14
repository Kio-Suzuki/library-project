import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Titlebar from "../../components/TitleBar/Titlebar";
import styles from "./Loan.module.css";
import Loanlist from "../../components/Loanlist/Loanlist";
import Columnloans from "../../components/ColumnsLoans/Columnloans";

function Loan() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.sidebar}> 
        <Sidebar />
      </div>
      <div className={styles.main}> 
        <div className={styles.searchbar}> 
          <Searchbar />
        </div>
        <div className={styles.titlebar}> 
          <Titlebar Title="Loans" />
        </div>
        <div className={styles.columnsContainer}>
          <Columnloans />
        </div>
        <div className={styles.loanlistContainer}>
          <Loanlist id={'id'} name={'Pedro'} title={'Lord of the Rings'} loandate={'14-10-2024'} returndate={'24-10-2024'}/>
        </div>
      </div>
    </div>
  );
}

export default Loan

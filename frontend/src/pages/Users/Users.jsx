import Sidebar from '../../components/Sidebar/Sidebar';
import Searchbar from '../../components/Searchbar/Searchbar';
import styles from './Users.module.css';
import Titlebar from '../../components/TitleBar/Titlebar';
import Userlist from '../../components/Userlist/Userlist';
import Columnsusers from '../../components/ColumnsUsers/Columnsusers';

function Users() {

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
          <Titlebar Title="Users" />
        </div>
        <div className={styles.columnsContainer}>
          <Columnsusers />
        </div>
        <div className={styles.userlistContainer}>
          <Userlist id='1' user='John Terry' email='john@gmail.com' telephone='(00)00000-0000' date='01/01/2024'/>
          <Userlist id='2' user='Jane Smith' email='jane@gmail.com' telephone='(11)11111-1111' date='02/02/2024'/>
          <Userlist id='3' user='Paul Walker' email='paul@gmail.com' telephone='(22)22222-2222' date='03/03/2024'/>
          <Userlist id='4' user='Lucy Hale' email='lucy@gmail.com' telephone='(33)33333-3333' date='04/04/2024'/>
          <Userlist id='5' user='Chris Evans' email='chris@gmail.com' telephone='(44)44444-4444' date='05/05/2024'/>
          <Userlist id='6' user='Emily Clarke' email='emily@gmail.com' telephone='(55)55555-5555' date='06/06/2024'/>
          <Userlist id='7' user='Robert Downey' email='robert@gmail.com' telephone='(66)66666-6666' date='07/07/2024'/>
          <Userlist id='8' user='Emma Watson' email='emma@gmail.com' telephone='(77)77777-7777' date='08/08/2024'/>
        </div>
      </div>
    </div>
  );
}

export default Users

import Sidebar from "../../components/Sidebar/Sidebar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Titlebar from "../../components/TitleBar/Titlebar";
import Booklist from "../../components/Booklist/Booklist";
import styles from "./Books.module.css";
import Columnsbooks from "../../components/ColumnsBooks/Columnsbooks";

function Books() {

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
          <Columnsbooks />
        </div>
        <div className={styles.userlistContainer}>
          <Booklist id='1' title='To Kill a Mockingbird' author='Harper Lee' category='Fiction' isbn='978-0-06-112008-4' publishedDate='1960-07-11'/>
          <Booklist id='2' title='1984' author='George Orwell' category='Dystopian' isbn='978-0-452-28423-4' publishedDate='1949-06-08'/>
          <Booklist id='3' title='Pride and Prejudice' author='Jane Austen' category='Romance' isbn='978-0-19-953556-9' publishedDate='1813-01-28'/>
          <Booklist id='4' title='The Great Gatsby' author='F. Scott Fitzgerald' category='Classic' isbn='978-0-7432-7356-5' publishedDate='1925-04-10'/>
          <Booklist id='5' title='Moby Dick' author='Herman Melville' category='Adventure' isbn='978-0-14-243724-7' publishedDate='1851-10-18'/>
          <Booklist id='6' title='War and Peace' author='Leo Tolstoy' category='Historical Fiction' isbn='978-0-14-044793-4' publishedDate='1869-01-01'/>
          <Booklist id='7' title='The Catcher in the Rye' author='J.D. Salinger' category='Fiction' isbn='978-0-316-76948-0' publishedDate='1951-07-16'/>
          <Booklist id='8' title='Brave New World' author='Aldous Huxley' category='Science Fiction' isbn='978-0-06-085052-4' publishedDate='1932-08-30'/>
          <Booklist id='9' title='The Lord of the Rings' author='J.R.R. Tolkien' category='Fantasy' isbn='978-0-618-64015-7' publishedDate='1954-07-29'/>
          <Booklist id='10' title='The Hobbit' author='J.R.R. Tolkien' category='Fantasy' isbn='978-0-618-00221-4' publishedDate='1937-09-21'/>
        </div>
      </div>
    </div>
  );
}

export default Books

import styles from './Booklist.module.css';

function Booklist({id, title, author, isbn, category, publishedDate}) {
  return (
    <div className={styles.booklistContainer}>
       <div className={styles.id}><span>{id}</span></div>
       <div className={styles.title}><span>{title}</span></div>
       <div className={styles.author}><span>{author}</span></div>
       <div className={styles.isbn}><span>{isbn}</span></div>
      <div className={styles.category}><span>{category}</span></div>
       <div className={styles.date}><span>{publishedDate}</span></div>
    </div>
  )
}

export default Booklist

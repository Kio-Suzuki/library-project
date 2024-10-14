import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Books.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=subject:adventure&key=API_KEY`);
        setBooks(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
    loadBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.booksContainer}>
      <Swiper
        slidesPerView={5} 
        spaceBetween={0} 
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <div className={styles.books}>
              <div className={styles.bookCover}>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
              </div>
              <div className={styles.bookInfo}>
                <h2>{book.volumeInfo.title}</h2>
                <span>{book.volumeInfo.authors?.join(', ')}</span>
              </div>
              <button className={styles.cardButton}>ADD BOOK</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Books;

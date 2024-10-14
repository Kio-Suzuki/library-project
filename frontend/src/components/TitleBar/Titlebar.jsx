import { useState } from 'react';
import styles from './Titlebar.module.css';
import Modaladduser from '../ModalAddUser/Modaladduser';

function Titlebar({Title, buttonTitle}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.titleContainer}>
      <h1>{Title}</h1>
      <button 
        className={styles.addButton}
        onClick={openModal}
      >
        {buttonTitle}
      </button>
      <Modaladduser isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  )
}

export default Titlebar

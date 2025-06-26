import React, { useState } from "react";
import BaseModal from "../../../base/Modal";

function CommentButton() {
  const [isModalOpen, setModal] = useState(false);

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  const handleSave = () => {
    
    console.log("Комментарий сохранен");
    handleClose();
  };

  const renderModalContent = () => (
    <div className="trigger__message">
      <p>Подтверждение сохранения</p>
      <ul className="station__options-list">
        <li className="station__options-list-item">
          <button onClick={handleSave} className="button options__button">
          Сохранить
        </button>
        </li>
        <li className="station__options-list-item">
          <button onClick={handleClose} className="button options__button">
          Отмена
        </button>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <button 
        onClick={handleOpen}
        className="options__button" 
        style={{ marginTop: '5px', marginBottom: '5px' }}
      >
        Сохранить комментарий
      </button>

      {isModalOpen && (
        <BaseModal onClose={handleClose}>
          {renderModalContent()}
        </BaseModal>
      )}
    </>
  );
}

export default CommentButton;
import React, { useState } from "react";
import BaseModal from "../../../base/Modal";

function CommentButton() {
  const [isModalOpen, setModal] = useState(false);
  const [comment, setComment] = useState("");

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setComment(e.target.value);
  };


  const handleSave = () => {
    console.log("Комментарий сохранен:", comment);
    setComment(""); // Очистка поля после сохранения
    handleClose();
  };

  const renderModalContent = () => (
    <div className="trigger__message">
      <p>Введите сохранения</p>
      <ul className="station__options-list">
        <li className="station__options-list-item">
          <input
            type="text"
            className="input options__input"
            placeholder="Введите комментарий..."
            value={comment}
            onChange={handleInputChange}
          />
        </li>
        <li className="station__options-list-item">
          <button onClick={handleSave} className="button options__button">
            Сохранить
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

import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function WarningButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal} className="icon">
        <img
          className="warning-icon"
          src="/warning-icon.svg"
          alt="Warning Icon"
        />
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Warning Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
        }}
      >
        <h2>Warning</h2>
        {/* <CreateListLogs></CreateListLogs> */}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default WarningButton;

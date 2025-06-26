import React, { useState } from "react";
import TriggerOptions from "./triggerOptinons";
import RebootOptions from "./rebootOptions";
import BaseModal from "../../../base/Modal";
import WebStation from "./webStation";

function DetailsButtons() {
  const [isModalOpen, setModal] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const buttons = ["Управление", "Запрос", "Web"];

  const handleClick = (key: string) => {
    setActiveKey(key);
    setModal(true);
  };

  const handleClose = () => {
  setModal(false);
  setActiveKey(null); 
};

  const renderModalContent = () => {
    switch (activeKey) {
      case "Управление":
          return (
              <RebootOptions
                onConfirm={() => {
                      console.log("Reboot options confirmed");
                    }}
                    onClose={handleClose}
              />
          );
      case "Запрос":
        return (
              <TriggerOptions/>
        );
      case "Web":
        return (
          <WebStation/>
        );
      default:
        return null;
    }
  };

  return (
    <div className="detail__container__buttons">
      {buttons.map((btn) => (
        <button
          key={btn}
          onClick={() => handleClick(btn)}
          className="button detail__buttons"
        >
          {btn}
        </button>
      ))}

      {isModalOpen && (
        <BaseModal onClose={handleClose}>{renderModalContent()}</BaseModal>
      )}
    </div>
  );
}

export default DetailsButtons;

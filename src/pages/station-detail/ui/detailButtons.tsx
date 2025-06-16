import React, { useState } from "react";
// import StatusModal from "./modalsDetails/triggerMessageModal.tsx";
// import RebootModal from "./modalsDetails/reboot.tsx";
import BaseModal from "../../../base/Modal";

function DetailsButtons() {
  const [isModalOpen, setModal] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const buttons = ["Перезагрузка", "TriggerMessage", "Мониторинг"];

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
      // case "Перезагрузка":
      //     return (
      //         <label className="switch">
      //             <input type="checkbox"/>
      //             <span className="slider round"></span>
      //         </label>
      //     );
      case "TriggerMessage":
        return (
            <div className="trigger__message">  
                <a className="trigger__message">
                    Выберите способо перезагрузки
                </a>
                <ul className="list__message__params">
                    <li className="message__param hardReboot">
                        <a>
                            HardReboot:
                        </a>
                        <label className="switch">
                            <input type="checkbox" name="hardReboot"/>
                            <span className="slider round"></span>
                        </label>
                    </li>
                    <li className="message__param occpReboot">
                        <a>
                            OCCP Reboot:
                        </a>
                        <label className="switch">
                            <input type="checkbox" name="occpReboot"/>
                            <span className="slider round"></span>
                        </label>
                    </li>
                </ul>

                <button onClick={handleClose}>Принять</button>
            </div>
        );
      case "Мониторинг":
        return (
          <div>
            <p>Здесь отображается мониторинг состояния.</p>
            <button onClick={handleClose}>Закрыть</button>
          </div>
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

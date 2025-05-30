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
            //     return <RebootModal onClose={handleClose} />;
            // case "TriggerMessage":
            //     return <StatusModal onClose={handleClose} />;
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
                <BaseModal onClose={handleClose}>
                    {renderModalContent()}
                </BaseModal>
            )}
        </div>
    );
}

export default DetailsButtons;
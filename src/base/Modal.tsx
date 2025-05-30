import React, { useEffect } from "react";

type BaseModalProps = {
    onClose: () => void;
    children: React.ReactNode;
};

const BaseModal = ({ onClose, children }: BaseModalProps) => {
    const handleOverlayClick = () => {
        onClose();
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-wrapper" onClick={handleModalClick}>
                <div className="modal-close-outside" onClick={onClose}>
                    ✕
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseModal;

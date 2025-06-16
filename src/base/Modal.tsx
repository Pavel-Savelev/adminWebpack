import React, { useEffect, useState } from "react";

type BaseModalProps = {
    onClose: () => void;
    children: React.ReactNode;
};

const BaseModal = ({ onClose, children }: BaseModalProps) => {
    const [isClosing, setIsClosing] = useState(false);

    const closeWithAnimation = () => {
        setIsClosing(true);
    };

    const handleOverlayClick = () => {
        closeWithAnimation();
    };

    const handleModalClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closeWithAnimation();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (isClosing) {
            const timer = setTimeout(() => {
                onClose();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [isClosing, onClose]);

    return (
        <div
            className={`modal-overlay ${isClosing ? "fade-out" : "fade-in"}`}
            onClick={handleOverlayClick}
        >
            <div
                className={`modal-wrapper ${isClosing ? "fade-out" : ""}`}
                onClick={handleModalClick}
            >
                <div className="modal-close-outside" onClick={closeWithAnimation}>
                    ✕
                </div>
                <div className="modal-content">{children}</div>
            </div>
        </div>
    );
};

export default BaseModal;

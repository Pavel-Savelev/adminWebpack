import React, { useState, useEffect } from "react";

interface IRebootOptionsProps {
    onConfirm: () => void;
    onClose: () => void;
}

const RebootOptions: React.FC<IRebootOptionsProps> = ({
    onConfirm,
    onClose,
}) => {
    const [hardReboot, setHardReboot] = useState(false);
    const [occpReboot, setOccpReboot] = useState(false);
    const [routerReboot, setRouterReboot]= useState(false)
    const [occprOffOn, setOccprOffOn]= useState(false)
    const [monitoringOffOn, setMonitoringOffOn]= useState(false)
    const isDisabled = !hardReboot && !occpReboot && !routerReboot && !occprOffOn && !monitoringOffOn;

    useEffect(() => {
    return () => {
        setHardReboot(false);
        setOccpReboot(false);
        setRouterReboot(false);
        setOccprOffOn(false)
        setMonitoringOffOn(false)
    };
    }, []);

    const handleConfirm = () => {
    onConfirm();
    onClose();
    };

    return (
        <div className="trigger__message">
        <p>Выберите способ перезагрузки</p>

        <ul className="list__message__params">
            <li className="message__param hardReboot">
                <span>Hard Reboot:</span>
                <label className="switch">
                    <input
                    type="checkbox"
                    name="hardReboot"
                    checked={hardReboot}
                    onChange={(e) => setHardReboot(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </li>
            <li className="message__param occpReboot">
                <span>OCCP Reboot:</span>
                <label className="switch">
                    <input
                    type="checkbox"
                    name="occpReboot"
                    checked={occpReboot}
                    onChange={(e) => setOccpReboot(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </li>
            <li className="message__param routerReboot">
                <span>Router Reboot:</span>
                <label className="switch">
                    <input
                    type="checkbox"
                    name="routerReboot"
                    checked={routerReboot}
                    onChange={(e) => setRouterReboot(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </li>
            <li className="message__param occprOffOn">
                <span>Вкл/Выкл OCCP:</span>
                <label className="switch">
                    <input
                    type="checkbox"
                    name="occprOffOn"
                    checked={occprOffOn}
                    onChange={(e) => setOccprOffOn(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </li>
            <li className="message__param setMonitoringOffOn">
                <span>Вкл/Выкл Monitoring:</span>
                <label className="switch">
                    <input
                    type="checkbox"
                    name="monitoringOffOn"
                    checked={monitoringOffOn}
                    onChange={(e) => setMonitoringOffOn(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </li>
        </ul>

        <button className="options__button" onClick={handleConfirm} disabled={isDisabled}>
            Принять
        </button>
        </div>
    );
};

export default RebootOptions;

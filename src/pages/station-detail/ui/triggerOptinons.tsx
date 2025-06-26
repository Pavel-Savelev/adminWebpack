function TriggerOptions (){
    const optionsReboot = ['Connector status:','boot notification:', 'HeartBeat:', 'Meter Values:']
    return(
        <div className="reboot__options">
                <p>
                    Выберите нужное сообщение:
                </p>
                <ul className="station__options-list">
                    {optionsReboot.map((name)=>(
                        <li className="station__options-list-item">
                            <span>{name}</span>
                            <button className="options__button">Отправить</button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}

export default TriggerOptions
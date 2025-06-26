function WebStation(){
    const optionsReboot = ['Web:','Web:', 'Web:', 'Web:']
    return(
        <div className="reboot__options">
                <p>
                    Выберите нужное сообщение:
                </p>
                <ul className="station__options-list">
                    {optionsReboot.map((name)=>(
                        <li className="station__options-list-item">
                            <span>{name}</span>
                            <button className="options__button">Перейти</button>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
export default WebStation
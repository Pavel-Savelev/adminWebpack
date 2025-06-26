interface  IStationUpdates{
    productNumber:number;
    date:string;
    title:string;
}

interface IStationUpdatesProps{
    updates:IStationUpdates[]
}

function StationUpdates({ updates }: IStationUpdatesProps){
    return(
        <div className="station__updates">
            <span>
                Обновления/Обновить
            </span>
            <div className="station__updates-methods">
                <ul>
                    {updates.map((update)=>(
                        <li className="station__updates-item">
                            {update.title} - {update.date}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default StationUpdates
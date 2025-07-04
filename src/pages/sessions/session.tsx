import SessionStatistica from "./ui/sessionTable"


function SessionOfStations(){
    return(
        <div className="session-statistic">
            <div className="session-head">
                <h1>Статистика неудачых сессий</h1>
            </div>
            <div>
                <SessionStatistica></SessionStatistica>
            </div>
        </div>
    )
}

export default SessionOfStations
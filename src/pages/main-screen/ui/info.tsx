import React from "react";
import { useStation777WS } from "../../../hooks/station777";
import {useStationTry} from "../../../hooks/useStations";

function StationInfo() {
  const { stationTest } = useStation777WS();
  const {stationHTTP} = useStationTry()
  if (!stationTest) return <p>Загрузка Test данных станции...</p>;
  if (!stationHTTP) return <p>Загрузка HTTP данных станции...</p>;
  const displayData = stationTest;
  console.log(stationTest)
  return(
    <>
      <h1>Websoket true</h1>
    </>
  )
}
export default StationInfo
//   return (
//     <div>
//       <h2>Информация о станции {displayData.station_id}</h2>

//       <p>Напряжение L1: {displayData.voltage_l1 ?? stationHTTP.voltage_l1} В</p>
//       <p>Напряжение L2: {displayData.voltage_l2 ?? stationHTTP.voltage_l2} В</p>
//       <p>Напряжение L3: {displayData.voltage_l3 ?? stationHTTP.voltage_l3} В</p>

//       <p>Ток L1: {displayData.current_l1 ?? stationHTTP.current_l1} А</p>
//       <p>Ток L2: {displayData.current_l2 ?? stationHTTP.current_l2} А</p>
//       <p>Ток L3: {displayData.current_l3 ?? stationHTTP.current_l3} А</p>

//       <p>Мощность: {displayData.power ?? stationHTTP.power} кВт</p>
//       <p>Энергия: {displayData.energy ?? stationHTTP.energy} кВт⋅ч</p>
//       <p>Частота: {displayData.frequency ?? stationHTTP.frequency} Гц</p>
//       <p>Фактор мощности: {displayData.power_factor ?? stationHTTP.power_factor}</p>
//       <p>Статус разъема: {displayData.connector_status ?? stationHTTP.connector_status}</p>
//       <p>Код ошибки: {displayData.error_code ?? stationHTTP.error_code}</p>
//       <p>Количество ошибок: {displayData.error_count ?? stationHTTP.error_count}</p>

//       <p>Время старта: {displayData.start_time ?? stationHTTP.start_time}</p>
//       <p>Ограничение энергии: {displayData.energy_limit ?? stationHTTP.energy_limit}</p>
//       <p>Временная метка: {displayData.timestamp ?? stationHTTP.timestamp}</p>
//     </div>
//   );
// }

// export default StationInfo;

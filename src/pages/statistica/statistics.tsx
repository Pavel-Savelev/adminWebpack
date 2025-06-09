import React,{useState} from "react";
import { IDataCurrentStations,IChargerStatType } from "../../types/statisctics.js";
import TimeLineChoice from "./ui/timeLineChoice"
import StatisticsTotal from "./ui/statisticMain"
import BarChartComponent from "./ui/graph"
import SliderWithValue from "./ui/slider"
import { IChargerData } from "../../types/diagram.js";
import { ChargerTotal } from "./ui/chargeTotal";
import { useNavigate } from "react-router-dom";

const chargerStatsDataReboot:IChargerStatType[] = [
    { productNumber: 21414, count: 34, date: new Date('2024-05-01') },
    { productNumber: 4141, count: 46, date: new Date('2024-05-02') },
    { productNumber: 1141, count: 80, date: new Date('2024-05-03') },
    { productNumber: 2141, count: 53, date: new Date('2024-05-04') },
    { productNumber: 41341, count: 82, date: new Date('2024-05-05') },
    { productNumber: 14141, count: 34, date: new Date('2024-05-06') },
    { productNumber: 214141, count: 53, date: new Date('2024-05-07') },
    { productNumber: 12345, count: 86, date: new Date('2024-05-08') },
    { productNumber: 124141, count: 38, date: new Date('2024-05-09') },
    { productNumber: 441, count: 65, date: new Date('2024-05-10') },
    { productNumber: 222, count: 84, date: new Date('2024-05-11') },
    { productNumber: 1241, count: 36, date: new Date('2024-05-12') },
    { productNumber: 34141, count: 34, date: new Date('2024-05-13') },
    { productNumber: 4321, count: 58, date: new Date('2024-05-14') },
    { productNumber: 124121, count: 3, date: new Date('2024-05-15') },
        ];

const chargerStatsDataFail:IChargerStatType[] = [
    { productNumber: 214141, count: 33, date: new Date('2024-06-01') },
    { productNumber: 4141, count: 42, date: new Date('2024-06-02') },
    { productNumber: 111, count: 81, date: new Date('2024-06-03') },
    { productNumber: 2141, count: 53, date: new Date('2024-06-04') },
    { productNumber: 41341, count: 12, date: new Date('2024-06-05') },
    { productNumber: 14141, count: 14, date: new Date('2024-06-06') },
    { productNumber: 214141, count: 13, date: new Date('2024-06-07') },
    { productNumber: 12345, count: 83, date: new Date('2024-06-08') },
    { productNumber: 124141, count: 8, date: new Date('2024-06-09') },
    { productNumber: 441, count: 5, date: new Date('2024-06-10') },
    { productNumber: 2131, count: 34, date: new Date('2024-06-11') },
    { productNumber: 1241, count: 36, date: new Date('2024-06-12') },
    { productNumber: 34141, count: 44, date: new Date('2024-06-13') },
    { productNumber: 4321, count: 58, date: new Date('2024-06-14') },
    { productNumber: 124121, count: 3, date: new Date('2024-06-15') },
        ];

    const dataTotalCharger:IChargerData[] = [
        { date: new Date("2022-01-05T08:15:00"), value: 1800 },
    { date: new Date("2022-01-05T18:45:00"), value: 1850 },
    { date: new Date("2022-02-10T09:00:00"), value: 2100 },
    { date: new Date("2022-02-10T20:30:00"), value: 2200 },
    { date: new Date("2022-03-15T07:00:00"), value: 2300 },
    { date: new Date("2022-03-15T22:15:00"), value: 2250 },

    // 2023 год
    { date: new Date("2023-04-01T10:00:00"), value: 1900 },
    { date: new Date("2023-04-01T16:30:00"), value: 2000 },
    { date: new Date("2023-05-20T12:00:00"), value: 2150 },
    { date: new Date("2023-05-20T18:45:00"), value: 2250 },
    { date: new Date("2023-06-10T09:15:00"), value: 2000 },
    { date: new Date("2023-06-10T21:00:00"), value: 1950 },

    // 2024 год
    { date: new Date("2024-09-10T22:00:00"), value: 2050 },

    { date: new Date("2025-05-25T08:00:00"), value: 2100 }, 
    { date: new Date("2025-05-26T09:30:00"), value: 2150 },
    { date: new Date("2025-01-27T14:15:00"), value: 2200 },
    { date: new Date("2025-02-28T16:45:00"), value: 2250 }, 
    { date: new Date("2025-03-29T11:30:00"), value: 2300 },
    { date: new Date("2025-04-30T19:00:00"), value: 2350 }, 
    { date: new Date("2025-05-30T21:15:00"), value: 2400 },
    { date: new Date("2025-05-30T08:01:00"), value: 2100 },
    { date: new Date("2025-05-30T08:02:00"), value: 2100 },
    { date: new Date("2025-05-30T09:03:10"), value: 2100 }, 
    { date: new Date("2025-05-30T10:03:00"), value: 2100 },
    { date: new Date("2025-05-30T11:04:00"), value: 2100 },
    { date: new Date("2025-05-30T12:30:00"), value: 2150 },
    { date: new Date("2025-08-27T14:15:00"), value: 2200 },
    { date: new Date("2025-09-28T16:45:00"), value: 2250 }, 
    { date: new Date("2025-10-29T11:30:00"), value: 2300 },
    { date: new Date("2025-11-30T19:00:00"), value: 2350 }, 
    { date: new Date("2025-12-31T21:15:00"), value: 2400 }
    ]
// думаю тоже будет вызываться апи в самом методе 
const dataMonitoring: IDataCurrentStations = {
        currentMonitoring: 15,
        onlineStation: 10,
        something: 5,
    };
// каким методом лучше передавать сюда дату, где ее сохранять

function parseDDMMYYYY(dateStr: string): Date | null {
  const [day, month, year] = dateStr.split("/").map(Number);
  const isValid = day > 0 && day <= 31 && month > 0 && month <= 12 && year > 1000;

  if (!isValid) return null;
  return new Date(year, month - 1, day);
}

function Statisctics(){
    const navigate = useNavigate()
    const [sliderValue, setSliderValue] = useState(5);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("")

    const handleBarClick = (item: IChargerStatType) => {
    navigate(`/station/${item.productNumber}`, { 
        state: { 
            item
        } 
    });
};
    
    const handleSliderValueChange = (value: number) => {
        setSliderValue(value)
    }
    const handleDateChange = (start: string, end: string) => {
        const startDay = parseDDMMYYYY(start)
        const endDay = parseDDMMYYYY(end)

        if (startDay && endDay){
            setStartDate(start);
            setEndDate(end);
        }
    
    };

    return(
        
        <div className="statistic__body">
            <h1 className="statistics__header">Статистика станици E-PROM</h1>
            <div className="full-width-line" />

            <div className="data__stantions">
                <StatisticsTotal
                data={dataMonitoring}/>
            </div>
            <div className="full-width-line" />

            <div className="statistica__params">
                <div className="choice__range">
                    {/* временная сортировка */}
                    <TimeLineChoice onDateChange={handleDateChange} />
                </div>
                <SliderWithValue onValueChange={handleSliderValueChange}></SliderWithValue>
            </div>
            <div className="full-width-line" />

            <div className="graph__list">
                    <div className="graph__list-item style-window-border">
                        <h3>Количество сбросов</h3>
                        <div className="graph__list-item-content">
                            <span className="nameY name__graph">Количество</span>    
                            {/* график количества сбросов каждой станции в порядке возрастания от 5 до 15 */}
                            <BarChartComponent data={chargerStatsDataReboot}
                                                sliderValue={sliderValue}
                                                startDate={startDate}
                                                endDate={endDate}
                                                onBarClick={handleBarClick}/>
                            <span className="nameX name__graph">Станиции</span>
                        </div>
                    </div>
                    <div className="full-width-line" />
                    <div className="graph__list-item style-window-border">
                        <h3>Количество не удачных страртов</h3>
                        <div className="graph__list-item-content">
                            <span className="nameY name__graph">Количество</span>    
                            <BarChartComponent data={chargerStatsDataFail}
                                                    sliderValue={sliderValue}
                                                    startDate={startDate}
                                                    endDate={endDate}
                                                    onBarClick={handleBarClick}/>
                            <span className="nameX name__graph">Станиции</span>
                        </div>
                    </div>
                    <div className="full-width-line" />
                    <ChargerTotal data = {dataTotalCharger}></ChargerTotal>
                    <div className="full-width-line" />
            </div>
        </div>
    )
    
}


export default Statisctics
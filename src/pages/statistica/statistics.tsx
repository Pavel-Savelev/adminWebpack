import React,{useState} from "react";
import { IDataCurrentStations,IChargerStatType } from "../../types/statisctics.js";
import TimeLineChoice from "./ui/timeLineChoice"
import StatiscitcsTotal from "./ui/statistic"
import BarChartComponent from "./ui/graph"
import SliderWithValue from "./ui/slider"
import { IChargerData } from "../../types/diagram.js";
import { ChargerTotal } from "./ui/chargeTotal";

const chargerStatsDataReboot:IChargerStatType[] = [
    { chargerNameNumber: '214141', count: 34, date: new Date('2024-05-01') },
    { chargerNameNumber: '4141', count: 46, date: new Date('2024-05-02') },
    { chargerNameNumber: '1141', count: 80, date: new Date('2024-05-03') },
    { chargerNameNumber: '2141', count: 53, date: new Date('2024-05-04') },
    { chargerNameNumber: '41341', count: 82, date: new Date('2024-05-05') },
    { chargerNameNumber: '14141', count: 34, date: new Date('2024-05-06') },
    { chargerNameNumber: '214141', count: 53, date: new Date('2024-05-07') },
    { chargerNameNumber: '411', count: 86, date: new Date('2024-05-08') },
    { chargerNameNumber: '124141', count: 38, date: new Date('2024-05-09') },
    { chargerNameNumber: '441', count: 65, date: new Date('2024-05-10') },
    { chargerNameNumber: 'dfe24', count: 84, date: new Date('2024-05-11') },
    { chargerNameNumber: '1241', count: 36, date: new Date('2024-05-12') },
    { chargerNameNumber: '34141', count: 34, date: new Date('2024-05-13') },
    { chargerNameNumber: '4321', count: 58, date: new Date('2024-05-14') },
    { chargerNameNumber: '124121', count: 3, date: new Date('2024-05-15') },
        ];

const chargerStatsDataFail:IChargerStatType[] = [
    { chargerNameNumber: '214141', count: 33, date: new Date('2024-06-01') },
    { chargerNameNumber: '4141', count: 42, date: new Date('2024-06-02') },
    { chargerNameNumber: '1141', count: 81, date: new Date('2024-06-03') },
    { chargerNameNumber: '2141', count: 53, date: new Date('2024-06-04') },
    { chargerNameNumber: '41341', count: 12, date: new Date('2024-06-05') },
    { chargerNameNumber: '14141', count: 14, date: new Date('2024-06-06') },
    { chargerNameNumber: '214141', count: 13, date: new Date('2024-06-07') },
    { chargerNameNumber: '411', count: 83, date: new Date('2024-06-08') },
    { chargerNameNumber: '124141', count: 8, date: new Date('2024-06-09') },
    { chargerNameNumber: '441', count: 5, date: new Date('2024-06-10') },
    { chargerNameNumber: 'dfe24', count: 34, date: new Date('2024-06-11') },
    { chargerNameNumber: '1241', count: 36, date: new Date('2024-06-12') },
    { chargerNameNumber: '34141', count: 44, date: new Date('2024-06-13') },
    { chargerNameNumber: '4321', count: 58, date: new Date('2024-06-14') },
    { chargerNameNumber: '124121', count: 3, date: new Date('2024-06-15') },
        ];

    const dataTotalCharger:IChargerData[] = [
        { date: new Date("2024-06-01"), value: 2000 },
        { date: new Date("2024-06-02"), value: 1850 },
        { date: new Date("2024-06-03"), value: 2200 },
        { date: new Date("2024-06-04"), value: 1980 },
        { date: new Date("2024-06-05"), value: 2100 },
        { date: new Date("2024-06-06"), value: 1950 },
        { date: new Date("2024-06-07"), value: 2250 },
        { date: new Date("2024-06-08"), value: 2300 },
        { date: new Date("2024-06-09"), value: 1900 },
        { date: new Date("2024-06-10"), value: 2050 },
        { date: new Date("2024-06-11"), value: 2150 },
        { date: new Date("2024-06-12"), value: 2000 },
        { date: new Date("2024-06-13"), value: 1950 },
        { date: new Date("2024-06-14"), value: 2400 },
        { date: new Date("2024-06-15"), value: 2250 },
        { date: new Date("2024-06-16"), value: 2350 },
        { date: new Date("2024-06-17"), value: 2100 },
        { date: new Date("2024-06-18"), value: 2500 },
        { date: new Date("2024-06-19"), value: 2050 },
        { date: new Date("2024-06-20"), value: 2200 },
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
    const [sliderValue, setSliderValue] = useState(5);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("")

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
                <StatiscitcsTotal
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
                                                endDate={endDate}/>
                            <span className="nameX name__graph">Станиции</span>
                        </div>
                    </div>
                    <div className="full-width-line" />
                    <div className="graph__list-item style-window-border">
                        <h3>Количество не удачных страртов</h3>
                        <div className="graph__list-item-content">
                            <span className="nameY name__graph">Количество</span>    
                            {/* график количества сбросов каждой станции в порядке возрастания от 5 до 15 */}
                            <BarChartComponent data={chargerStatsDataFail}
                                                    sliderValue={sliderValue}
                                                    startDate={startDate}
                                                    endDate={endDate}/>
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
export type StationStatus = "ok" | "working" | "broken" | "absent";

export type ChargerType = "GBT" | "CCS" | "Type1" | "Type2";

export interface IConnectorStatus {
    type: ChargerType;
    status: StationStatus;
}
type Status = 'offline' | 'online' | 'working';

export interface IDataLogStation{
    productNumber: number,
    message: string,
    date: string,
}

export interface IDataCommentsStation{
    productNumber: number,
    message: string,
    date: string,
    userEmail?:string,
} 

export interface IDataLogs{
    logs:IDataCommentsStation[]
}

interface IStationData{
    station_id:string
    voltage1?:number;
    voltage2?:number;
    voltage3?:number;
    current1?:number;
    current2?:number;
    current3?:number;
    power?:number;
    status?:string;
    transaction_id?:string;
    energymeter_id?:string;
    start_time?:string;
    end_time?:string;
    temperature?:number;
    error_code?:string;
    serial_number?:number;
    timestamp?:string;
    _connector_status_callback?:string;
    _controller_status_callback?:string;
    _station_status_callback?:string;
    _station_error_data?:string;
    _error_count?:number;
    _setup_stage?:string;
    _firmware_version?:string;
    _update_connectors?:string;
    _common_format?:string;
    _power_modules_format?:string
    id:string;
    tag_id?:string;
    energy_limit?:number;
    _energy_act?:number;
    _energy_react?:number;
    _pwr_act?:{
        _pwr_aL1:number;
        _pwr_aL2:number;
        _pwr_aL3:number;
    };
    _pwr_react?:{
        _pwr_rL1:number;
        _pwr_rL2:number;
        _pwr_rL3:number;
    };
    _pwr_seem?:{
        _pwr_sL1:number;
        _pwr_sL2:number;
        _pwr_sL3:number;
    }
    _freq?:string;
    _cosf?:string;
    data?:string;
    _connector_type:any;
    _state?:string;
    _delivered_power?:number;
    _delivered_voltage?:number;
    _delivered_current?:number;
    _battery_percentage?:number;
}

export interface IstationDataProp{
    stations:IStationData[]
}

export interface IElectricalStation {
    id: string;
    // (веб сокет)
    chargers: IConnectorStatus[];  
    // ----------------------
    ip: string;
    ssh: number;
    productNumber: number;
    address: string;
    region: string;
    nameOfApp: string;
    status: Status
    location: {
        lat: number;
        lng: number;
    };
    stationChargerData: {
        total: number;
        phase_A: number;
        phase_B: number;
        phase_C: number;
    };
}

export interface IStations {
    list: IElectricalStation[];
}
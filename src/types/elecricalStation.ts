import { number } from "framer-motion";

export type StationStatus = "ok" | "working" | "broken" | "absent";

export type ChargerType = "GBT" | "CCS" | "Type1" | "Type2";

export interface ChargerStatus {
    type: ChargerType;
    status: StationStatus;
}

export interface ILogItems{
    productNumber: number,
    message: string,
    date: string
}
export interface IElectricalStation {
    id: string;
    chargers: ChargerStatus[];  
    ip: string;
    ssh: number;
    productNumber: number;
    address: string;
    region: string;
    nameOfApp: string;
    location: {
        lat: number;
        lng: number;
    };
    photo?: string;
    comment?: string;
    updateData: string;
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
export type StationStatus = "ok" | "working" | "broken" | "absent";

export type ChargerType = "GBT" | "CCS" | "Type1" | "Type2";

export interface ChargerStatus {
    type: ChargerType;
    status: StationStatus;
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
        x: number;
        y: number;
    };
    photo?: string;
    comment?: string;
    updateData: string;
    logs?: string;
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
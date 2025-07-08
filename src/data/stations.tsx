import { IStations } from "../types/elecricalStation";
import { IDataCommentsStation } from "../types/elecricalStation";

export const allLogs: IDataCommentsStation[] = [
  
];

export const products: IStations = {
    list: [
        {
            id: '123',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "absent",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",

                }
            ],
            ip: '113.134134.1231241',
            ssh: 3424123,
            productNumber: 12345,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 2342",
            status:'online',
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
    

            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 2222,
                phase_C: 1123,
            }
        },
        {
            id: '124',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "working",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",
                }
            ],
            ip: '113.134134.1231241',
            ssh: 3424123,
            productNumber: 222,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 1111",
            status:'offline',
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 1111,
                phase_C: 12,
            }
        },
        {
            id: '125',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "working",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",
                }
            ],
            ip: '113.134134.1231241',
            ssh: 3424123,
            productNumber: 96511,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 1111",
            status:'offline',
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
        
            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 1111,
                phase_C: 12,
            }
        },{
            id: '126',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "working",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",
                }
            ],
            ip: '113.134134.1231241',
            ssh: 3424123,
            productNumber: 111,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 1111",
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
            status:'offline',
        
            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 1111,
                phase_C: 12,
            }
        },
        {
            id: '127',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "absent",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",

                }
            ],
            ip: '113.134134.1231241',
            status:'offline',
            ssh: 3424123,
            productNumber: 12345,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 2342",
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
            

            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 2222,
                phase_C: 1123,
            }
        },
        {
            id: '128',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "absent",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",

                }
            ],
            ip: '113.134134.1231241',
            ssh: 3424123,
            productNumber: 333,
            status:'offline',
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 2342",
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
            

            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 2222,
                phase_C: 1123,
            }
        },
        {
            id: '129',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "absent",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",

                }
            ],
            ip: '113.134134.1231241',
            status:'offline',
            ssh: 3424123,
            productNumber: 12345,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 2342",
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
            

            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 2222,
                phase_C: 1123,
            }
        },
        {
            id: '130',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "absent",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",

                }
            ],
            ip: '113.134134.1231241',
            status:'offline',
            ssh: 3424123,
            productNumber: 12345,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 2342",
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
            

            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 2222,
                phase_C: 1123,
            }
        },
        {
            id: '131',
            status:'offline',
            chargers: [
                {
                    type: "GBT",
                    status: "ok",
                },
                {
                    type: "CCS",
                    status: "absent",
                },
                {
                    type: "Type1",
                    status: "absent"
                },
                {
                    type: "Type2",
                    status: "broken",

                }
            ],
            ip: '113.134134.1231241',
            ssh: 3424123,
            productNumber: 12345,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 2342",
            location: {
                lat: 55.8570,
                lng: 49.1200
            },
            

            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 2222,
                phase_C: 1123,
            }
        },
        
    ]
};
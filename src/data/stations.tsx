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
            id: '1234567',
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
            id: '12345678',
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
            id: '12345699',
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
            id: '123456114',
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
            id: '123456214325',
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
            id: '123456325',
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
            id: '1234564363636',
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
            id: '12345643463',
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
        {
            id: '12345623435647568',
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
        {
            id: '123456334568765',
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
        {
            id: '123456324567543265',
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
        {
            id: '123456325346o9876',
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
        },{
            id: '1234560021',
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
        {
            id: '123456354365879785453',
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
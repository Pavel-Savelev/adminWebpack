import { IStations } from "../types/elecricalStation";

export const products: IStations = {
    list: [
        {
            id: 'efefewfa1231231dwd',
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
            productNumber: 96511,
            address: "ROSTOV",
            region: "OBLAST",
            nameOfApp: "FLY 2342",
            photo: "https://via.placeholder.com/150",
            location: {
                x: 55.8570,
                y: 49.1200
            },
            comment: 'good',
            updateData: '21.01.22',
            logs: 'log num 12121',
            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 2222,
                phase_C: 1123,
            }
        },
        {
            id: 'efefewfa1iii231231dwd',
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
            nameOfApp: "FLY 2342",
            photo: "https://via.placeholder.com/150",
            location: {
                x: 55.8570,
                y: 49.1200
            },
            comment: 'lololo',
            updateData: 'vivivivi',
            logs: 'nono work mexican',
            stationChargerData: {
                total: 123424,
                phase_A: 343,
                phase_B: 1111,
                phase_C: 12,
            }
        }
    ]
};
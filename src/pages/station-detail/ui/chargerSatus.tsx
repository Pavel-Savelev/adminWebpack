import React from "react";
import { StationStatus } from "../../../types/elecricalStation";

interface ChargerTypeTagProps {
    charger: {
        type: string;
        status: StationStatus;
    };
}

const ChargerTypeTag: React.FC<ChargerTypeTagProps> = ({ charger }) => {
    if (charger.status === "absent") return null;

    const getColor = (status: StationStatus) => {
        switch (status) {
            case "ok": return "#10B981";
            case "working": return "#F59E0B";
            case "broken": return "#EF4444";
            default: return "#9CA3AF";
        }
    };

    return (
        <div style={{
            padding: '1rem',
            borderRadius: '0.375rem',
            color: 'white',
            backgroundColor: getColor(charger.status),
            minHeight:120,
            minWidth:120,
            display:"flex",
            justifyContent:'center',
            alignItems:'center'
        }}>
            <p className="font-bold">{charger.type}</p>
        </div>
    );
};

export default ChargerTypeTag;
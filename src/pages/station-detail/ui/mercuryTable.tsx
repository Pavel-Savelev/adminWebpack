import React from "react";
import { IElectricalStation } from "../../../types/elecricalStation";

interface MercuryTableProps {
  station: IElectricalStation;
}
export function MercuryTable({ station }: { station: IElectricalStation }) {
  const { total, phase_A, phase_B, phase_C } = station.stationChargerData;
  return (
    <table >
      <tbody>
        <tr className="cell-block">
          <td> 
            <div>
              <div className="cell-label">Показания</div>
              <div className="cell-value">{total} кВ*ч</div>
            </div>
          </td>
          <td>
            <div>
              <div className="cell-label">Фаза A</div>
              <div className="cell-value">{phase_A} В</div>
            </div>
          </td>
          <td>
            <div>
              <div className="cell-label">Фаза B</div>
              <div className="cell-value">{phase_B} В</div>
            </div>
          </td>
          <td>
            <div>
              <div className="cell-label">Фаза C</div>
              <div className="cell-value">{phase_C} В</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MercuryTable;

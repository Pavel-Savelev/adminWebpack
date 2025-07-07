import React from "react";
import { IDataLogs } from "../../../types/elecricalStation";
import { products } from "../../../data/stations";
import CreateLogList from "../../station-detail/ui/chargerLogList";



const LogsList: React.FC<IDataLogs> = ({ logs }) => {

  return (
    <>
      <div className="logs__page__header">
        <a>
          Список Логов
        </a>
      </div>
      <CreateLogList  
        data={logs}
      />
    </>
  );
};

export default LogsList;
import React from "react";
import { ILogItems } from "../../../types/elecricalStation";
import { products } from "../../../data/stations";
import CreateLogList from "../../station-detail/ui/chargerLogList";

interface Props {
  logs: ILogItems[];
}

const LogsList: React.FC<Props> = ({ logs }) => {
  const stations = products.list;

  return (
    <>
      <div className="logs__page__header">
        <a>
          Список Логов
        </a>
      </div>
      <CreateLogList  
        logs={logs}
      />
    </>
  );
};

export default LogsList;
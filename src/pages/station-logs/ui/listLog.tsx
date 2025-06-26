import React from "react";
import { IDataStation } from "../../../types/elecricalStation";
import { products } from "../../../data/stations";
import CreateLogList from "../../station-detail/ui/chargerLogList";

interface Props {
  logs: IDataStation[];
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
        data={logs}
      />
    </>
  );
};

export default LogsList;
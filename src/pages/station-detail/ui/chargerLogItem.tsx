import { ILogItems } from "../../../types/elecricalStation";

interface ILogItemProps {
  log: ILogItems;
}

function CreateLogItemStation({ log }: ILogItemProps) {
  return (
    <>
      <li className="log_list_item">
        <span className="log_item">
          {log.date} — {log.message}
        </span>
        <div className="divider-line"></div>
      </li>
    </>
  );
}

export default CreateLogItemStation;

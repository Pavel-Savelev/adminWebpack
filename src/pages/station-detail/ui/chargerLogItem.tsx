import { IDataCommentsStation } from "../../../types/elecricalStation";

interface IdataItemProps {
  data: IDataCommentsStation;
}

function CreateDataItemStation({ data }: IdataItemProps) {
  return (
    <>
      <li className="log_list_item">
        <span className="log_item">
          {data.date} — {data.message}
        </span>
        <div className="divider-line"></div>
      </li>
    </>
  );
}

export default CreateDataItemStation;

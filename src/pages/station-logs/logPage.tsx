import { useLogSocket } from "../../hooks/useLogSocket";
import LogsList from "./ui/listLog";

function LogsPage() {
  const logs = useLogSocket();

  return (
    <div className="content">
      <LogsList logs={logs} />
    </div>
  );
}

export default LogsPage;

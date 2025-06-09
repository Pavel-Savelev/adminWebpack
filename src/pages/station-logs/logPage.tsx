import { useLogSocket } from "../../hooks/useLogSocket";
import LogsList from "./ui/listLog";

function LogsPage() {
  const logs = useLogSocket();

  return (
    <div className="content log__page"
    style={{ 
        height: 'calc(100vh - 130px)',
      }}>
      <LogsList logs={logs} />
    </div>
  );
}

export default LogsPage;

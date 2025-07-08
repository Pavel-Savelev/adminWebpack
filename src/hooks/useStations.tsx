import { useEffect, useState } from "react";
import { IStationDataTry } from "../types/elecricalStation";
// не обходимо сделать один компанент для запросов GET POST
export function useStationTry() {
  const [stationHTTP, setStation] = useState<IStationDataTry | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    console.log("Запрос данных в useStationTry"); 

    fetch("http://192.168.20.27:10014/telemetry/778", {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      })

      .then((res) => {
        if (!res.ok) throw new Error("Ошибка HTTP: " + res.status);
        return res.json();
      })
      .then((data: IStationDataTry) => {
        setStation(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  console.log(stationHTTP,'http: одной станции');
  return { stationHTTP, loading, error };
}

export default useStationTry;

import { useState, useEffect } from "react";
import { IDataCommentsStation } from "../types/elecricalStation";

export function useStationAccidents(productNumber: number) {
  const [accidents, setAccidents] = useState<IDataCommentsStation[]>([]);

  useEffect(() => {
    const fetchAccidents = async () => {
      if (!productNumber) return;

      try {
        const response = await fetch(`/api/stations/${productNumber}/accidents`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setAccidents(data);
      } catch (err) {
      }
    };

    fetchAccidents();
  }, [productNumber]);

  return { accidents};
}
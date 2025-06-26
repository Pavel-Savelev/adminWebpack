import { useState, useEffect } from "react";
import { IDataStation } from "../types/elecricalStation";

export function useStationComments(productNumber: number) {
  const [comments, setComments] = useState<IDataStation[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      if (!productNumber) return;

      try {
        const response = await fetch(`/api/stations/${productNumber}/comments`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setComments(data);
      } catch (err) {
      }
    };

    fetchComments();
  }, [productNumber]);

  return { comments};
}

export async function postComment(productNumber: number, commentText: string): Promise<IDataStation> {
  const response = await fetch(`/api/stations/${productNumber}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: commentText,
    }),
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status}`);
  }

  return response.json();
}
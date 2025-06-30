import { useState, useEffect, useCallback } from "react";
import { IDataStation } from "../types/elecricalStation";

export function useStationComments(productNumber: number) {
  const [comments, setComments] = useState<IDataStation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Загрузка комментариев
  const fetchComments = useCallback(async () => {
    if (!productNumber) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/stations/${productNumber}/comments`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setComments(data);
    } catch (err) {
      setError("Не удалось загрузить комментарии");
    } finally {
      setLoading(false);
    }
  }, [productNumber]);
  
  const addComment = useCallback(async (commentText: string) => {
    try {
      const response = await fetch(`/api/stations/${productNumber}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: commentText }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }

      const newComment: IDataStation = await response.json();

      setComments((prev) => [newComment, ...prev]);
    } catch (err) {
      setError("Не удалось отправить комментарий");
    }
  }, [productNumber]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return { comments, loading, error, addComment, refetch: fetchComments };
}

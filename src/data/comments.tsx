import { IDataStation } from "../types/elecricalStation";

export const comments: IDataStation[] = [
  {
    productNumber: 12345,
    message: "Станция перезагружена",
    date: "2023-05-15T10:30:00Z",
    userEmail: "admin@example.com"
  },
  {
    productNumber: 111,
    message: "Обновление прошивки до версии 2.1.3",
    date: "2023-05-14T15:45:00Z"
  },
  {
    productNumber: 222,
    message: "Обнаружена ошибка зарядки",
    date: "2023-05-13T08:20:00Z",
    userEmail: "tech.support@example.com"
  }
];
  import React, { useState, useEffect } from "react";

  interface TimeLineChoiceProps {
    onDateChange: (start: string, end: string) => void;
  }

  function isValidDate(dateStr: string): boolean {
    const [day, month, year] = dateStr.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }


  const TimeLineChoice: React.FC<TimeLineChoiceProps> = ({ onDateChange }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
    if (
      startDate.length === 10 &&
      endDate.length === 10 &&
      isValidDate(startDate) &&
      isValidDate(endDate)
    ) {
      onDateChange(startDate, endDate);
    }
  }, [startDate, endDate]);


    const handleDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setDate: React.Dispatch<React.SetStateAction<string>>
  ) => {
    let input = e.target.value;
    
    let numbersOnly = input.replace(/\D/g, "");

    if (numbersOnly.length > 8) {
      numbersOnly = numbersOnly.slice(0, 8);
    }

    let formatted = "";
    if (numbersOnly.length > 0) {
      formatted += numbersOnly.slice(0, 2);
    }
    if (numbersOnly.length >= 3) {
      formatted += "/" + numbersOnly.slice(2, 4);
    }
    if (numbersOnly.length >= 5) {
      formatted += "/" + numbersOnly.slice(4);
    }

    setDate(formatted);
  };



    return (
      <>
        <h2>Выбор периода для статистики</h2>
        <div className="statistica__date">
          <div className="date__range">
            <input
              type="text"
              value={startDate}
              onChange={(e) => handleDateChange(e, setStartDate)}
              placeholder="DD/MM/YYYY"
              maxLength={10} // Максимальная длина для формата дд/мм/гггг
            />
            <label>Начальный диапозон даты:</label>
          </div>
          <div className="date__range">
            <input
              type="text"
              value={endDate}
              onChange={(e) => handleDateChange(e, setEndDate)}
              placeholder="DD/MM/YYYY"
              maxLength={10}
            />
            <label>Конечный диапозон даты:</label>
          </div>
        </div>
      </>
    );
  };

  export default TimeLineChoice;

import React, { useState, useRef, useEffect } from "react";

interface SliderWithValueProps {
  onValueChange: (value: number) => void;
}

function SliderWithValue({ onValueChange }: SliderWithValueProps) {
  const min = 5;
  const max = 15;
  const [value, setValue] = useState(5);
  const sliderRef = useRef<HTMLInputElement>(null);
  const [thumbPosition, setThumbPosition] = useState(0);

  const isNearMin = value <= min;
  const isNearMax = value >= max;

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const percent = (value - min) / (max - min);
      const sliderWidth = slider.offsetWidth;
      const thumbWidth = 16;
      const offset = percent * (sliderWidth - thumbWidth) + thumbWidth / 2;
      setThumbPosition(offset);
    }

    onValueChange(value);
  }, [value, min, max, onValueChange]);

  return (
    <div className="slider-container">
      <div className="slider-value-wrapper">
        <div className="slider-value" style={{ left: `${thumbPosition}px` }}>
          {value}
        </div>
      </div>

      <input
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="custom-slider"
      />

      <div className="slider-labels">
        <span className={`fade ${isNearMin ? "invisible" : ""}`}>{min}</span>
        <span className={`fade ${isNearMax ? "invisible" : ""}`}>{max}</span>
      </div>
      <div className="slider-dots">
        <span className="slider-dot"></span>
        <span className="slider-dot"></span>
      </div>
    </div>
  );
}

export default SliderWithValue;

import * as d3 from "d3";
import React from "react";
import { useRef, useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { DiagramDataPoint } from "../types/diagram";

interface LinePlotProps {
  data: DiagramDataPoint[];
  activeItem?: "Day" | "Week" | "Month" | "Year";
  width?: number;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const LinePlot: React.FC<LinePlotProps> = ({
  data,
  activeItem = "Month",
  width = 680,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 30,
  marginLeft = 40,
}) => {
  const gx = useRef<SVGGElement>(null);
  const gy = useRef<SVGGElement>(null);
  const [tooltip, setTooltip] = useState({
    visible: false,
    content: "",
    x: 0,
    y: 0,
  });


  const xScale = useMemo(
  () =>
    d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date) as [Date, Date])
        .range([marginLeft, width - marginRight]),
        [data, width, marginLeft, marginRight]
  );

  const yScale = useMemo(
    () =>
      d3
        .scaleLinear()
        .domain([0, (d3.max(data, (d) => d.value) ?? 0) * 1.1])
        .range([height - marginBottom, marginTop]),
    [data, height, marginBottom, marginTop]
  );

  const line = d3
    .line<DiagramDataPoint>()
    .x((d) => xScale(d.date as Date))
    .y((d) => yScale(d.value));

  const xAxisFormatFn = useMemo(() => {
    switch (activeItem) {
      case "Day":
        return d3.timeFormat("%H:%M");
      case "Week":
        return d3.timeFormat("%a %d");
      case "Month":
        return d3.timeFormat("%d %b");
      case "Year":
        return d3.timeFormat("%b");
      default:
        return d3.timeFormat("%d %b");
    }
  }, [activeItem]);

  const tooltipFormatFn = useMemo(() => {
    switch (activeItem) {
      case "Day":
        return (d: any) => `${d3.timeFormat("%H:%M")(d.date)} - ${d.value}`;
      case "Week":
        return (d: any) => `${d3.timeFormat("%a %d %H:%M")(d.date)} - ${d.value}`;
      case "Month":
        return (d: any) => `${d3.timeFormat("%d %b %H:%M")(d.date)} - ${d.value}`;
      case "Year":
        return (d: any) =>
          `${d3.timeFormat("%B %Y")(d.date)} - ${d.value.toFixed(1)}`;
      default:
        return (d: any) => `${d3.timeFormat("%d %b %H:%M")(d.date)} - ${d.value}`;
    }
  }, [activeItem]);

  useEffect(() => {
    if (gx.current) {
      d3.select(gx.current)
        .call(d3.axisBottom(xScale).tickFormat(xAxisFormatFn as any))
        .selectAll("text")
        .style("text-anchor", "middle");
    }
  }, [xScale, xAxisFormatFn]);

  useEffect(() => {
    if (gy.current) {
      d3.select(gy.current).call(d3.axisLeft(yScale));
    }
  }, [yScale]);

  const handleMouseOver = (d: DiagramDataPoint) => {
    setTooltip({
      visible: true,
      content: tooltipFormatFn(d),
      x: xScale(d.date as Date),
      y: yScale(d.value),
    });
  };

  const handleMouseOut = () => {
    setTooltip((t) => ({ ...t, visible: false }));
  };

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ position: "relative" }}>
      <svg width={width} height={height}>
        <g ref={gx} transform={`translate(0,${height - marginBottom})`} />
        <g ref={gy} transform={`translate(${marginLeft},0)`} />

        {yScale.ticks(5).map((tick, i) => (
          <line
            key={i}
            x1={marginLeft}
            x2={width - marginRight}
            y1={yScale(tick)}
            y2={yScale(tick)}
            stroke="var(--color-text)"
            strokeDasharray="4"
          />
        ))}

        <motion.path
          fill="none"
          stroke="blue"
          strokeWidth="1.5"
          d={line(data) || ""}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {data.map((d, i) => (
          <motion.circle
            key={i}
            cx={xScale(d.date as Date)}
            cy={yScale(d.value)}
            r={3}
            fill="white"
            stroke="var(--color-text)"
            onMouseOver={() => handleMouseOver(d)}
            onMouseOut={handleMouseOut}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          />
        ))}
      </svg>

      {tooltip.visible && (
        <div
          style={{
            position: "absolute",
            left: tooltip.x,
            top: tooltip.y - 30,
            transform: "translateX(-50%)",
            background: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "4px 8px",
            borderRadius: "4px",
            fontSize: "12px",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            border:'none'
          }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
};

export default LinePlot;

import React from "react";
import "./TrendVisuals.css";

interface TrendVisualsProps {
  data: number[];
}

export const TrendVisuals: React.FC<TrendVisualsProps> = ({ data }) => {
  const max = Math.max(...data);

  return (
    <div className="trend-visuals">
      {data.map((value, index) => (
        <div
          key={index}
          className="trend-visuals-bar"
          style={{ height: `${(value / max) * 100}%` }}
          title={`Month ${index + 1}: ${value} patients`}
        />
      ))}
    </div>
  );
};

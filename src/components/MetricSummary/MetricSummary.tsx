import React from "react";
import "./MetricSummary.css";

interface MetricSummaryProps {
  label: string;
  value: string | number;
}

export const MetricSummary: React.FC<MetricSummaryProps> = ({
  label,
  value,
}) => {
  return (
    <div className="practice-card-metric">
      <div className="practice-card-metric-label">{label}</div>
      <div className="practice-card-metric-value">{value}</div>
    </div>
  );
};

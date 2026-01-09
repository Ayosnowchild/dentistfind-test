import React from "react";
import "./StatusIndicator.css";

interface StatusIndicatorProps {
  rate: number;
}

const getStatus = (rate: number): "high" | "risk" | "stable" => {
  if (rate >= 20) return "high";
  if (rate < 10) return "risk";
  return "stable";
};

const getStatusLabel = (status: string): string => {
  const labels = {
    high: "High Performer",
    risk: "At Risk",
    stable: "Stable",
  };
  return labels[status as keyof typeof labels];
};

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ rate }) => {
  const status = getStatus(rate);
  const label = getStatusLabel(status);

  return (
    <div className={`status-indicator status-indicator-${status}`}>
      <span className="status-indicator-dot"></span>
      {label.toUpperCase()}
    </div>
  );
};

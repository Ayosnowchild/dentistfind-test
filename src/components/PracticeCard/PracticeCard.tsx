import React from "react";
import { PracticeSummary } from "../../types/practice";
import "./PracticeCard.css";
import { Recommendations } from "../Recommendations/Recommendations";
import { TrendVisuals } from "../TrendVisuals/TrendVisuals";
import { StatusIndicator } from "../StatusIndicator/StatusIndicator";
import { MetricSummary } from "../MetricSummary/MetricSummary";

interface PracticeCardProps {
  practice: PracticeSummary;
}

export const PracticeCard: React.FC<PracticeCardProps> = ({ practice }) => {
  return (
    <div className="practice-card">
      <div className="practice-card-header">
        <h3 className="practice-card-name">{practice.name}</h3>
        <p className="practice-card-location">
          {practice.city}, {practice.country}
        </p>
      </div>

      <div className="practice-card-metrics">
        <MetricSummary
          label="New Patients"
          value={practice.newPatientsThisMonth}
        />
        <MetricSummary
          label="Appointments"
          value={practice.appointmentRequests}
        />
        <MetricSummary
          label="Conversion Rate"
          value={`${practice.conversionRate}%`}
        />

        <div className="practice-card-status-container">
          <StatusIndicator rate={practice.conversionRate} />
        </div>
      </div>

      <div className="practice-card-trend">
        <div className="practice-card-trend-label">6-Month Trend</div>
        <TrendVisuals data={practice.monthlyTrend} />
      </div>

      <Recommendations />
    </div>
  );
};

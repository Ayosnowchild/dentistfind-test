import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { mockPractices } from "./data/mockPractices";
import { PracticeCard } from "./components/PracticeCard/PracticeCard";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <h1 className="app-title">Practice Dashboard</h1>
        <p className="app-subtitle">Overview of dental practice performance</p>
        <div className="practice-summary-section">
          {mockPractices.map((practice) => (
            <PracticeCard key={practice.id} practice={practice} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";

import "./tab.css";

export const Tab = ({ title, setActiveTab, activeTab, index, description }) => (
  <div className="tab">
    <button className="tab-header" onClick={() => setActiveTab(index)}>
      {title}
    </button>
    {activeTab === index && (
      <div className="tab-description">{description}</div>
    )}
  </div>
);

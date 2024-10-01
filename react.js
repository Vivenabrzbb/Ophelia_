import React, { useState, useEffect } from 'react';

function App() {
  const [defects, setDefects] = useState([]);
  const [maintenance, setMaintenance] = useState([]);

  useEffect(() => {
    fetch('/api/defects')  // Assuming an API for real-time defects
      .then(response => response.json())
      .then(data => setDefects(data));

    fetch('/api/maintenance')  // Assuming an API for maintenance predictions
      .then(response => response.json())
      .then(data => setMaintenance(data));
  }, []);

  return (
    <div>
      <h1>AI-Powered Quality Control</h1>
      <h2>Real-Time Defect Detection</h2>
      <ul>
        {defects.map((defect, index) => (
          <li key={index}>{defect.message}</li>
        ))}
      </ul>

      <h2>Predictive Maintenance</h2>
      <ul>
        {maintenance.map((maintenance, index) => (
          <li key={index}>{maintenance.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

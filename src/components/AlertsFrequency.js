import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { timestamp: '2019-01-02T03:50', count: 5 },
  { timestamp: '2019-01-02T03:51', count: 3 },
  { timestamp: '2019-01-02T03:52', count: 8 },
  // ... more data
];

function AlertFrequency() {
  return (
    <div>
      <h2>Alert Frequency Over Time</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AlertFrequency;
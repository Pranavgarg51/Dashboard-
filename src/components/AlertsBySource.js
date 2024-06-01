import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { src_ip: '8.42.77.171', count: 15 },
  { src_ip: '61.176.222.167', count: 5 },
  // ... more data
];

function AlertsBySource() {
  return (
    <div>
      <h2>Alerts by Source IP</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="src_ip" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AlertsBySource;
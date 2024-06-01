import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '3306', value: 10 },
  { name: '1433', value: 7 },
  { name: '5432', value: 5 },
  // ... more data
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

function AlertsByPort() {
  return (
    <div>
      <h2>Alerts by Destination Port</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AlertsByPort;
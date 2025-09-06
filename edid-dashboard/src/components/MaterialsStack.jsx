import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function MaterialsStack({ data }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm text-gray-200 font-medium">Materials Usage</h4>
        <p className="text-xs text-gray-400">Last 7 days</p>
      </div>
      <div style={{ width: '100%', height: 220 }}>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 6, right: 6, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
            <XAxis dataKey="date" tick={{ fill: '#9ca3af' }} />
            <YAxis tick={{ fill: '#9ca3af' }} />
            <Tooltip contentStyle={{ background: 'rgba(15,23,36,0.9)', borderRadius: 8 }} itemStyle={{ color: '#ffffff' }} />
            <Bar dataKey="steel" stackId="a" />
            <Bar dataKey="plastic" stackId="a" />
            <Bar dataKey="adhesive" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

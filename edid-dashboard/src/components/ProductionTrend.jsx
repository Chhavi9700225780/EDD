import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

export default function ProductionTrend({ data }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm text-gray-200 font-medium">Production Trend</h4>
        <p className="text-xs text-gray-400">Last 7 days</p>
      </div>
      <div style={{ width: '100%', height: 260 }}>
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 6, right: 12, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="prodGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.06} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
            <XAxis dataKey="date" tick={{ fill: '#9ca3af' }} />
            <YAxis tick={{ fill: '#9ca3af' }} />
            <Tooltip contentStyle={{ background: 'rgba(15,23,36,0.9)', borderRadius: 8 }} itemStyle={{ color: '#ffffff' }} />
            <Area type="monotone" dataKey="production" stroke="#06b6d4" fill="url(#prodGrad)" strokeWidth={2} animationDuration={800} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

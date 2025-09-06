import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export default function KpiCard({ title, value, delta, sparkData }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-4 shadow-sm border border-white/6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs text-gray-300 uppercase tracking-wide">{title}</p>
          <div className="flex items-baseline gap-3">
            <h3 className="text-2xl font-semibold text-white">{value}</h3>
            {typeof delta !== 'undefined' && (
              <span className={`inline-flex items-center text-sm ${delta >= 0 ? 'text-green-400' : 'text-red-400'}`}>{delta >= 0 ? '▲' : '▼'} {Math.abs(delta)}%</span>
            )}
          </div>
        </div>
        <div className="w-28 h-16">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparkData}>
              <Line type="monotone" dataKey="v" stroke="#34d399" strokeWidth={2} dot={false} animationDuration={800} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-400">Last updated: {new Date().toLocaleTimeString()}</p>
    </motion.div>
  );
}

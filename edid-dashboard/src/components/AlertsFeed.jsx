import React from 'react';
import { motion } from 'framer-motion';

export default function AlertsFeed({ alerts }) {
  const color = (s) => (s === 'critical' ? 'bg-red-500' : s === 'warning' ? 'bg-yellow-500' : 'bg-gray-500');
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-4">
      <h4 className="text-sm text-gray-200 font-medium mb-2">Alerts</h4>
      <div className="space-y-3">
        {alerts?.map((a) => (
          <div key={a.id} className="flex items-start gap-3 p-3 rounded-md bg-white/2">
            <div className={`w-3 h-3 rounded-full ${color(a.severity)} mt-1`} />
            <div>
              <div className="text-sm text-white font-medium">{a.title}</div>
              <div className="text-xs text-gray-400">{new Date(a.time).toLocaleString()}</div>
            </div>
            <div className="ml-auto text-xs text-gray-300">{a.id}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

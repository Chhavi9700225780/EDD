import React from 'react';
import { motion } from 'framer-motion';

export default function DowntimeTimeline({ events }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-4">
      <h4 className="text-sm text-gray-200 font-medium mb-2">Downtime Events</h4>
      <div className="space-y-3">
        {events?.map((e) => (
          <div key={e.id} className="p-3 rounded-md bg-white/2 flex items-start justify-between">
            <div>
              <div className="text-sm text-white font-medium">{e.machine} • {e.reason}</div>
              <div className="text-xs text-gray-400">{new Date(e.start).toLocaleString()} — {new Date(e.end).toLocaleString()}</div>
            </div>
            <div className="text-xs text-gray-300">Ticket: {e.ticket}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

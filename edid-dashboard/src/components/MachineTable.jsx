import React from 'react';
import { motion } from 'framer-motion';

export default function MachineTable({ machines }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="bg-[rgba(255,255,255,0.03)] rounded-2xl p-4">
      <h4 className="text-sm text-gray-200 font-medium mb-2">Machine Health</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="text-xs text-gray-400">
              <th className="pb-2">Machine</th>
              <th className="pb-2">Status</th>
              <th className="pb-2">Temp (°C)</th>
              <th className="pb-2">Vibration</th>
              <th className="pb-2">OEE</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/4">
            {machines?.map((m) => (
              <tr key={m.id} className="py-2">
                <td className="py-3">{m.id}</td>
                <td className="py-3">{m.status}</td>
                <td className="py-3">{m.temp ?? '—'}</td>
                <td className="py-3">{m.vibration ?? '—'}</td>
                <td className="py-3">{m.oee ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

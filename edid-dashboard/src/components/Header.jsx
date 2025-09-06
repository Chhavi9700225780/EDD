import React from 'react';

export default function Header({ meta, onDemo }) {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-[#071026] border-b border-white/5 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-emerald-400 rounded-md flex items-center justify-center text-black font-bold">ED</div>
          <div>
            <div className="text-sm font-semibold">Enterprise Data Integration</div>
            <div className="text-xs text-gray-400">{meta?.plant ?? 'Plant A'} • Dashboard</div>
          </div>
        </div>
        <div className="hidden md:flex items-center bg-white/3 px-2 rounded-lg text-xs text-gray-300">
          <span className="px-2">Date Range</span>
          <select className="bg-transparent outline-none text-sm">
            <option>Last 7 days</option>
            <option>Today</option>
            <option>Last 30 days</option>
            <option>Custom</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-xs text-gray-300">Live • <span className="text-green-400">Connected</span></div>
        <div className="text-xs text-gray-400">Last sync: {meta?.last_synced ? new Date(meta.last_synced).toLocaleString() : '-'}</div>
        <button onClick={onDemo} className="px-3 py-1 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-md text-black text-sm font-medium">Demo</button>
        <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-xs">U</div>
      </div>
    </header>
  );
}

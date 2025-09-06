import React from 'react';

export default function Sidebar({ filters, setFilters }) {
  return (
    <aside className="w-64 p-4 bg-[#071026] border-r border-white/5 min-h-screen">
      <nav className="space-y-6">
        <div>
          <div className="text-xs text-gray-400 uppercase mb-2">Navigation</div>
          <ul className="space-y-1">
            <li className="text-sm text-white font-medium">Dashboard</li>
            <li className="text-sm text-gray-300">Analytics</li>
            <li className="text-sm text-gray-300">Inventory</li>
            <li className="text-sm text-gray-300">Maintenance</li>
            <li className="text-sm text-gray-300">Reports</li>
            <li className="text-sm text-gray-300">Settings</li>
          </ul>
        </div>

        <div>
          <div className="text-xs text-gray-400 uppercase mb-2">Filters</div>
          <div className="space-y-2">
            <label className="text-xs text-gray-300">Plant</label>
            <select value={filters.plant} onChange={(e) => setFilters((s) => ({ ...s, plant: e.target.value }))} className="w-full bg-transparent border border-white/5 rounded-md p-2 text-sm">
              <option>Plant A</option>
              <option>Plant B</option>
            </select>
            <label className="text-xs text-gray-300">Shift</label>
            <select value={filters.shift} onChange={(e) => setFilters((s) => ({ ...s, shift: e.target.value }))} className="w-full bg-transparent border border-white/5 rounded-md p-2 text-sm">
              <option>All</option>
              <option>Shift 1</option>
              <option>Shift 2</option>
            </select>
            <button onClick={() => setFilters({ plant: 'Plant A', shift: 'All' })} className="w-full bg-white/5 text-sm p-2 rounded-md">Reset</button>
          </div>
        </div>
      </nav>
    </aside>
  );
}

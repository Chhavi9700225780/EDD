// src/App.jsx
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import KpiCard from './components/KpiCard';
import ProductionTrend from './components/ProductionTrend';
import MaterialsStack from './components/MaterialsStack';
import DowntimeTimeline from './components/DowntimeTimeline';
import MachineTable from './components/MachineTable';
import AlertsFeed from './components/AlertsFeed';

import { useKPIs, useProduction, useMaterials, useDowntime, useMachines, useAlerts } from './api/hooks';

export default function App() {
  const [filters, setFilters] = useState({ plant: 'Plant A', shift: 'All' });

  // --- Fetch from API (React Query hooks) ---
  // Hooks must be called INSIDE the component (not at top-level).
  const { data: kpisData } = useKPIs();
  const { data: productionData } = useProduction();
  const { data: materialsData } = useMaterials();
  const { data: downtimeData } = useDowntime();
  const { data: machinesData } = useMachines();
  const { data: alertsData } = useAlerts();

  // --- Local safe fallbacks (used if API is not available) ---
  const sampleKpis = {
    oee_percent: 82.5,
    throughput: 360,
    downtime_mins: 45,
    rm_consumed_today: 1250.5,
    inventory_days: 12,
    open_alerts: 3,
  };

  const sampleProduction = [
    { date: '2025-09-01', production: 320 },
    { date: '2025-09-02', production: 340 },
    { date: '2025-09-03', production: 365 },
  ];

  const sampleMaterials = [
    { date: '2025-09-01', steel: 200, plastic: 50, adhesive: 10 },
    { date: '2025-09-02', steel: 220, plastic: 55, adhesive: 12 },
  ];

  const sampleDowntime = [
    { id: 'DT-001', machine: 'M-12', start: '2025-09-06T09:10:00', end: '2025-09-06T09:40:00', reason: 'Sensor failure', ticket: 'TCK-45' }
  ];

  const sampleMachines = [
    { id: 'M-01', status: 'running', temp: 72, vibration: 0.02, oee: 85 },
    { id: 'M-12', status: 'maintenance', temp: null, vibration: null, oee: null },
  ];

  const sampleAlerts = [
    { id: 'A-101', severity: 'critical', title: 'RM shortage: Plastic low', time: '2025-09-06T12:40:00' }
  ];

  // Use API data if present, otherwise fallback to samples
  const kpis = kpisData ?? sampleKpis;
  const production = productionData ?? sampleProduction;
  const materials = materialsData ?? sampleMaterials;
  const downtime = downtimeData ?? sampleDowntime;
  const machines = machinesData ?? sampleMachines;
  const alerts = alertsData ?? sampleAlerts;

  // sparkline data for KPI cards
  const spark = useMemo(() => (production || []).map(p => ({ v: p.production ?? 0 })), [production]);

  return (
    <div className="min-h-screen bg-[#071026] text-white font-sans">
      <div className="flex">
        <Sidebar filters={filters} setFilters={setFilters} />
        <div className="flex-1 min-h-screen">
          <Header meta={{ last_synced: kpis?.last_synced ?? new Date().toISOString(), plant: filters.plant }} onDemo={() => {}} />

          <main className="p-6 space-y-6">
            {/* KPI strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <KpiCard title="OEE" value={`${kpis.oee_percent ?? 0}%`} delta={1.2} sparkData={spark} />
              <KpiCard title="Throughput (units/hr)" value={kpis.throughput ?? 0} delta={-4.5} sparkData={spark} />
              <KpiCard title="Downtime (mins)" value={kpis.downtime_mins ?? 0} delta={2.1} sparkData={spark} />
              <KpiCard title="RM Consumed (kg)" value={kpis.rm_consumed_today ?? 0} delta={-1.1} sparkData={spark} />
              <KpiCard title="Inventory (days)" value={kpis.inventory_days ?? 0} delta={0} sparkData={spark} />
              <KpiCard title="Open Alerts" value={kpis.open_alerts ?? 0} delta={0} sparkData={spark} />
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <ProductionTrend data={production} />
              </div>
              <div className="space-y-4">
                <MaterialsStack data={materials} />
                <DowntimeTimeline events={downtime} />
              </div>
            </div>

            {/* Machine + Alerts */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2">
                <MachineTable machines={machines} />
              </div>
              <div>
                <AlertsFeed alerts={alerts} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

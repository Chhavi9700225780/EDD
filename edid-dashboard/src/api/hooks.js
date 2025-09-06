import { useQuery } from '@tanstack/react-query';
import api from './client';

const safeGet = async (path, fallback = []) => {
  try {
    const res = await api.get(path);
    return res?.data ?? fallback;
  } catch (err) {
    console.error('API fetch error', path, err && err.message ? err.message : err);
    return fallback;
  }
};

export const useKPIs = () => useQuery({
  queryKey: ['kpis'],
  queryFn: () => safeGet('/kpis', {}),
  staleTime: 1000 * 5,
});

export const useProduction = () => useQuery({
  queryKey: ['production_trend'],
  queryFn: () => safeGet('/production_trend', []),
  staleTime: 1000 * 5,
});

export const useMaterials = () => useQuery({
  queryKey: ['materials_usage'],
  queryFn: () => safeGet('/materials_usage', []),
  staleTime: 1000 * 5,
});

export const useDowntime = () => useQuery({
  queryKey: ['downtime_events'],
  queryFn: () => safeGet('/downtime_events', []),
  staleTime: 1000 * 5,
});

export const useMachines = () => useQuery({
  queryKey: ['machines'],
  queryFn: () => safeGet('/machines', []),
  staleTime: 1000 * 5,
});

export const useAlerts = () => useQuery({
  queryKey: ['alerts'],
  queryFn: () => safeGet('/alerts', []),
  staleTime: 1000 * 5,
});
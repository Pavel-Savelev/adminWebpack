
export interface Session {
  connector: string;
  start: string;
  end: string;
  consumption: number;
  startPercent: number;
  power: number;
  maxPower: number;
  endReason: string;
  status: string;
}

export const dataSession: Session[] = [
  { connector: 'A1', start: '2025-06-01T08:00', end: '2025-06-01T09:00', consumption: 12.5, startPercent: 80, power: 22, maxPower: 30, endReason: 'manual', status: 'complete' },
  { connector: 'B2', start: '2025-06-01T10:00', end: '2025-06-01T11:30', consumption: 15.2, startPercent: 75, power: 25, maxPower: 32, endReason: 'auto',   status: 'complete' },
  { connector: 'C3', start: '2025-06-02T07:30', end: '2025-06-02T08:45', consumption: 8.7,  startPercent: 90, power: 18, maxPower: 28, endReason: 'manual', status: 'inprogress' },
  
];


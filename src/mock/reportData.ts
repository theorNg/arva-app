import { ChartData } from '../types';

export const reportData: ChartData = {
  monthlyReport: {
    averagePower: [
      { label: "T1", value: 5.2 },
      { label: "T2", value: 5.1 },
      { label: "T3", value: 5.3 },
      { label: "T4", value: 5.0 },
      { label: "T5", value: 5.2 },
      { label: "T6", value: 5.1 }
    ],
    totalEnergy: [
      { label: "T1", value: 200 },
      { label: "T2", value: 220 },
      { label: "T3", value: 210 },
      { label: "T4", value: 250 },
      { label: "T5", value: 240 },
      { label: "T6", value: 260 }
    ]
  },
  dailyEnergy: [
    { date: "2025-08-01", energy: 8200 }, // Chuyển sang mAh
    { date: "2025-08-02", energy: 10100 }, // Chuyển sang mAh
    { date: "2025-08-03", energy: 6500 }, // Chuyển sang mAh
    { date: "2025-08-04", energy: 9300 }, // Chuyển sang mAh
    { date: "2025-08-05", energy: 12000 }, // Chuyển sang mAh
    { date: "2025-08-06", energy: 7800 }, // Chuyển sang mAh
    { date: "2025-08-07", energy: 11200 }  // Chuyển sang mAh
  ],
  powerTime: [
    { time: 0, power: 7.0 },
    { time: 5, power: 6.8 },
    { time: 10, power: 6.2 },
    { time: 15, power: 6.5 },
    { time: 20, power: 6.0 },
    { time: 25, power: 5.5 },
    { time: 30, power: 4.5 },
    { time: 35, power: 4.0 },
    { time: 40, power: 3.5 },
    { time: 45, power: 3.2 },
    { time: 50, power: 3.0 },
    { time: 55, power: 2.8 },
    { time: 60, power: 2.8 }
  ]
};

export interface ReportSummary {
  totalEnergy: number;
  avgPower: number;
  totalSessions: number;
  efficiency: number;
  cost: number;
  savings: number;
  peakUsage: number;
  offPeakUsage: number;
}

export const reportSummary: ReportSummary = {
  totalEnergy: 1580000, // Chuyển từ kWh sang mAh (1580 kWh * 1000)
  avgPower: 5.2,
  totalSessions: 45,
  efficiency: 92.5,
  cost: 1250000,
  savings: 180000,
  peakUsage: 850000, // Chuyển từ kWh sang mAh
  offPeakUsage: 730000 // Chuyển từ kWh sang mAh
};

export interface WeeklyData {
  week: string;
  energy: number;
  sessions: number;
  avgDuration: number;
  efficiency: number;
}

export const weeklyData: WeeklyData[] = [
  { week: "Tuần 1", energy: 380000, sessions: 12, avgDuration: 45, efficiency: 91.2 }, // Chuyển sang mAh
  { week: "Tuần 2", energy: 420000, sessions: 14, avgDuration: 48, efficiency: 93.1 }, // Chuyển sang mAh
  { week: "Tuần 3", energy: 395000, sessions: 13, avgDuration: 46, efficiency: 92.8 }, // Chuyển sang mAh
  { week: "Tuần 4", energy: 385000, sessions: 11, avgDuration: 44, efficiency: 91.9 }  // Chuyển sang mAh
];

export interface DeviceData {
  device: string;
  energy: number;
  sessions: number;
  avgPower: number;
  efficiency: number;
}

export const deviceData: DeviceData[] = [
  { device: "Power Bank 20K", energy: 20000, sessions: 25, avgPower: 6.2, efficiency: 94.5 }, // Chuyển sang mAh và đổi tên thiết bị
  { device: "Power Bank 10K", energy: 10000, sessions: 15, avgPower: 5.8, efficiency: 92.1 }, // Chuyển sang mAh và đổi tên thiết bị
  { device: "Power Bank 5K", energy: 5000, sessions: 5, avgPower: 7.1, efficiency: 96.2 }   // Chuyển sang mAh và đổi tên thiết bị
];

export interface CostAnalysis {
  month: string;
  totalCost: number;
  savings: number;
  peakCost: number;
  offPeakCost: number;
}

export const costAnalysis: CostAnalysis[] = [
  { month: "T1", totalCost: 1200000, savings: 150000, peakCost: 680000, offPeakCost: 520000 },
  { month: "T2", totalCost: 1320000, savings: 180000, peakCost: 720000, offPeakCost: 600000 },
  { month: "T3", totalCost: 1260000, savings: 160000, peakCost: 690000, offPeakCost: 570000 },
  { month: "T4", totalCost: 1500000, savings: 200000, peakCost: 800000, offPeakCost: 700000 },
  { month: "T5", totalCost: 1440000, savings: 190000, peakCost: 770000, offPeakCost: 670000 },
  { month: "T6", totalCost: 1560000, savings: 210000, peakCost: 830000, offPeakCost: 730000 }
];

export interface ChargingSession {
  date: string;
  sessions: number;
  totalEnergy: number;
  avgPower: number;
  avgDuration: number;
  efficiency: number;
}

export const chargingSessions: ChargingSession[] = [
  { date: "2025-08-01", sessions: 3, totalEnergy: 8200, avgPower: 6.1, avgDuration: 45, efficiency: 92.5 }, // Chuyển sang mAh
  { date: "2025-08-02", sessions: 4, totalEnergy: 10100, avgPower: 6.3, avgDuration: 48, efficiency: 93.1 }, // Chuyển sang mAh
  { date: "2025-08-03", sessions: 2, totalEnergy: 6500, avgPower: 5.8, avgDuration: 42, efficiency: 91.8 }, // Chuyển sang mAh
  { date: "2025-08-04", sessions: 3, totalEnergy: 9300, avgPower: 6.0, avgDuration: 46, efficiency: 92.9 }, // Chuyển sang mAh
  { date: "2025-08-05", sessions: 5, totalEnergy: 12000, avgPower: 6.5, avgDuration: 50, efficiency: 94.2 }, // Chuyển sang mAh
  { date: "2025-08-06", sessions: 2, totalEnergy: 7800, avgPower: 5.9, avgDuration: 44, efficiency: 91.5 }, // Chuyển sang mAh
  { date: "2025-08-07", sessions: 4, totalEnergy: 11200, avgPower: 6.2, avgDuration: 47, efficiency: 93.4 }, // Chuyển sang mAh
  { date: "2025-08-08", sessions: 3, totalEnergy: 9800, avgPower: 6.1, avgDuration: 45, efficiency: 92.7 }, // Chuyển sang mAh
  { date: "2025-08-09", sessions: 4, totalEnergy: 10500, avgPower: 6.4, avgDuration: 49, efficiency: 93.8 }, // Chuyển sang mAh
  { date: "2025-08-10", sessions: 2, totalEnergy: 7200, avgPower: 5.7, avgDuration: 41, efficiency: 91.2 }, // Chuyển sang mAh
  { date: "2025-08-11", sessions: 3, totalEnergy: 8900, avgPower: 6.0, avgDuration: 46, efficiency: 92.3 }, // Chuyển sang mAh
  { date: "2025-08-12", sessions: 4, totalEnergy: 11800, avgPower: 6.3, avgDuration: 48, efficiency: 93.6 }, // Chuyển sang mAh
  { date: "2025-08-13", sessions: 2, totalEnergy: 6800, avgPower: 5.6, avgDuration: 43, efficiency: 91.4 }, // Chuyển sang mAh
  { date: "2025-08-14", sessions: 3, totalEnergy: 9100, avgPower: 5.9, avgDuration: 45, efficiency: 92.1 }  // Chuyển sang mAh
];

// Dữ liệu theo tuần
export const weeklyChargingData = [
  { week: "Tuần 1", sessions: 12, totalEnergy: 38200, avgPower: 6.1, avgDuration: 45, efficiency: 92.5 }, // Chuyển sang mAh
  { week: "Tuần 2", sessions: 14, totalEnergy: 42100, avgPower: 6.3, avgDuration: 48, efficiency: 93.1 }, // Chuyển sang mAh
  { week: "Tuần 3", sessions: 13, totalEnergy: 39500, avgPower: 6.0, avgDuration: 46, efficiency: 92.8 }, // Chuyển sang mAh
  { week: "Tuần 4", sessions: 11, totalEnergy: 38500, avgPower: 5.9, avgDuration: 44, efficiency: 91.9 }  // Chuyển sang mAh
];

// Dữ liệu theo tháng
export const monthlyChargingData = [
  { month: "T1", sessions: 45, totalEnergy: 158200, avgPower: 6.1, avgDuration: 45, efficiency: 92.5 }, // Chuyển sang mAh
  { month: "T2", sessions: 52, totalEnergy: 172100, avgPower: 6.3, avgDuration: 48, efficiency: 93.1 }, // Chuyển sang mAh
  { month: "T3", sessions: 48, totalEnergy: 165500, avgPower: 6.0, avgDuration: 46, efficiency: 92.8 }, // Chuyển sang mAh
  { month: "T4", sessions: 55, totalEnergy: 182500, avgPower: 6.2, avgDuration: 47, efficiency: 93.4 }, // Chuyển sang mAh
  { month: "T5", sessions: 51, totalEnergy: 175800, avgPower: 6.1, avgDuration: 46, efficiency: 92.9 }, // Chuyển sang mAh
  { month: "T6", sessions: 58, totalEnergy: 190200, avgPower: 6.4, avgDuration: 49, efficiency: 93.8 }  // Chuyển sang mAh
];

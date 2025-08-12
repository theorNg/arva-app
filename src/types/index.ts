export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface LeaderboardEntry {
  id: string;
  name: string;
  score: number;
  avatar?: string;
  trend: 'up' | 'down' | 'stable';
  position: number;
}

export interface BatteryPoint {
  day: number;
  percentage: number;
}

export interface BatteryData {
  currentPercentage: number;
  smartphoneHours: number;
  smartwatchDays: number;
  history: BatteryPoint[];
}

export interface LoginCredentials {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface BatteryState {
  data: BatteryData | null;
  isLoading: boolean;
  error: string | null;
} 

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  createdAt: number;
  totalStudyTime: number; // in minutes
  streak: number;
  dailyGoal: number; // in minutes
  role?: 'admin' | 'user';
}

export interface StudySession {
  id?: string;
  date: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  subject: string;
  topic: string;
  studyType: 'Reading' | 'Video Class' | 'Practice' | 'Revision' | 'Group Study' | 'Other';
  duration: number; // in minutes
  note: string;
}

export type Theme = 'light' | 'dark';

export interface DailyStats {
  date: string;
  totalDuration: number;
  sessions: number;
}

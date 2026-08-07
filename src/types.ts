export type TimePeriod = 'morning' | 'day' | 'night';

export interface Affirmation {
  id: string;
  title: string;
  period: TimePeriod;
  text: string;
  focus: string;
  audioDuration: string;
  freq: string;
}

export interface DayProgram {
  day: number;
  title: string;
  focus: string;
  affirmation: string;
  exercise: string;
  completed: boolean;
  unlocked: boolean;
}

export interface FormulaStep {
  number: string;
  title: string;
  description: string;
}

export interface ReprogrammedBelief {
  originalBelief: string;
  rootCause: string;
  affirmations: {
    morning: string;
    day: string;
    night: string;
  };
  action24h: string;
  angelMessage: string;
}

export interface UserProgress {
  completedDays: number[];
  currentStreak: number;
  totalAffirmationsRead: number;
  unlockedBoosters: boolean;
  hasPurchased: boolean;
}

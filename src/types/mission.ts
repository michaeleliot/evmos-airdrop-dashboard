export interface Task {
  id: number;
  description: string;
  points: number;
  reward_category: number;
  isCompleted: boolean;
}

export interface MissionsObject {
  [key: string]: Task[];
}

export interface AllCompletesMissionsByWallet {
  wallet: string;
  missions: number[];
}

export interface CompletedTasksReturnObject {
  missions: number[];
}

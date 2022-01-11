export interface Task {
  id: number;
  name: string;
  points: number;
}

export interface AllCompletesMissionsByWallet {
  wallet: string;
  missions: number[];
}

export interface TaskReturnObject {
  tasks: Task[];
}

export interface MissionReturnObject {
  missions: number[];
}

export interface AllCompletesMissionsByWalletObject {
  completed: AllCompletesMissionsByWallet;
}

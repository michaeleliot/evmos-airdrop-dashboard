import axios from 'axios';
import {
  CompletedTasksReturnObject,
  LeaderBoardEntry,
  LeaderboardReturnObject,
} from 'src/types';
import {apiDomain} from '../const';

export async function getCompletedTasks(address: string): Promise<number[]> {
  const res = await axios.get(`${apiDomain}/user_missions/${address}`);
  const {data}: {data: CompletedTasksReturnObject} = res;
  return data.missions;
}

export async function getLeaderboardData(): Promise<LeaderBoardEntry[]> {
  // TODO Get actual endpoint
  // const res = await axios.get(`${apiDomain}/leaderboard`);
  // const {data}: {data: LeaderboardReturnObject} = res;
  // return data.leaderboard;
  return [
    {
      walletAddress: '0x25dd91069f120d955803def92f2d1b32c2b471de',
      points: 560,
    },
    {
      walletAddress: '0x25dd91061f220d955804def92f2d1b32c2b491dc',
      points: 535,
    },
    {
      walletAddress: '0x25dd91069f120d955803def92f2d1b32c2b471de',
      points: 510,
    },
    {
      walletAddress: '0x25dd91061f220d955804def92f2d1b32c2b491dc',
      points: 495,
    },
  ];
}

export async function getRektDropInformation(
  address: string,
): Promise<number[]> {
  // TODO Talk to Guillermo about evmos apis
  return [];
}

export async function getAnalytics(address: string): Promise<object> {
  // TODO Talk to Guillermo about evmos apis
  return {};
}

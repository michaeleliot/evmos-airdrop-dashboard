import axios from 'axios';
import MissionData from 'src/assets/missiondata';
import {
  CompletedTasksReturnObject,
  LeaderBoardEntry,
  MissionsObject,
} from 'src/types';
import {apiDomain} from '../const';

export async function getMissionData(address: string): Promise<MissionsObject> {
  const missionData: MissionsObject = {};
  const completedTasks = await getCompletedTasks(address);
  const completedTaskObject = Object.fromEntries(
    completedTasks.map(key => [key, true]),
  );

  // Update what tasks they have completed. Might be worth moving this to react
  Object.entries(MissionData).forEach(input => {
    const [mission, tasks] = input;
    missionData[mission] = tasks.map(task =>
      completedTaskObject[task.id] ? {...task, isCompleted: true} : task,
    );
  });
  return missionData;
}

export async function getCompletedTasks(address: string): Promise<number[]> {
  const res = await axios.get(`${apiDomain}/user_missions/${address}`);
  const {data}: {data: CompletedTasksReturnObject} = res;
  return data.missions;
}

export async function getLeaderboardData(): Promise<LeaderBoardEntry[]> {
  // TODO Get actual endpoint
  return [
    {
      rank: 1,
      walletAddress: '0x25dd91069f120d955803def92f2d1b32c2b471de',
      points: 560,
    },
    {
      rank: 2,
      walletAddress: '0x25dd91061f220d955804def92f2d1b32c2b491dc',
      points: 535,
    },
    {
      rank: 3,
      walletAddress: '0x25dd91069f120d955803def92f2d1b32c2b471de',
      points: 510,
    },
    {
      rank: 4,
      walletAddress: '0x25dd91061f220d955804def92f2d1b32c2b491dc',
      points: 495,
    },
  ];
}

export async function getRektDropInformation(
  address: string,
): Promise<number[]> {
  // TODO Get actual endpoint
  return [];
}

import axios from 'axios';
import {
  AllCompletesMissionsByWalletObject,
  MissionReturnObject,
  Task,
  TaskReturnObject,
} from 'src/types';
import {apiDomain} from '../../const';

export async function getTasks(): Promise<Task[]> {
  const res = await axios.get(`${apiDomain}/tasks`);
  const {data}: {data: TaskReturnObject} = res;
  return data.tasks;
}

export async function getMissionsForAddress(
  address: string,
): Promise<number[]> {
  const res = await axios.get(`${apiDomain}/user_missions/${address}`);
  const {data}: {data: MissionReturnObject} = res;
  return data.missions;
}

export async function getAllCompletedTasksForAllAddresses() {
  const res = await axios.get(
    `${apiDomain}/user_missions/get_all_completed_tasks`,
  );
  const {data}: {data: AllCompletesMissionsByWalletObject} = res;
  return data.completed;
}

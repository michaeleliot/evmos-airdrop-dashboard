import axios from 'axios';
import MissionData from 'src/assets/missiondata';
import {CompletedTasksReturnObject, MissionsObject} from 'src/types';
import {apiDomain} from '../const';

export async function getMissionData(address: string): Promise<MissionsObject> {
  const missionData: MissionsObject = {};
  const completedTasks = await getCompletedTasks(address);
  const completedTaskObject = Object.fromEntries(
    completedTasks.map(key => [key, true]),
  );
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

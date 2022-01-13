import React, {useEffect} from 'react';

import LandingPage from './pages/landing/landing.tsx';
import DashboardPage from './pages/dashboard/dashboard.tsx';
import MissionControlPage from './pages/mission control/missionControl.tsx';
import RektdropRewardsPage from './pages/rektdrop rewards/rektdropRewards.tsx';

import {getCompletedTasks} from './services/missionsService';

function App() {
  const [page, setPage] = React.useState(2);
  const [userAddress, setUserAddress] = React.useState('');
  const [completedTasks, setCompletedTasks] = React.useState([]);

  const connectKeplrAccount = address => {
    if (!address) {
      // TODO: error handling
      return;
    }
    setUserAddress(address);
    setPage(1);
  };

  useEffect(async () => {
    if (userAddress) {
      setCompletedTasks(await getCompletedTasks(userAddress));
    }
  }, [userAddress]);

  if (page === 0) {
    return <LandingPage connectKeplrAccount={connectKeplrAccount} />;
  }

  if (page === 1) {
    return <MissionControlPage />;
  }

  if (page === 2) {
    return <RektdropRewardsPage />;
  }

  if (page === 3) {
    return (
      <DashboardPage userAddress={userAddress} userMissions={completedTasks} />
    );
  }
}

export default App;

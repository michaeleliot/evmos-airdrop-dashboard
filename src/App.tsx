import React from 'react';

import LandingPage from './pages/landing/landing';
import DashboardPage from './pages/dashboard/dashboard';
import MissionControlPage from './pages/mission control/missionControl';
import RektdropRewardsPage from './pages/rektdrop rewards/rektdropRewards';

function App() {
  const [page, setPage] = React.useState(2);
  const [userAddress, setUserAddress] = React.useState('');
  const [userMissions, setUserMissions] = React.useState([]);

  const updateKeplrState = (address: string | null): void => {
    if (!address) {
      // TODO: error handling
      return;
    }
    setUserAddress(address);
    setPage(1);
  };

  if (page === 0) {
    return <LandingPage updateKeplrState={updateKeplrState} />;
  }

  if (page === 1) {
    return <MissionControlPage />;
  }

  if (page === 2) {
    return <RektdropRewardsPage />;
  }

  if (page === 3) {
    return (
      <DashboardPage userAddress={userAddress} userMissions={userMissions} />
    );
  }
}

export default App;

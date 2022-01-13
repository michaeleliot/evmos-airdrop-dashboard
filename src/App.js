import React, {useEffect} from 'react';

import LandingPage from './pages/landing/landing.tsx';
import DashboardPage from './pages/dashboard/dashboard.tsx';
import MissionControlPage from './pages/mission control/missionControl.tsx';
import RektdropRewardsPage from './pages/rektdrop rewards/rektdropRewards.tsx';
import TestnetMissionsPage from './pages/testnet missions/testnetMissions.tsx';

import NavigationBar from './components/navigation bar/navigationBar.tsx';

import {getCompletedTasks} from './services/missionsService';

function App() {
  const [page, setPage] = React.useState(3);
  const [userAddress, setUserAddress] = React.useState('');
  const [completedTasks, setCompletedTasks] = React.useState([]);

  const connectKeplrAccount = address => {
    if (!address) {
      // TODO: error handling
      return;
    }
    setUserAddress(address);
    setPage(3);
  };

  useEffect(async () => {
    if (userAddress) {
      setCompletedTasks(await getCompletedTasks(userAddress));
    }
  }, [userAddress]);

  const pageContent = () => {
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
      return <TestnetMissionsPage />;
    }

    if (page === 4) {
      return (
        <DashboardPage
          userAddress={userAddress}
          userMissions={completedTasks}
        />
      );
    }

    return null;
  };

  return (
    <div className="page-base">
      <NavigationBar
        pointCount={150}
        selectedPage={page}
        address={userAddress}
        didSelectPage={newPage => {
          setPage(newPage);
        }}
      />
      {pageContent()}
    </div>
  );
}

export default App;

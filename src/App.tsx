import React, {useEffect} from 'react';

import LandingPage from './pages/landing/landing';
import DashboardPage from './pages/dashboard/dashboard';
import MissionControlPage from './pages/mission control/missionControl';
import RektdropRewardsPage from './pages/rektdrop rewards/rektdropRewards';
import TestnetMissionsPage from './pages/testnet missions/testnetMissions';

import NavigationBar from './components/navigation bar/navigationBar';

import {
  getCompletedTasks,
  getLeaderboardData,
} from './services/missionsService';
import {getRektDropInformation} from './services/evmos';

function App() {
  const [page, setPage] = React.useState(0);
  const [userAddress, setUserAddress] = React.useState('');
  const [completedTasks, setCompletedTasks] = React.useState([] as number[]);

  const updateKeplrState = (address: string | null): void => {
    if (!address) {
      // TODO: error handling
      return;
    }
    setUserAddress(address);
    setPage(3);
  };

  useEffect(() => {
    if (userAddress) {
      getCompletedTasks(userAddress).then(tasks => setCompletedTasks(tasks));
      getLeaderboardData().then(data => {
        console.log('Leaderboard');
        console.log(data);
      });
      getRektDropInformation(userAddress).then((data: any) => {
        console.log('Rekt Drop');
        console.log(data);
      });
    }
  }, [userAddress]);

  const pageContent = () => {
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
      {page !== 0 && (
        <NavigationBar
          pointCount={150}
          selectedPage={page}
          address={userAddress}
          didSelectPage={(newPage: number) => {
            setPage(newPage);
          }}
        />
      )}
      {pageContent()}
    </div>
  );
}

export default App;

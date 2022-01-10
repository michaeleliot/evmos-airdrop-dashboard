import React from 'react';

import LandingPage from './pages/landing/landing.tsx';
import DashboardPage from './pages/dashboard/dashboard.tsx';
import MissionControlPage from './pages/mission control/missionControl.tsx';

function App() {
  const [page, setPage] = React.useState(0);
  const [userAddress, setUserAddress] = React.useState('');
  const [userMissions, setUserMissions] = React.useState([]);

  const connectKeplrAccount = address => {
    if (!address) {
      // TODO: error handling
      return;
    }
    setUserAddress(address);
    setPage(1);
  };

  if (page === 0) {
    return <LandingPage connectKeplrAccount={connectKeplrAccount} />;
  }

  if (page === 1) {
    return <MissionControlPage />;
  }

  if (page === 2) {
    return (
      <DashboardPage userAddress={userAddress} userMissions={userMissions} />
    );
  }
}

export default App;

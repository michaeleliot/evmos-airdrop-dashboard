import React from 'react';

import LandingPage from './pages/landing/landing.tsx';
import DashboardPage from './pages/dashboard/dashboard.tsx';

function App() {
  const [page, setPage] = React.useState(0);
  const [userAddress, setUserAddress] = React.useState('');
  const [userMissions, setUserMissions] = React.useState([]);

  const connectKeplrAccount = address => {
    setUserAddress(address);
    console.log(`Set address to ${address}`);
  };

  if (page === 0) {
    return <LandingPage connectKeplrAccount={connectKeplrAccount} />;
  }
  if (page === 2) {
    return (
      <DashboardPage userAddress={userAddress} userMissions={userMissions} />
    );
  }
}

export default App;

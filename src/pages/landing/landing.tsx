import './landing.css';
import '../../index.css';
import logo from '../../images/logo.svg';
import walletButton from '../../images/walletButton.svg';

export default function LandingPage(props: any) {
  const {connectKeplrAccount} = props;

  const connectWallet = async (callback: any) => {
    const {keplr} = window as any;
    const {getOfflineSignerOnlyAmino} = window as any;
    const chainId = 'evmos_9000-2';

    console.log('Checking keplr');

    if (!getOfflineSignerOnlyAmino || !keplr) {
      const error = 'Please install Keplr extension';
      console.log(error);
      // TODO: handle error
      return;
    }

    await keplr.enable(chainId);

    const offlineSigner = getOfflineSignerOnlyAmino(chainId);
    const accounts = await offlineSigner.getAccounts();

    if (accounts.length > 0) {
      connectKeplrAccount(accounts[0].address);
      return;
    }

    // TODO: handle error
    console.log('No accounts found');
  };

  return (
    <div className="page-base">
      <div className="page-body">
        <img src={logo} alt="Evmos" className="la--logo" />
        <h1 className="la--title">Rektdrop Rewards</h1>
        <p className="la--body">
          Nulla facilisi. Nam accumsan rhoncus justo vel faucibus. Curabitur ut
          libero vitae tellus fringilla ultricies. Pellentesque ullamcorper
          felis at tincidunt mattis.
        </p>
        <div onClick={connectWallet} onKeyDown={connectWallet}>
          <img src={walletButton} alt="Connect Wallet" className="la--wallet" />
        </div>
      </div>
    </div>
  );
}

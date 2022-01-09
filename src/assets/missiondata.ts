const generateMission = (
  id: number,
  task: string,
  points: number,
  reward_category: number,
) => {
  return {
    id,
    task,
    points,
    reward_category,
  };
};

const MissionData = {
  mission1: [
    generateMission(
      0,
      'Be in the set of top 20 participants who have interacted with the most unique smart contracts in an eligible way',
      50,
      1,
    ),
    generateMission(
      1,
      'Deploy a verified smart contract and garner eligible interactions from at least 500 unique registered addresses',
      20,
      1,
    ),
    generateMission(
      2,
      'Deploy a verified DeFi-related smart contract and garner eligible interactions from at least 100 unique registered addresses',
      15,
      1,
    ),
    generateMission(
      3,
      'Deploy a verified NFT-related smart contract and garner eligible interactions from at least 100 unique registered addresses',
      15,
      1,
    ),
    generateMission(
      4,
      'Deploy a verified DAO-related smart contract and garner eligible interactions from at least 100 unique registered addresses',
      15,
      1,
    ),
    generateMission(5, 'Deploy any verified smart contract', 5, 1),
    generateMission(
      6,
      "Deploy a verified smart contract that leverages Evmos' Intrarelayer module",
      30,
      2,
    ),
    generateMission(
      7,
      'Convert an EVM ERC20 token into a Cosmos SDK coin, or vice versa',
      5,
      2,
    ),
    generateMission(
      8,
      'Be in the set of the first 50 addresses who carry out an eligible IBC transfer',
      20,
      3,
    ),
    generateMission(
      9,
      'Carry out an outbound IBC transfer of an EVM ERC20 that has been converted into a Cosmos SDK coin',
      30,
      3,
    ),
    generateMission(
      10,
      'Deploy a verified bridge-related (EVM) smart contract and garner eligible interactions from at least 300 unique registered addresses',
      50,
      3,
    ),
    generateMission(
      11,
      'Make an eligible governance proposal that ends up reaching quorum',
      10,
      4,
    ),
    generateMission(
      12,
      'Have any amount of tokens delegated to any validator for more than 75% of the Olympus Mons runtime',
      5,
      4,
    ),
    generateMission(
      13,
      'Vote on an eligible governance proposal that ends up reaching quorum',
      5,
      4,
    ),
  ],
  mission2: [
    generateMission(14, 'Build a wallet', 50, 1),
    generateMission(
      15,
      'Build and host a UI for a verified smart contract',
      50,
      1,
    ),
    generateMission(
      16,
      'Build a dashboard or block explorer with all of the following parameters represented: validator status and staking information, governance parameters, common chain metrics like: block height, tps, block and tx indexing',
      30,
      2,
    ),
    generateMission(17, 'Build a tx tracer', 30, 2),
    generateMission(
      18,
      'Build and host a UI that represent gas usage and fees across the network',
      20,
      2,
    ),
    generateMission(
      19,
      'Helping to close one or more significant issues in repos for the following projects: https://bit.ly/3D1VKGN',
      20,
      3,
    ),
    generateMission(
      20,
      'Build tools that aid in indexing, e.g. Ethereum ETL',
      50,
      4,
    ),
    generateMission(
      21,
      'Build tools for interacting with validators directly, e.g. mev-geth',
      50,
      4,
    ),
  ],
  mission3: [
    generateMission(22, 'Critical vulnerability', 150, 1),
    generateMission(23, 'High severity bug', 75, 1),
    generateMission(24, 'Medium severity bug', 50, 1),
    generateMission(25, 'Log severity bug', 10, 1),
    generateMission(26, 'Informational finding', 5, 1),
    generateMission(27, 'Submit a ≥10% performance improvement', 50, 2),
    generateMission(28, 'Submit a ≥5% performance improvement', 20, 2),
    generateMission(
      29,
      'Document and share proof of an on-chain tx-ordering exploit originating from a registered address',
      50,
      3,
    ),
    generateMission(
      30,
      'Document a potential attack on the networking or p2p layer that would result in an advantage in capturing MEV',
      30,
      3,
    ),
  ],
};

export default MissionData;

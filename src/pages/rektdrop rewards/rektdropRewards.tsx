import React from 'react';
import './rektdropRewards.css';
import '../../index.css';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

import rektdropIcon from '../../images/rektdropIcon.svg';

const GridLayout = require('react-grid-layout');

const ResponsiveGridLayout = GridLayout.WidthProvider(GridLayout.Responsive);

/// Helper
const getLayoutForKeys = (keys: string[]) => {
  const createLayout = (numItemsPerRow: number, isSmall: boolean) => {
    const cardHeight = isSmall ? 2 : 1;
    return keys.map((key, index) => ({
      i: key,
      x: (index % numItemsPerRow) * 4,
      y: Math.floor(index / numItemsPerRow) * cardHeight,
      w: 4,
      h: cardHeight,
      static: true,
    }));
  };

  const defaultLayout = createLayout(1, false);
  const smallLayout = createLayout(1, true);

  return {
    lg: defaultLayout,
    md: defaultLayout,
    sm: smallLayout,
    xs: smallLayout,
  };
};

function RektdropRewardsGrid(props: any) {
  const keys = ['1', '2', '3', '4'];
  const layout = getLayoutForKeys(keys);

  const card = (
    header: string,
    body: string,
    pointCount: number,
    isComplete: boolean,
  ) => (
    <>
      <div className="r--card--icon-text-container">
        <img src={rektdropIcon} alt="Icon" className="r--card--icon" />
        <div className="r--card--text-container">
          <div className="r--card--title">{header}</div>
          <div className="r--card--body">{body}</div>
        </div>
      </div>
      <div className="r--card--button-container">
        {isComplete && (
          <div
            className="card--point-tag card--point-tag-completed"
            style={{marginRight: 8}}>
            Completed
          </div>
        )}
        <div
          className={`card--point-tag ${
            isComplete && 'card--point-tag-completed'
          }`}>{`${pointCount} PTS`}</div>
      </div>
    </>
  );

  return (
    <ResponsiveGridLayout
      className="layout r--grid"
      containerPadding={[0, 0]}
      layouts={layout}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}}
      rowHeight={200}
      margin={[0, 12]}
      cols={{lg: 4, md: 4, sm: 4, xs: 4}}>
      <div className="r--card card-completed" key="1">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          true,
        )}
      </div>
      <div className="r--card" key="2">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          false,
        )}
      </div>
      <div className="r--card" key="3">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          false,
        )}
      </div>
      <div className="r--card" key="4">
        {card(
          'Vivamus quis velit nec qugue loborti',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in odio fermentum, auctor dui pretium, commodo neque.',
          10,
          false,
        )}
      </div>
    </ResponsiveGridLayout>
  );
}

export default function RektdropRewardsPage(props: any) {
  return (
    <div className="page-base page-content">
      <div className="page--header">Rektdrop Rewards</div>
      <RektdropRewardsGrid />
    </div>
  );
}

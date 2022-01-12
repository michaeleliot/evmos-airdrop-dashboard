import React from 'react';
import './missionControl.css';
import '../../index.css';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';

const GridLayout = require('react-grid-layout');

const ResponsiveGridLayout = GridLayout.WidthProvider(GridLayout.Responsive);

/// Helper
const getLayoutForKeys = (keys: string[]) => {
  const createLayout = (numItemsPerRow: number) => {
    return keys.map((key, index) => ({
      i: key,
      x: (index % numItemsPerRow) * 4,
      y: Math.floor(index / numItemsPerRow) * 2,
      w: 4,
      h: 2,
      static: true,
    }));
  };

  const defaultLayout = createLayout(3);
  const smLayout = createLayout(2);
  const xsLayout = createLayout(1);

  return {
    lg: defaultLayout,
    md: defaultLayout,
    sm: smLayout,
    xs: xsLayout,
  };
};

function MissionControlGrid(props: any) {
  const keys = ['1', '2', '3'];
  const layout = getLayoutForKeys(keys);

  const fieldCardRow = (
    field: string,
    value1: string,
    value2?: string,
    hideDivider?: boolean,
  ) => (
    <div className="m--card--row-container">
      <div className="m--card--row-content">
        <div className="m--card--field">{field}</div>
        <div>
          <div className="m--card--value">
            {value1}
            {value2 && (
              <>
                <span className="m--card--fraction">/</span>
                {value2}
              </>
            )}
          </div>
        </div>
      </div>
      {!hideDivider && <div className="m--card--divider" />}
    </div>
  );

  const textCardRow = (text: string, hideDivider?: boolean) => (
    <div className="m--card--row-container">
      <div className="m--card--text">{text}</div>
      {!hideDivider && <div className="m--card--divider" />}
    </div>
  );

  return (
    <ResponsiveGridLayout
      className="layout m--grid"
      containerPadding={[0, 0]}
      layouts={layout}
      breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480}}
      rowHeight={240}
      margin={[48, 48]}
      cols={{lg: 12, md: 12, sm: 8, xs: 4}}>
      <div className="m--card" key="1">
        <div className="m--card--title">My Summary</div>
        {fieldCardRow('TOTAL POINTS', '150')}
        {fieldCardRow('RANK', '48')}
        {fieldCardRow('COMPLETED MISSIONS', '8', '20')}
        {fieldCardRow('UNEARNED POINTS', '425', undefined, true)}
      </div>
      <div className="m--card" key="2">
        <div className="m--card--title">Everyone Else</div>
        {fieldCardRow('PARTICIPANTS', '4728')}
        {fieldCardRow('COMPLETED MISSIONS', '33825')}
        {fieldCardRow('HIGHEST POINTS', '560', undefined, true)}
      </div>
      <div className="m--card" key="3">
        <div className="m--card--title">Latest Transmissions</div>
        {textCardRow(
          'Mauris in odio fermentum, auctor dui pretium, commodo neque. Nulla facilisi.',
        )}
        {textCardRow(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit in odio fermentum.',
        )}
        {textCardRow(
          'Mauris in odio fermentum, auctor dui pretium, commodo neque. Nulla facilisi.',
        )}
        {textCardRow(
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit in odio fermentum.',
          true,
        )}
      </div>
    </ResponsiveGridLayout>
  );
}

export default function MissionControlPage(props: any) {
  return (
    <div className="page-base m--page-base">
      <div className="page--header">Mission Control</div>
      <MissionControlGrid />
    </div>
  );
}

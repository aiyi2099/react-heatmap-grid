import React from 'react';
import {shallow} from 'enzyme';
import HeatMap from '../src/HeatMap';
import DataGrid from '../src/DataGrid';
import XLabels from '../src/XLabels';

const xLabels = new Array (24).fill (0).map ((_, i) => `${i}`);
const yLabels = ['Sun', 'Mon', 'Tue'];
const data = new Array (yLabels.length)
  .fill (0)
  .map (() =>
    new Array (xLabels.length)
      .fill (0)
      .map (() => Math.floor (Math.random () * 100))
  );

test ('Component renders without error', () => {
  const heatMap = shallow (
    <HeatMap xLabels={xLabels} yLabels={yLabels} data={data} />
  );
  expect (heatMap.find(DataGrid)).toHaveLength (1);
  expect (heatMap.find(XLabels)).toHaveLength (1);
});
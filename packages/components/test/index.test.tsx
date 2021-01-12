// @ts-nocheck
import Chart, { Line } from '../src';

import data from '../../react/test/data';

const canvasEl = document.createElement('canvas');
canvasEl.style.width = '100%';
canvasEl.style.height = '400px';
document.body.appendChild(canvasEl);
const context = canvasEl.getContext('2d');


const App = () => {
  return (
    <Chart data={ data } context={ context }>
      <Line position="reportDateTimestamp*rate" />
    </Chart>
  );
}

const chart = App();
chart.render();

import { compose, lifecycle, pure, withHandlers, withState } from 'recompose';
import Chart from './view';
import c3 from 'c3';

const addChartTypeState = withState('chartType', 'setChartType', 'line');

const addStateHandlers = withHandlers({
  updateChartState: ({ setChartType, chartType }) => () => {
    if (chartType === 'line') setChartType(() => 'bar');
    if (chartType === 'bar') setChartType(() => 'line');
  },
  updateChart: ({ forecast, chartType }) => () => {
    c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x', ...forecast[1]],
          ['Temperature', ...forecast[0]],
        ],
        colors: {
          Temperature: 'orange',
        },
        type: chartType,
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%d-%m-%Y',
          },
        },
      },
    });
  },
});

const addLifecycle = lifecycle({
  componentDidMount() {
    this.props.updateChart();
  },
  componentDidUpdate() {
    this.props.updateChart();
  },
});

const PureChart = pure(Chart);

export default compose(addChartTypeState, addStateHandlers, addLifecycle)(PureChart);

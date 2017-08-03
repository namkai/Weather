import 'c3/c3.css';
import PropTypes from 'prop-types';
import React from 'react';
import './chart.css';

const Chart = ({ chartType, forecast, updateChartState }) => {
  let chart = null;
  if (forecast[0].length > 0) {
    chart = (
      <div>
        <div className="hr-divider mt-5 mb-3">
          <h3 className="hr-divider-content hr-divider-heading">5 Day Forecast</h3>
        </div>
        <div id="chart" />;
        <div>
          <a href="#" onClick={updateChartState} className="btn btn-outline-primary px-3">{chartType} Chart</a>
        </div>
      </div>
    );
  }
  return chart;
};

Chart.propTyes = {
  forecast: PropTypes.arrayOf(PropTypes.array),
};

export default Chart;


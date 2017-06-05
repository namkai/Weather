import c3 from 'c3';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/Chart.css';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartType: 'line',
		};
	}

	componentDidMount() {
		this.updateChart();
	}

	componentDidUpdate() {
		this.updateChart();
	}

	setBarChart = () => {
		this.setState({ chartType: 'bar' });
	};

	setLineChart = () => {
		this.setState({ chartType: 'line' });
	};
	updateChart = () => {
		c3.generate({
			bindto: '#chart',
			data: {
				x: 'x',
				columns: [
					['x', ...this.props.forecast[1]],
					['Temperature', ...this.props.forecast[0]],
				],
				colors: {
					Temperature: 'orange',
				},
				type: this.state.chartType,
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
	};
	generateGraphButton = () => {
		if (this.state.chartType === 'line') {
			return (
				<div>
					<a href="#" onClick={this.setBarChart} className="btn btn-outline-primary px-3">Bar Chart</a>
				</div>
			);
		}
		return (
			<div>
				<a href="#" onClick={this.setLineChart} className="btn btn-outline-primary px-3">Line Chart</a>
			</div>
		);
	};

	render() {
		if (this.props.forecast[0].length === 0) {
			return (
				<div/>
			);
		}
		return (
			<div>
				<div className="hr-divider mt-5 mb-3">
					<h3 className="hr-divider-content hr-divider-heading">5 Day Forecast</h3>
				</div>
				<div id="chart"/>
				{this.generateGraphButton()}
			</div>
		);
	}
}

Chart.propTyes = {
	forecast: PropTypes.arrayOf(PropTypes.array)
}

export default Chart;


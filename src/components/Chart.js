import React, { Component  } from 'react';
import c3 from 'c3';
import '../style/Chart.css';

class Chart extends Component {
	componentDidMount() {
		this.updateChart();
	}
	componentDidUpdate() {
		this.updateChart();
	}
	updateChart = () => {
		const chart = c3.generate({
			bindto: '#chart',
			data: {
				x: 'x',
				columns: [
					['x', ...this.props.forecast[1]],
//            ['x', '20130101', '20130102', '20130103', '20130104', '20130105', '20130106'],
					['Temperature', ...this.props.forecast[0]],
				],
				colors: {
					Temperature: 'orange'
				}
			},
			axis: {
				x: {
					type: 'timeseries',
					tick: {
						format: '%Y-%m-%d'
					}
				},
			},
		});
	}
	render() {
		if (this.props.forecast[0].length === 0) {
			return (
				<div></div>
			)
		}
		return <div id="chart">hi</div>;
	}
}

export default Chart;
//
//class App extends Component {
//	constructor(props) {
//		super(props);
//		this._setBarChart = this._setBarChart.bind(this);
//		this._setLineChart = this._setLineChart.bind(this);
//		this.state = {
//			chartType: 'line'
//		};
//	}
//	_setBarChart() {
//		this.setState({ chartType: 'bar' });
//	}
//	_setLineChart() {
//		this.setState({ chartType: 'line' });
//	}
//	render() {
//		return (
//			<div className="app-wrap">
//				<Chart
//					columns={columns}
//					chartType={this.state.chartType} />
//				<p>
//					Chart Type
//					<button onClick={this._setBarChart}>bar</button>
//					<button onClick={this._setLineChart}>Line</button>
//				</p>
//			</div>
//		);
//	}
//}

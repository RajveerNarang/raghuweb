const barDataFilter = (data, filterTo) => {
	// Filter data based on the specified category
	const filteredData = data.filter((item) => ( item.category === filterTo ));
	
	// Prepare chart data structure
	const labels = filteredData.map(item => item.name);
	const dataValues = filteredData.map(({name, level}) => ({ x: name, y: level }));
  
	const datasets = [{
	  label: filterTo,
	  data: dataValues,
	  backgroundColor: generateColors(8),
	  barPercentage: 0.5,
	  borderColor: generateColors(8)
	}];
  
	return { labels, datasets };
};

const pieDataFilter = (data, filterTo) => {
	// Filter data based on the specified category
	const filteredData = data.filter((item) => ( item.category === filterTo ));
	
	// Prepare chart data structure
	const labels = filteredData.map(item => item.name);
	const dataValues = filteredData.map(item => (item.level));
  
	const datasets = [{
	  label: filterTo,
	  data: dataValues,
	  backgroundColor: generateColors(8),
	  borderColor: generateColors(8)
	}];
  
	return { labels, datasets };
};

const lineDataFilter = (data) => {
	// Filter data based on the specified category
	const filteredData = data.filter((item) => (item.category === 'Journey'));
	
	filteredData.sort((a, b) => a.year - b.year);
  
	// Prepare chart data structure
	const labels = filteredData.map(item => (
		`${item.year}-${item.month.split(':')[0]}-01`
	));
	const dataValues = filteredData.map(item => (
		{
			x: `${item.year}-${item.month.split(':')[0]}-01`,
			y: item.level - 1,
		}
	));

	if (!dataValues.some(d => d.year === '2021-01')) {
		dataValues.push({
		  x: '2021-10-01',
		  y: null,
		});
	  }
  
	const datasets = [{
	  label: 'Journey',
	  data: dataValues,
	  borderColor: '#ff6c00',
	  backgroundColor: '#ff6c00'
	}];

	return { labels, datasets };
};

const createBarChartOptions = () => ({
	scales: {
		y: {
			beginAtZero: true,
			min: 0,
			max: 100,
			ticks: { color: '#fff8' },
		},
		x: { ticks: { color: '#fff8' } }
	},
	plugins: {
		tooltip: { enabled: true }
	},
	interaction: {
		mode: 'index',
	},
	responsive: true,
	maintainAspectRatio: false,
})
const createPieChartOptions = () => ({
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		tooltip: { enabled: true }
	}
})
const createLineChartOptions = () => {

	const monthNames = [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	  ];
	const options = {
		scales: {
			x: {
				beginAtZero: true,
				type: 'time',
				time: {
					unit: 'year',
					displayFormats: { month: 'YYYY' }
				},
				ticks: { color: '#fff8' },
				// title: {
				// 	display: true,
				// 	text: 'Years',
				// 	color: '#fff8'
				// },
				grid: {
					display: true,
					color: '#8888885a'
				}
			},
			y: {
				beginAtZero: true,
				type: 'linear',
				ticks: {
					color: '#fff8',
					callback: (val) => monthNames[val],
					maxTicksLimit: 13
				},
				// title: {
				// 	display: true,
				// 	text: 'Months',
				// 	color: '#fff8'
				// },
				grid: {
					display: true,
					color: '#8888885a'
				}
			}
		},
		tension: 0.4,
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			tooltip: { enabled: true }
		}
	}

	return options
}

const generateColors = (numColors) => {
	const colors = [];
	const increment = 360 / numColors;
  
	for (let i = 0; i < numColors; i++) {
	  const hue = i * increment;
	  const color = `hsl(${hue}, 75%, 60%)`; // Using HSL color model
	  colors.push(color);
	}
  
	return colors;
}

export { 
	barDataFilter, pieDataFilter, lineDataFilter,
	createBarChartOptions, createPieChartOptions, createLineChartOptions
};
export const barDataFilter = (data, filterTo) => {
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

export const pieDataFilter = (data, filterTo) => {
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

export const createBarChartOptions = () => ({
	scales: {
		y: {
			beginAtZero: true,
			min: 0,
			max: 3,
			ticks: { 
				color: '#fff8',
				callback: (val, index) => {
					const labels = ['Novice', 'Intermediate', 'Advanced']
					return index > 0? labels[index - 1] : null
				},
				maxTicksLimit: 4
			},
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
export const createPieChartOptions = () => ({
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		tooltip: { enabled: true }
	}
})

const generateColors = (numColors) => {
	const colors = [];
	const increment = 360 / numColors;
  
	for (let i = 0; i < numColors; i++) {
	  const hue = i * increment;
	  const color = `hsla(${hue}, 75%, 60%, 0.8)`; // Using HSLA color model
	  colors.push(color);
	}
  
	return colors;
}

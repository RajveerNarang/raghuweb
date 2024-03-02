export const dataFilter = (data, filterTo) => {
	// Filter data based on the specified category
	const filteredData = data.filter((item) => {
		return item.category === filterTo
	});
  
	filteredData.sort((a, b) => a.year - b.year);
	
	// Prepare chart data structure
	const labels = filteredData.map(item => item.name);
	const dataValues = filteredData.map(item => item.level);
	const bgColors = filteredData.map(item => item.bgColor);
  
	const datasets = [{
	  label: filterTo,
	  data: dataValues,
	  backgroundColor: generateRainbowColors(bgColors.length),
	  barPercentage: 0.5,
	  borderColor: generateRainbowColors(bgColors.length)
	}];
  
	return { labels, datasets };
};

export const optionRender = (filteredData) => {

	const option = {
		indexAxis: filteredData.datasets[0].label === 'Backend' ? 'y': 'x',
		plugins: {
			tooltip: {
				enabled: true,
			}
		},
		scales: {
			y: {
				beginAtZero: true,
				min: 0,
				max: 100,
				ticks: {
					color: 'white',
				},
			},
			x: {
				beginAtZero: true,
				min: 0,
				max: 100,
				ticks: {
					color: 'white',
				},
			}
		},
		responsive: true,
		maintainAspectRatio: false,
	}

	return option
}

export const lineDataFilter = (data) => {
	// Filter data based on the specified category
	const filteredData = data.filter((item) => {
		return item.category === 'Journey'
	});
	
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
  
	const datasets = [{
	  label: 'Journey',
	  data: dataValues,
	  borderColor: '#ff6c00',
	  backgroundColor: '#ff8c00'
	}];

	return { labels, datasets };
};

export const lineOptionRender = () => {

	const currentYear = new Date().getFullYear();
	
	const monthNames = [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	  ];
	const option = {
		scales: {
			x: {
				beginAtZero: true,
				type: 'time',
				time: {
					unit: 'year',
					min: new Date('2021-01-01T00:00:00.000'),
					max: new Date(`${currentYear + 1}-01-31T00:00:00.000`),
					displayFormats: {
						month: 'YYYY'
					}
				},
				title: {
					display: true,
					text: 'Years',
					color: 'white'
				},
				ticks: {
					color: 'white',
				},
				grid: {
					display: true,
					color: '#8888885a'
				}
			},
			y: {
				beginAtZero: true,
				type: 'linear',
				ticks: {
					color: 'white',
					callback: (val) => monthNames[val],
					maxTicksLimit: 13
				},
				title: {
					display: true,
					text: 'Months',
					color: 'white'
				},
				grid: {
					display: true,
					color: '#8888885a'
				}
			}
		},
		plugins: {
			tooltip: {
				enabled: true,
			}
		},
		tension: 0.4,
		responsive: true,
		maintainAspectRatio: false,
	}

	return option
}

const generateRainbowColors = (numColors) => {
	const colors = [];
	const increment = 360 / numColors;
  
	for (let i = 0; i < numColors; i++) {
	  const hue = i * increment;
	  const color = `hsl(${hue}, 75%, 60%)`; // Using HSL color model
	  colors.push(color);
	}
  
	return colors;
}

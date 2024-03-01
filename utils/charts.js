export const dataFilter = (data, filterTo) => {
	// Filter data based on the specified category
	const filteredData = data.filter((item) => {
		return item.category === filterTo
	});
  
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
  
	// Prepare chart data structure
	const labels = filteredData.map(item => `${item.year}-${item.month.split(':')[0]}-01`);
	const dataValues = filteredData.map(item => (item.month.split(':')[0]));
  
	const datasets = [{
	  label: 'Journey',
	  data: dataValues,
	  borderColor: 'orange',
	}];

	// console.log(labels, dataValues);

	return { labels, datasets };
};

export const lineOptionRender = () => {

	const currentYear = new Date().getFullYear();

	const option = {
		scales: {
			x: {
				type: 'time',
				time: {
					unit: 'year',
					min: new Date('2021-01-01'),
					max: new Date(`${currentYear + 1}-01-31`),
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
				type: 'time',
				time: {
					unit: 'month',
					displayFormats: {
						month: 'MMM'
					},
				},
				ticks: {
					color: 'white'
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

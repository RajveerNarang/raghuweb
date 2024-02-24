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
		maintainAspectRatio: false,
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
		}
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

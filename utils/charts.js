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
		responsive: true,
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

export const lineDataFilter = (data) => {
	// Filter data based on the specified category
	const filteredData = data.filter((item) => {
		return item.category === 'Journey'
	});
  
	// Prepare chart data structure
	const labels = filteredData.map(item => item.year);
	const dataValues = filteredData.map(item => ({x: item.year, y: item.month}));
  
	const datasets = [{
	  label: 'Journey',
	  data: dataValues,
	  borderColor: 'orange',
	}];
  
	return { labels, datasets };
};

export const lineOptionRender = () => {

	const option = {
		scales: {
			x: {
			  type: 'time',
			  time: {
				unit: 'year',
				displayFormats: {
				  month: 'YYYY'
				}
			  },
			  title: {
				display: true,
				text: 'Years'
			  }
			},
			y: {
			  type: 'category',
			  title: {
				display: true,
				text: 'Months'
			  }
			}
		  },
		  plugins: {
			legend: {
			  display: false
			},
			tooltip: {
			  callbacks: {
				label: function(context) {
				  const label = context.dataset.label || '';
				  const value = context.formattedValue;
				  return `${label}: ${value}`;
				}
			  }
			}
		},
		tension: 0.4
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

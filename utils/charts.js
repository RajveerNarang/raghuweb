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
	  backgroundColor: bgColors,
	  barPercentage: 0.5
	}];
  
	return { labels, datasets };
};

export const optionRender = (filteredData) => {

	const option = {
		indexAxis: filteredData.datasets.label === 'Backend' ? 'y': 'x',
		responsive: true,
		plugins: {
			tooltip: {
				enabled: true,
			}
		},
		scales: {
			y: {
				beginAtZero: true,
				min: 0,
				max: 100
			},
			x: {
				beginAtZero: true,
				min: 0,
				max: 100
			}
		}
	}

	return option
}
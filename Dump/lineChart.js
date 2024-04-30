export const lineDataFilter = (data) => {
	
	data.sort((a, b) => a.year - b.year);
  
	// Prepare chart data structure
	const labels = data.map(item => (
		`${item.year}-${item.month.split(':')[0]}-${item.day || '01'}`
	));
	const dataValues = data.map(item => (
		{
			x: `${item.year}-${item.month.split(':')[0]}-01`,
			y: item.level - 1,
		}
	));

  
	const datasets = [{
	  label: 'Journey',
	  data: dataValues,
	  borderColor: '#ff6c00',
	  backgroundColor: '#ff6c00'
	}];

	return { labels, datasets };
};

export const createLineChartOptions = (data) => {
	
	data.sort((a, b) => a.year - b.year);

	const currentYear = new Date().getFullYear();

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
				min: '2021-01-01',
				max: `${currentYear + 1}-01-01`,
				ticks: { color: '#fff8' },
				title: {
					display: true,
					text: 'Years',
					color: '#fff8'
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
					color: '#fff8',
					callback: (val) => monthNames[val],
					maxTicksLimit: 13
				},
				title: {
					display: true,
					text: 'Months',
					color: '#fff8'
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
		interaction: {
			intersect: false,
			mode: 'index',
		},
		plugins: {
			tooltip: { 
				enabled: true,
				callbacks:{
					title: (context) =>{
						const date = new Date(context[0].parsed.x);
						const month = date.toLocaleString('default', { month: 'long' });
						const year = date.getFullYear();
						return `${month} ${year}`;
					},
					label: (context) =>{
						// Making individual data points with color points
						const dataPoint = context.dataset.data[context.dataIndex];
						const date = new Date(dataPoint.x);
						const year = date.getFullYear();
						const month = date.getMonth() + 1; // Note: month is 0-indexed, so add 1

						const matchingDataPoint = data.filter(item => {
							const itemYear = parseInt(item.year);
							const itemMonth = parseInt(item.month.split(':')[0]);

							return itemYear === year && itemMonth === month;
						}).map(({name}) => name); 
						
						return matchingDataPoint
					},
				}
			}
		}
	}

	return options
}

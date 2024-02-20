export const dataStruc = (data, filterTo) => {
	// Filter data based on the specified category
	const filteredData = data.filter(item => item.category === filterTo);
  
	// Prepare chart data structure
	const labels = filteredData.map(item => item.name);
	const dataValues = filteredData.map(item => item.level);
  
	const datasets = [{
	  label: filterTo,
	  data: dataValues
	}];
  
	return { labels, datasets };
};
  
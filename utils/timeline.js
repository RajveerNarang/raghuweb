const parseDate = (dateString) => {
	// Define a map for month names to month numbers
	const months = {
	  Jan: 0, Feb: 1, Mar: 2, Apr: 3,
	  May: 4, Jun: 5, Jul: 6, Aug: 7,
	  Sep: 8, Oct: 9, Nov: 10, Dec: 11
	};
  
	// Split the date string (e.g., "01-Jun-2022")
	const [day, month, year] = dateString.split('-');
  
	const newDate = new Date(year, months[month], day)
	return newDate;
};

export const sortDataByDate = (data) => {
	return data.sort((a, b) => {
		const dateA = parseDate(a.date);
		const dateB = parseDate(b.date);
		return dateA - dateB;
	});
};
  
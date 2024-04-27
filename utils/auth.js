// let isLoggedIn = false;

export const setAccessData = (response) => {
	const { isLoggedIn, role } = response.data

	const expiry = new Date();
	expiry.setDate(expiry.getDate() + 1);
	const expiryString = expiry.toISOString();

	if ((isLoggedIn !== null || undefined) && (role !== null || undefined)) {
		localStorage.setItem('accessData', JSON.stringify({ data: response.data, expiry: expiryString }));
	} 
}

export const getAccessData = () => {
	const storedData = localStorage.getItem('accessData');
	if (storedData) {
	  const { data, expiry } = JSON.parse(storedData);
	  const currentTime = new Date();
	  const expiryTime = new Date(expiry);

	  if (currentTime <= expiryTime) {
		return data;
	  } else {
		// Data has expired, remove it from localStorage
		localStorage.removeItem('accessData');
		return null;
	  }
	}
	return null;
};

export const removeAccessData = () => {
	localStorage.removeItem('accessData');
	// window.location.reload();
}

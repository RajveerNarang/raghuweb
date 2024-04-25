let isLoggedIn = false;

export const setLoggedIn = (value) => {
	isLoggedIn = value;
}

export const getLoggedIn = () => {
	return isLoggedIn;
}

const getRandom = (max) => {
	let random = parseInt(Math.random() * 1000);
	while (random > max) {
		random = parseInt(Math.random() * 1000);
	}
	return random;
};
module.exports = getRandom;

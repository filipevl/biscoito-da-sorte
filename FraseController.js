const Frases = require("./Frases");
const getRandom = require("./getRandom");
const mockup = require("./mockup");

class FraseController {
	getFrase = (req, res) => {
		const frases = new Frases(mockup);
		const intRandom = getRandom(300);
		res.status(200).json(frases.getFrase(intRandom));
	};
}

module.exports = new FraseController();

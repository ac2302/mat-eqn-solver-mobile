const math = require("mathjs");

function solve(coefficients, constants) {
	coefficients = math.matrix(coefficients);
	constants = math.matrix(constants);

	const ans = math.multiply(math.inv(coefficients), constants);

	return ans._data;
}

module.exports = solve;

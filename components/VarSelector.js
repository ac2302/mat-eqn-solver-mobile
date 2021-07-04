import React from "react";
import { View, Text } from "react-native";

function VarSelector({
	n,
	nVariables,
	coefficients,
	setCoefficients,
	constants,
	setConstants,
}) {
	let equation = "";
	for (let i = 0; i < nVariables; i++) {
		try {
			const coefficient = coefficients[n][i];
			const sign = coefficient < 0 ? "-" : "+";
			equation += `+ ${coefficient} x${i + 1} `;
		} catch {
			/* initially,  the coefficients is [[]] */
		}
	}
	equation += `= ${constants[n]}`;

	return (
		<View>
			<Text>equation {n + 1}: </Text>
			<Text> {equation}</Text>
		</View>
	);
}

export default VarSelector;

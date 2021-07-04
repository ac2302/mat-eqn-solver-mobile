import React from "react";
import { View, Text } from "react-native";
import NumericInput from "react-native-numeric-input";

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

	const inputs = Array(nVariables + 1);
	for (let i = 0; i < nVariables; i++) {
		inputs[i] = {
			key: `x${i + 1}`,
			value: (
				<NumericInput
					key={i}
					type="up-down"
					valueType="real"
					onChange={(newVal) => {
						setCoefficients((prevState) => {
							prevState[n][i] = newVal;
							console.log(prevState[n][i]);
							return prevState;
						});
					}}
				/>
			),
		};
	}
	inputs[nVariables] = {
		key: `=`,
		value: (
			<NumericInput
				key="const"
				type="up-down"
				valueType="real"
				onChange={(newVal) =>
					setConstants((prevState) => {
						prevState[n] = newVal;
						return prevState;
					})
				}
			/>
		),
	};

	return (
		<View>
			<Text>equation {n + 1}: </Text>
			<Text> {equation}</Text>
			{/* inputs */}
			{inputs.map((x) => (
				<Text key={x.key}>
					<Text>{x.key}</Text>
					{x.value}
				</Text>
			))}
		</View>
	);
}

export default VarSelector;

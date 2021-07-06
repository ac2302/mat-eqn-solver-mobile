import React from "react";
import { View, Text, StyleSheet } from "react-native";
import NumInput from "./NumInput";
import colors from "../colors";

const styles = StyleSheet.create({
	inputStyles: {
		width: 60,
		fontSize: 25,
		borderRadius: 15,
		textAlign: "center",
		borderWidth: 1,
		borderColor: colors.text,
		backgroundColor: colors.wash,
		width: 100,
	},
});

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
			let coefficient = coefficients[n][i];
			const sign = coefficient < 0 ? "-" : "+";
			if (sign === "-") coefficient *= -1;
			equation += `${sign} ${coefficient} x${i + 1} `;
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
				<NumInput
					style={styles.inputStyles}
					startValue={""}
					max="none"
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
			<NumInput
				style={styles.inputStyles}
				startValue={""}
				max="none"
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
				<View key={x.key}>
					<Text>{x.key}</Text>
					{x.value}
				</View>
			))}
		</View>
	);
}

export default VarSelector;

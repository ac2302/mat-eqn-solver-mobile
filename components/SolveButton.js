import React from "react";
import { Button } from "react-native";

function SolveButton({ nVariables, coefficients, constants }) {
	return (
		<Button
			title="solve"
			onPress={() => {
				console.log({ nVariables, coefficients, constants });
			}}
		/>
	);
}

export default SolveButton;

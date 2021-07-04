import React from "react";
import { Button } from "react-native";
import solve from "../utils/solver";

function SolveButton({ nVariables, coefficients, constants }) {
	return (
		<Button
			title="solve"
			onPress={() => {
				try {
					const ans = solve(coefficients, constants);
					console.log(ans);
				} catch {
					console.log("invalid input");
				}
			}}
		/>
	);
}

export default SolveButton;

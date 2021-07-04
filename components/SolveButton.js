import React from "react";
import { Button } from "react-native";
import solve from "../utils/solver";

function SolveButton({ nVariables, coefficients, constants, setAns }) {
	return (
		<Button
			title="solve"
			onPress={() => {
				try {
					const ans = solve(coefficients, constants);
					setAns({ message: "", values: ans });
					console.log(ans);
				} catch {
					setAns({ message: "invalid input", values: [] });
					console.log("invalid input");
				}
			}}
		/>
	);
}

export default SolveButton;

import React from "react";
import { View, Text } from "react-native";
import NSelector from "./NSelector";
import VarSelector from "./VarSelector";

function VarSelectors({
	nVariables,
	coefficients,
	setCoefficients,
	constants,
	setConstants,
}) {
	let selectors = Array(nVariables);
	for (let i = 0; i < nVariables; i++) {
		selectors[i] = (
			<VarSelector
				key={i}
				n={i}
				nVariables={nVariables}
				coefficients={coefficients}
				setCoefficients={setCoefficients}
				constants={constants}
				setConstants={setConstants}
			/>
		);
	}

	return <View>{selectors}</View>;
}

export default VarSelectors;

import React from "react";
import { Text, View, TextInput } from "react-native";
import NumericInput from "react-native-numeric-input";

function NSelector({ nVariables, setNVariables }) {
	function updateNVariables(newN) {
		if (!isNaN(newN)) {
			if (newN <= 25 && newN > 0) setNVariables(newN);
			else newN = 3;
		}
	}

	return (
		<View>
			<Text>enter number of variables</Text>
			{/* the old textinput is there for browser debugging */}
			<TextInput
				style={{ borderWidth: 1, borderRadius: 100, paddingLeft: 12 }}
				defaultValue={3}
				onChangeText={updateNVariables}
			/>
			<NumericInput
				value={nVariables}
				minValue={1}
				maxValue={25}
				step={1}
				onChange={updateNVariables}
			/>
		</View>
	);
}

export default NSelector;

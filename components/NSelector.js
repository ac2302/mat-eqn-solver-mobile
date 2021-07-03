import React from "react";
import { Text, View, TextInput } from "react-native";

function NSelector({ nVariables, setNVariables }) {
	function updateNVariables(newN) {
		if (!isNaN(newN)) {
			if (newN <= 16 && newN > 0) setNVariables(newN);
		}
	}

	return (
		<View>
			<Text>enter number of variables</Text>
			<TextInput
				style={{ border: "1px solid black" }}
				defaultValue={3}
				onChangeText={updateNVariables}
			/>
		</View>
	);
}

export default NSelector;

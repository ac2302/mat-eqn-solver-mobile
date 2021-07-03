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
				style={{ borderWidth: 1, borderRadius: 100, paddingLeft: 12 }}
				defaultValue={3}
				onChangeText={updateNVariables}
			/>
		</View>
	);
}

export default NSelector;

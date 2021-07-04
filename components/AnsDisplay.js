import React from "react";
import { Text, View } from "react-native";

function AnsDisplay({ nVariables, ans }) {
	console.log(ans);

	let ansString = "";
	for (let i = 0; i < ans.values.length; i++) {
		ansString += `x${i + 1} = ${ans.values[i]}\n`;
	}

	return (
		<View>
			<Text>{ans.message}</Text>
			<Text>{ansString}</Text>
		</View>
	);
}

export default AnsDisplay;

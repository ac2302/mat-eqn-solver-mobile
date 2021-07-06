import { string } from "mathjs";
import React from "react";
import { Text, View, TextInput } from "react-native";

function NumInput({ onChange, max, startValue, style }) {
	const [value, setValue] = React.useState(startValue);

	function textChange(e) {
		setValue(String(e));
		if (!isNaN(e)) if (e < max) onChange(Number(e));
	}

	return (
		<TextInput
			style={style}
			keyboardType="numeric"
			startValue={String(startValue)}
			value={String(value)}
			onChangeText={textChange}
		/>
	);
}

export default NumInput;

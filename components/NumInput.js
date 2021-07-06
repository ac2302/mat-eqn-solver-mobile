import { string } from "mathjs";
import React from "react";
import { Text, View, TextInput } from "react-native";

function NumInput({ onChange, min, max, startValue, style }) {
	const [value, setValue] = React.useState(startValue);

	function textChange(e) {
		e = Number(e);
		setValue(e);
		if (e <= max && e >= min) onChange(Number(e));
		else if (e < min) setValue(String(min));
		else if (e > max) setValue(String(max));
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

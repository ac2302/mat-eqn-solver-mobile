import React from "react";
import { Text, View, StyleSheet } from "react-native";
import NumericInput from "react-native-numeric-input";
import NumInput from "./NumInput";
import colors from "../colors";

function NSelector({ nVariables, setNVariables }) {
	function updateNVariables(newN) {
		if (!isNaN(newN)) {
			if (newN <= 25 && newN > 0) setNVariables(newN);
			else newN = 3;
		}
	}

	const styles = StyleSheet.create({
		container: {
			flexDirection: "row",
			flexWrap: "wrap",
		},

		label: {
			color: colors.text,
			fontSize: 25,
		},
		numinput: {
			marginLeft: 10,
			marginRight: 10,
			flex: 1,
			fontSize: 25,
			borderRadius: 15,
			textAlign: "center",
			borderWidth: 1,
			borderColor: colors.text,
			backgroundColor: colors.wash,
		},
	});

	return (
		<View style={styles.container}>
			<Text style={styles.label}>number of variables</Text>

			<NumInput
				style={styles.numinput}
				onChange={updateNVariables}
				startValue={3}
				min={0}
				max={25}
			/>

			{/* <NumericInput
					style={styles.numeric}
					totalHeight={30}
					totalWidth={50}
					textColor={colors.text}
					backgroundColor={colors.midBlue}
					leftButtonBackgroundColor={colors.pop}
					rightButtonBackgroundColor={colors.pop}
					borderColor={colors.text}
					separatorWidth={1}
					rounded={true}
					value={Number(nVariables)}
					minValue={1}
					maxValue={25}
					step={1}
					onChange={updateNVariables}
				/> */}
		</View>
	);
}

export default NSelector;

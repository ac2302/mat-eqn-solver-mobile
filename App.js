import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NSelector from "./components/NSelector";

export default function App() {
	const [nVariables, setNVariables] = React.useState(3);

	const [coefficients, setCoefficiients] = React.useState([[]]);
	const [constants, setConstants] = React.useState(Array(3).fill(0));

	const styles = StyleSheet.create({
		safeView: {
			flex: 1,
			paddingTop: 25, // fuck ios
			paddingLeft: 25,
			paddingRight: 25,
		},
	});

	React.useEffect(() => {
		let l = nVariables * 10;
		l /= 10;

		setConstants((prevState) => Array(l).fill(0));

		setCoefficiients((prevState) =>
			Array(l)
				.fill([])
				.map((e) => Array(l).fill(0))
		);
	}, [nVariables]);

	// coefficient state debug
	React.useEffect(() => {
		console.log(coefficients);
	}, [coefficients]);

	return (
		<View style={styles.safeView}>
			<NSelector nVariables={nVariables} setNVariables={setNVariables} />
			<Text>variables: {nVariables}</Text>
			<Text>constants: {constants.length}</Text>
			<Text>
				height: {coefficients.length} width: {coefficients[0].length}
			</Text>
		</View>
	);
}

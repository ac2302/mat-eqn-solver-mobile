import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NSelector from "./components/NSelector";
import VarSelectors from "./components/VarSelectors";
import SolveButton from "./components/SolveButton";

export default function App() {
	const [nVariables, setNVariables] = React.useState(3);

	const [coefficients, setCoefficients] = React.useState([[]]);
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
		let l = Number(nVariables) * 10;
		l /= 10;

		setConstants((prevState) => Array(l).fill(0));

		setCoefficients((prevState) =>
			Array(l)
				.fill([])
				.map((e) => Array(l).fill(0))
		);
	}, [nVariables]);

	return (
		<View style={styles.safeView}>
			<NSelector nVariables={nVariables} setNVariables={setNVariables} />

			<ScrollView>
				<VarSelectors
					nVariables={nVariables}
					coefficients={coefficients}
					setCoefficients={setCoefficients}
					constants={constants}
					setConstants={setConstants}
				/>
			</ScrollView>

			<SolveButton
				nVariables={nVariables}
				coefficients={coefficients}
				constants={constants}
			/>
		</View>
	);
}

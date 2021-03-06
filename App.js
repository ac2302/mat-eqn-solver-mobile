import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NSelector from "./components/NSelector";
import VarSelectors from "./components/VarSelectors";
import SolveButton from "./components/SolveButton";
import AnsDisplay from "./components/AnsDisplay";
import NumInput from "./components/NumInput";
import colors from "./colors";

export default function App() {
	const [nVariables, setNVariables] = React.useState(3);

	const [coefficients, setCoefficients] = React.useState([[]]);
	const [constants, setConstants] = React.useState(Array(3).fill(0));
	const [ans, setAns] = React.useState({ message: "", values: [] });

	const styles = StyleSheet.create({
		safeView: {
			flex: 1,
			paddingTop: 40, // fuck ios
			paddingLeft: 25,
			paddingRight: 25,
			// colors
			backgroundColor: colors.midBlue,
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

				<AnsDisplay ans={ans} nVariables={nVariables} />
			</ScrollView>

			<SolveButton
				nVariables={nVariables}
				coefficients={coefficients}
				constants={constants}
				setAns={setAns}
			/>
		</View>
	);
}

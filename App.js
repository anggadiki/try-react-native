import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Botton from "./src/components/molecules/Botton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>hello try my new mobile dev!</Text>
      <Botton title={"Save"}></Botton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "monospace",
  },
});

import { Pressable, StyleSheet, Text } from "react-native";

const Botton = ({ title }) => {
  return (
    <Pressable style={styles.botton}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  botton: {
    backgroundColor: "red",
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontFamily: "monospace",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Botton;

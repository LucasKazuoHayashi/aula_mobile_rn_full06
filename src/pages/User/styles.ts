import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },

  inputView: {
    marginBottom: 30,
  },
  input: {
    height: 50,
    padding: 10,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 4,
    width: Dimensions.get("screen").width - 100,
  },
});

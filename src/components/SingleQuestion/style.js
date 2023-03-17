import { StyleSheet } from "react-native";

const SingleQuestionStyle = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: "white",
  },
  top: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  counter: {
    fontSize: 40,
    fontFamily: "Main",
  },

  questionView: {
    width: "100%",
    padding: 5,
    backgroundColor: "#f3f3f3",
    alignItems: "center",
    borderRadius: 10,
  },
  question: {
    marginVertical: 20,
    fontSize: 25,
    textAlign: "center",
    fontFamily: "Helper",
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "45%",
  },
});

export default SingleQuestionStyle;

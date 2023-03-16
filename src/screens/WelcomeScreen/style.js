import { StyleSheet } from "react-native";

const WelcomeScreenStyle = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  quizgame: {
    fontSize: 60,
    fontFamily: "Main",
    padding: 5,
  },

  text: {
    fontSize: 25,
    marginHorizontal: 30,
    textAlign: "center",
    color: "#497ee8",
    fontWeight: "400",
    marginTop: 40,
    fontFamily: "Main",
  },
  inputView: {
    backgroundColor: "#fbfbfb",
    borderWidth: 2,
    borderRadius: 10,
    width: "100%",
    height: 56,
    paddingHorizontal: 10,
    paddingVertical: 3,
    justifyContent: "center",
    marginVertical: 30,
  },
  input: {
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Main",
  },
});

export default WelcomeScreenStyle;

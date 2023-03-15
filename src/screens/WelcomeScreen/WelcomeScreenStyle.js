import { StyleSheet } from "react-native";

const WelcomeScreenStyle = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  welcomeText: {
    fontSize: 60,
    fontFamily: "Welcome",
  },

  text: {
    fontSize: 30,
    marginHorizontal: 30,
    textAlign: "center",
    color: "#497ee8",
    fontWeight: "400",
    marginTop: 30,
  },
  inputView: {
    backgroundColor: "#fbfbfb",
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
  },
});

export default WelcomeScreenStyle;

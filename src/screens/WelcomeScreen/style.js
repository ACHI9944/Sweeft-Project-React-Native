import { StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";

const WelcomeScreenStyle = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 30,
    backgroundColor: "white",
  },
  quizgame: {
    fontSize: 60,
    fontFamily: "Main",
    padding: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 25,
    marginHorizontal: 20,
    color: Colors.blue100,
    fontWeight: "400",
    marginTop: 40,
    fontFamily: "Main",
  },
  inputView: {
    backgroundColor: Colors.primary100,
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
    fontFamily: "Helper",
  },
});

export default WelcomeScreenStyle;

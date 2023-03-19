import { StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";

const FinishScreenStyle = StyleSheet.create({
  screen: {
    padding: 30,
    alignItems: "center",
    flex: 1,
  },
  summary: {
    width: "100%",
  },

  rateView: {
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  rateText: {
    fontSize: 60,
    fontFamily: "Main",
  },
  nameText: {
    fontSize: 30,
    fontFamily: "Main",
  },
  scoresView: {
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  scores: {
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Main",
    color: Colors.blue100,
  },
});

export default FinishScreenStyle;

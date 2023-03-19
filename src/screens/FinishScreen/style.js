import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";
const device = Dimensions.get("window");

const FinishScreenStyle = StyleSheet.create({
  screen: {
    padding: 30,
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  summary: {
    width: "100%",
  },

  headerView: {
    alignItems: "center",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  header: {
    fontSize: 60,
    fontFamily: "Main",
  },
  scores: {
    fontSize: 35,
    fontFamily: "Helper",
    textAlign: "center",
    marginTop: 25,
  },
  scoresView: {
    alignItems: "center",

    justifyContent: "space-around",
  },

  percentage: {
    width: "100%",
    flexDirection: "column",
    height: 40,
    backgroundColor: Colors.primary100,
    borderRadius: 5,
    borderWidth: 2,
  },
  percentageCounter: {
    backgroundColor: "green",
    height: "100%",
    borderRadius: 2,
  },
  rate: {
    /* flex: 1.3, */
    fontFamily: "Helper",
    textAlign: "center",
    fontSize: 30,
  },
  image: {
    width: (device.width * 4) / 5,
    height: (device.height * 1) / 3,
  },
});

export default FinishScreenStyle;

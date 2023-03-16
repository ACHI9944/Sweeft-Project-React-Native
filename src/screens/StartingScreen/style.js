import { Dimensions, StyleSheet } from "react-native";
const device = Dimensions.get("window");
const StartingScreenStyle = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
    padding: 30,
    justifyContent: "space-between",
  },
  readyText: {
    fontSize: 60,
    fontFamily: "Main",
  },
  image: {
    width: (device.width * 3.5) / 5,
    height: (device.height * 1) / 3,
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

export default StartingScreenStyle;

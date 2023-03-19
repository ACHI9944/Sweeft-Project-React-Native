import { Dimensions, StyleSheet } from "react-native";
const device = Dimensions.get("window");
const ErrorModalStyle = StyleSheet.create({
  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.4,
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.42,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  modal: {
    width: (device.width * 4.2) / 5,
    height: (device.height * 1.1) / 2,
    position: "absolute",
    left: device.width / 2 - (device.width * 4.2) / 10,
    top: device.height / 2 - (device.height * 1.1) / 4,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },

  bigText: {
    fontSize: 30,
    fontFamily: "Main",
    marginBottom: 10,
    alignSelf: "center",
  },
  smallText: {
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "Main",
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

export default ErrorModalStyle;

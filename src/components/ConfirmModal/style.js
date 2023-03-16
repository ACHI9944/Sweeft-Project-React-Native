import { Dimensions, StyleSheet } from "react-native";
const device = Dimensions.get("window");

const ConfirmModalStyle = StyleSheet.create({
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
    width: (device.width * 3.5) / 5,
    height: (device.height * 1) / 3,
    position: "absolute",
    top: device.height / 2 - (device.height * 1) / 6,
    left: device.width / 2 - (device.width * 3.5) / 10,
    borderRadius: 10,
    backgroundColor: "white",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  modalTexts: {
    alignItems: "center",
  },
  bigText: {
    fontSize: 30,
    fontFamily: "Main",
    marginBottom: 10,
  },
  smallText: {
    textAlign: "center",
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

export default ConfirmModalStyle;

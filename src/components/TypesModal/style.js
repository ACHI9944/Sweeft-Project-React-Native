import { Dimensions, StyleSheet } from "react-native";
const deviceHeight = Dimensions.get("window").height;

const TypesModalStyle = StyleSheet.create({
  modalScreen: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  types: {
    width: "100%",
    height: (deviceHeight * 3) / 5,
  },
  contentContainerStyle: {
    alignItems: "center",
  },
  button: {
    marginBottom: 20,
    width: "90%",
  },
  type: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
  },
  selectedType: {
    borderWidth: 2,
    backgroundColor: "#dbdbdb",
  },
  typeText: {
    fontSize: 20,
    fontFamily: "Main",
  },
});

export default TypesModalStyle;

import { StyleSheet } from "react-native";
import Colors from "../../assets/colors/colors";

const SelectingOptionStyles = StyleSheet.create({
  select: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    width: "100%",
    borderRadius: 10,
    backgroundColor: Colors.primary100,
    justifyContent: "center",
  },
  selectedSelect: {
    borderWidth: 2,
    backgroundColor: Colors.primary200,
  },
  correct: {
    backgroundColor: "green",
    borderWidth: 0,
  },
  inCorrect: {
    backgroundColor: "red",
    borderWidth: 0,
  },
  text: {
    fontSize: 19,
    fontFamily: "Helper",
  },
  correctText: {
    color: "white",
  },
});
export default SelectingOptionStyles;

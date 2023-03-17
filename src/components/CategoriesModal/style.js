import { Dimensions, StyleSheet } from "react-native";
const deviceHeight = Dimensions.get("window").height;

const CategoriesModalStyle = StyleSheet.create({
  modalScreen: {
    alignItems: "center",
  },
  categories: {
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
  category: {
    marginVertical: 10,
    height: 50,
    paddingHorizontal: 10,
    width: "90%",
    borderRadius: 10,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
  },
  selectedCategory: {
    borderWidth: 2,
    backgroundColor: "#dbdbdb",
  },
  categoryText: {
    fontSize: 20,
    fontFamily: "Helper",
  },
});

export default CategoriesModalStyle;

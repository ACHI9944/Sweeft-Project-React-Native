import { StyleSheet } from "react-native";

const ChoosingScreenStyle = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
    padding: 30,
  },
  welocomeView: {
    alignItems: "center",
    borderBottomWidth: 1,
    width: "100%",
    paddingVertical: 10,
  },
  welcomeText: {
    fontSize: 60,
    fontFamily: "Main",
  },
  nameText: {
    fontSize: 30,
    fontFamily: "Main",
  },
  rulesView: {
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },

  rules: {
    fontSize: 19,
    fontFamily: "Main",
    color: "#497ee8",
  },
  selections: {
    width: "100%",
  },
  numberDescription: {
    fontWeight: "300",
    fontSize: 15,
    fontFamily: "Main",
    marginTop: 15,
  },

  numberView: {
    marginTop: 3,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  invalidNumberView: {
    borderWidth: 1,
    borderColor: "red",
  },
  correctNumberView: {
    borderWidth: 1,
    borderColor: "#71ce95",
  },
  numberInput: {
    fontSize: 22,
    fontWeight: "300",
  },
  selectDescription: {
    fontWeight: "300",
    fontSize: 15,
    fontFamily: "Main",
    marginTop: 15,
  },
  select: {
    marginTop: 3,
    backgroundColor: "#f3f3f3",
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  selectText: {
    fontSize: 22,
    fontWeight: "300",
  },
});

export default ChoosingScreenStyle;

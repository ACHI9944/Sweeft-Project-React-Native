import { Pressable, StyleSheet, Text } from "react-native";

function CustomButton({ text, onPress, disabled, style }) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
        !!style && style,
      ]}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    width: "100%",
    height: 56,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#497ee8",
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: "#7499e4",
  },
  text: {
    color: "white",
    fontSize: 25,
    fontFamily: "Main",
  },
});

import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../assets/colors/colors";

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
    backgroundColor: Colors.blue100,
    justifyContent: "center",
    alignItems: "center",
  },
  pressed: {
    backgroundColor: Colors.blue200,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontFamily: "Main",
  },
});

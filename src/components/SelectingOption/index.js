import { Pressable, Text } from "react-native";
import SelectingOptionStyles from "./style";

const styles = SelectingOptionStyles;
function SelectingOption({
  givenName,
  setSelected,
  selected,
  confirmed,
  correct,
}) {
  function selectHandler(value) {
    setSelected(value);
  }
  let style;
  if (selected === givenName) {
    style = styles.selectedSelect;
  }
  if (selected === givenName && confirmed && correct === givenName) {
    style = styles.correct;
  }
  if (selected === givenName && confirmed && correct !== givenName) {
    style = styles.inCorrect;
  }
  if (confirmed && correct === givenName) {
    style = styles.correct;
  }
  return (
    <Pressable
      onPress={selectHandler.bind(this, givenName)}
      style={[styles.select, style]}
      disabled={confirmed}
    >
      <Text
        style={[
          styles.text,
          selected === givenName && confirmed && styles.correctText,
          confirmed && correct === givenName && styles.correctText,
        ]}
      >
        {givenName}
      </Text>
    </Pressable>
  );
}

export default SelectingOption;

import { Pressable, Text } from "react-native";
import SelectingOptionStyles from "./style";

const styles = SelectingOptionStyles;
function SelectingOption({
  answer,
  setSelected,
  selected,
  confirmed,
  correct,
}) {
  function selectHandler(value) {
    setSelected(value);
  }
  let style;
  if (selected === answer) {
    style = styles.selectedSelect;
  }
  if (selected === answer && confirmed && correct === answer) {
    style = styles.correct;
  }
  if (selected === answer && confirmed && correct !== answer) {
    style = styles.inCorrect;
  }
  if (confirmed && correct === answer) {
    style = styles.correct;
  }
  return (
    <Pressable
      onPress={() => selectHandler(answer)}
      style={[styles.select, style]}
      disabled={confirmed}
    >
      <Text
        style={[
          styles.text,
          selected === answer && confirmed && styles.correctText,
          confirmed && correct === answer && styles.correctText,
        ]}
      >
        {answer}
      </Text>
    </Pressable>
  );
}

export default SelectingOption;
